import { motion } from 'framer-motion';
import ServiceButton from './ServiceButton';

const ServiceSelector = ({ services, activeService, setActiveService }) => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        How can we help you today? 🚀
      </motion.h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {services.map((service, index) => (
          <ServiceButton
            key={service.id}
            icon={service.icon}
            title={service.title}
            isActive={activeService === service.id}
            onClick={() => setActiveService(service.id)}
            gradient={service.gradient}
          />
        ))}
      </div>
    </div>
  </section>
);
export default ServiceSelector;
