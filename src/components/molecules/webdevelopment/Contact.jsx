import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Reusable section animation
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        () => {
          setSuccess(false);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      className="py-16 md:py-24 px-6 bg-gradient-to-br from-cyan-50 to-blue-50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">
        Let's Connect and Build Together
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-white shadow-xl p-8 md:p-10 rounded-xl space-y-6 border border-cyan-100"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
        />
        <textarea
          rows="6"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 resize-y"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
        >
          {loading ? "Sending..." : "Send Your Message"}
        </button>

        {success && (
          <p className="text-green-600 text-center mt-4 font-medium">
            ✅ Your message has been sent!
          </p>
        )}
      </form>
    </motion.section>
  );
}
