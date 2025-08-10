import { motion } from 'framer-motion';
import { getGoogleMapsUrl } from '../../../utils/imageUtils';

const ContactDetails = () => {
  // Contact information - could be moved to environment variables if needed
  const contactInfo = {
    email: 'info@biglinemedia.com',
    phone: '+91 98765 43210',
    address: 'A block 5th floor maurya lok complex, patna'
  };

  const contactItems = [
    { 
      icon: '✉️', 
      title: 'Email Us', 
      detail: contactInfo.email, 
      link: `mailto:${contactInfo.email}`, 
      gradient: 'from-blue-500 to-cyan-600' 
    },
    { 
      icon: '📱', 
      title: 'Call Us', 
      detail: contactInfo.phone, 
      link: `tel:${contactInfo.phone.replace(/\s/g, '')}`, 
      gradient: 'from-green-500 to-teal-600' 
    },
    { 
      icon: '📍', 
      title: 'Visit Us', 
      detail: contactInfo.address, 
      link: getGoogleMapsUrl(contactInfo.address), 
      gradient: 'from-purple-500 to-pink-600' 
    }
  ];

  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-gray-50 to-indigo-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch 📞
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((contact, index) => (
            <motion.div
              key={contact.title}
              className={`bg-gradient-to-br ${contact.gradient} text-white rounded-3xl p-8 text-center shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
              <motion.a
                href={contact.link}
                className="text-white/90 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {contact.detail}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactDetails;