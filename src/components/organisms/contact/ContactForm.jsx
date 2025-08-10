import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExpertSnippet from './ExpertSnippet';
import MiniTestimonial from './MiniTestimonial';
import emailjs from '@emailjs/browser'; // Import EmailJS library
import envConfig from '../../../utils/envConfig'; // Import centralized environment config

const ContactForm = ({ service, serviceConfig, onSuccess }) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null); // State for handling submission errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State to prevent multiple submissions

  // Initialize EmailJS with your Public Key once when the component mounts
  useEffect(() => {
    // Validate EmailJS configuration on component mount
    if (!envConfig.validateEmailJSConfig()) {
      console.error('EmailJS configuration is incomplete');
      setError('Email service configuration error');
      return;
    }
    
    // Initialize EmailJS with the public key from environment config
    emailjs.init(envConfig.emailjs.publicKey);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    setIsSubmitting(true); // Disable the submit button

    // Use environment config for EmailJS settings
    const emailConfig = envConfig.emailjs;

    // Debug: Check if environment variables are loaded
    if (!emailConfig.serviceId || !emailConfig.templateId) {
      console.error("Missing EmailJS environment variables:");
      console.error("Service ID:", emailConfig.serviceId ? "✓" : "✗");
      console.error("Template ID:", emailConfig.templateId ? "✓" : "✗");
      setError("EmailJS configuration is missing. Please check environment variables.");
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters. These keys must match the variables in your EmailJS template.
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone || 'N/A', // Use 'N/A' if phone is optional and not provided
      message: formData.message,
      service_type: service, // Pass the service prop

      // Dynamically add other fields from config.fields
      // This correctly filters out base fields and joins array values for checkboxes
      ...Object.fromEntries(
        Object.entries(formData).filter(([key]) =>
          !['name', 'email', 'phone', 'message'].includes(key)
        ).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(', ') : value // Join array values for checkboxes
        ])
      )
    };

    console.log("Template Params being sent:", templateParams); // Essential for debugging!
    
    // Debug environment variables (remove in production)
    if (emailConfig.debugMode) {
      console.log("EmailJS Config:", envConfig.getMaskedConfig().emailjs);
    }

    try {
      // Send the email using EmailJS with timeout
      const response = await Promise.race([
        emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), emailConfig.timeout)
        )
      ]);

      if (response.status === 200) { // EmailJS sends back a status of 200 on success
        setSubmitted(true);
        // Reset form and clear data after a short delay to show success message
        setTimeout(() => {
          setSubmitted(false);
          e.target.reset(); // Reset the form fields
          setFormData({}); // Clear formData state
          if (onSuccess) onSuccess(); // Trigger the popup to close
        }, 3000); // Display success message for 3 seconds
      } else {
        // EmailJS can return other statuses or errors in the response object
        console.error("EmailJS error response:", response);
        setError(`Failed to send message. EmailJS status: ${response.status} - ${response.text}`);
      }

    } catch (err) {
      // Handle network errors or other unexpected issues during the EmailJS call
      console.error("Network or EmailJS SDK error:", err);
      
      if (err.message === 'Request timeout') {
        setError("Request timed out. Please check your internet connection and try again.");
      } else {
        setError("An unexpected error occurred while sending your message. Please try again later.");
      }
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => {
        const currentValues = prev[name] || []; // Use currentValues to avoid confusion with platforms
        if (checked) {
          return { ...prev, [name]: [...currentValues, value] };
        } else {
          return { ...prev, [name]: currentValues.filter(item => item !== value) };
        }
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const config = serviceConfig;

  return (
    <motion.div
      key={service}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: "spring", damping: 20 }}
      className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200"
    >
      <motion.h3
        className="text-3xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {config.title}
      </motion.h3>
      <motion.p
        className="text-gray-600 mb-6"
        dangerouslySetInnerHTML={{ __html: config.responseTime }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <ExpertSnippet
        name={config.expert.name}
        title={config.expert.title}
        image={`https://placehold.co/100x100/4F46E5/FFFFFF?text=${config.expert.name.split(' ').map(n => n[0]).join('')}`}
        gradient={config.expert.gradient}
      />
      <MiniTestimonial
        quote={config.testimonial.quote}
        author={config.testimonial.author}
        gradient={config.testimonial.gradient}
      />

      {/* Submission success message */}
      {submitted && (
        <motion.div
          className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-4 rounded-2xl mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ✅ Thank you! We'll be in touch soon.
        </motion.div>
      )}

      {/* Submission error message */}
      {error && (
        <motion.div
          className="bg-red-500 text-white p-4 rounded-2xl mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ❌ {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name *"
            className="form-input w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            required
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email Address *"
            className="form-input w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            required
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <motion.input
          type="tel"
          name="phone"
          placeholder="Phone Number (Optional)"
          className="form-input w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        {/* Dynamic fields from config.fields */}
        {config.fields.map((field, index) => (
          <motion.div
            key={field.name} // Use field.name as key
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {field.type === 'select' && (
              <select
                name={field.name}
                className="form-input w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                required={field.label.includes('*')}
                onChange={handleChange}
                value={formData[field.name] || ''} // Control component value
              >
                <option value="">{field.label}</option>
                {field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )}
            {field.type === 'text' && (
              <input
                type="text"
                name={field.name}
                placeholder={field.label}
                className="form-input w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                required={field.label.includes('*')}
                onChange={handleChange}
                value={formData[field.name] || ''} // Control component value
              />
            )}
            {field.type === 'checkbox' && (
              <div>
                <label className="block text-gray-700 font-medium mb-3">{field.label}</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {field.options.map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={field.name}
                        value={option}
                        className="rounded text-indigo-600"
                        onChange={handleChange}
                        // Checkbox checked state based on formData
                        checked={(formData[field.name] || []).includes(option)}
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {/* Add other field types here if you have them (e.g., 'textarea', 'radio') */}
          </motion.div>
        ))}
        <motion.textarea
          name="message"
          placeholder="Tell us about your project..."
          rows="4"
          className="form-input w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all resize-none"
          required
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          value={formData.message || ''} // Control component value
        />

        <motion.button
          type="submit"
          className="submit-btn w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'Sending...' : '🚀 Send Message'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;