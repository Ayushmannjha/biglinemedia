import Hero from "../../../molecules/webdevelopment/Hero";
import Services from "../../../molecules/webdevelopment/Services";
import TechStack from "../../../molecules/webdevelopment/TechStack";
import Projects from "../../../molecules/webdevelopment/Projects";
import Contact from "../../../molecules/webdevelopment/Contact";
import { motion } from "framer-motion";
import WhyChooseUs from "../../../molecules/webdevelopment/WhyChooseUs";
function WebDev3DCity(params) {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <Services />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >  <TechStack />

      </motion.div>

      <Projects />
      <WhyChooseUs/>
      <Contact />
    </div>

  );
}

export default WebDev3DCity;