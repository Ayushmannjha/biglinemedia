import { motion } from "framer-motion";

const services = [
  {
    title: "E-Commerce Stores",
    desc: "Sell online with secure, scalable shops designed for growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    title: "Business Websites",
    desc: "Crafting professional online presences with focus on SEO and speed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Portfolio Sites",
    desc: "Showcase your work with elegant, immersive, and responsive designs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.83 0 1.64-.13 2.4-.35A7 7 0 0019 15a7 7 0 003-5.4V10c0-5.5-4.5-10-10-10z" />
      </svg>
    ),
  },
  {
    title: "Custom Dashboards",
    desc: "Develop bespoke admin tools and interactive data visualization platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 100 },
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

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      className="py-16 md:py-24 px-6 max-w-6xl mx-auto bg-white rounded-xl shadow-lg my-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">
        Our Tailored Web Development Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="bg-gray-50 shadow-sm p-6 rounded-xl border border-gray-100 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="mb-4 text-cyan-600">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
