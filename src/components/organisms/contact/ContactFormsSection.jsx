import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactFormsSection = ({ activeService, serviceConfigs ,onCloseForm}) => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <AnimatePresence mode="wait">
        {activeService && serviceConfigs[activeService] ? (
          <ContactForm
            service={activeService}
            serviceConfig={serviceConfigs[activeService]}
            onSuccess={onCloseForm} // ✅ Passed to ContactForm
          />

        ) : (
          <motion.div
            key="initial-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12 text-gray-600 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <p className="text-xl font-medium">Please select a service above to get started.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
);

export default ContactFormsSection;