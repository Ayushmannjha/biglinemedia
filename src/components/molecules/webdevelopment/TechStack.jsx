import { motion } from "framer-motion";

// Section animation (can be reused)
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// Animation per badge
const toolVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const tools = [
  "React.js",
  "WordPress",
  "Shopify",
  "Laravel",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "MongoDB",
];

export default function TechStack() {
  return (
    <motion.section
      id="techstack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      className="py-16 md:py-24 px-6 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">
          Technologies We Master
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-lg font-medium">
          {tools.map((tool, i) => (
            <motion.span
              key={i}
              variants={toolVariant}
              className="px-6 py-3 bg-white shadow-md rounded-full border border-gray-200 text-gray-700 hover:shadow-lg transition duration-200 transform hover:scale-105"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
