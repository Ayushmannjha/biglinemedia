import { motion } from 'framer-motion';

const ContactDetails = () => (
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
        {[
          { icon: '✉️', title: 'Email Us', detail: 'hello@yourbrand.com', link: 'mailto:hello@yourbrand.com', gradient: 'from-blue-500 to-cyan-600' },
          { icon: '📱', title: 'Call Us', detail: '+91 98765 43210', link: 'tel:+919876543210', gradient: 'from-green-500 to-teal-600' },
          { icon: '📍', title: 'Visit Us', detail: '123 Business Street, Mumbai, India', link: 'https://maps.google.com', gradient: 'from-purple-500 to-pink-600' }
        ].map((contact, index) => (
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
            >
              {contact.detail}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);
export default ContactDetails;