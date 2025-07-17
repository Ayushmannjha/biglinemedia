import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactFormsSection from "../../organisms/contact/ContactFormsSection";
import { services, serviceConfigs } from "../../../assets/data/contact/Contacts.js";
import ServiceButton from "../../organisms/contact/ServiceButton.jsx";

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
   const [activeService, setActiveService] = useState('web-development');

  

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
      
      <ContactFormsSection
        activeService={activeService}
        serviceConfigs={serviceConfigs}
        onCloseForm={() => setShowForm(false)} // ✅ Passed to ContactForm eventually
      />
    </motion.section>
  );
}
