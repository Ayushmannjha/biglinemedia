import { motion } from "framer-motion";

// Reuse or define your section animation variant
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

const projectVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "Lumina Fashion Co.",
    img: "/fashion.jpg",
    client: "Elegance Boutique",
    quote: "Our online sales soared after the redesign!",
  },
  {
    title: "Apex Agency Portfolio",
    img: "/portfolio.jpg",
    client: "Creative Hub Inc.",
    quote: "Perfectly captures our brand's innovative spirit.",
  },
  {
    title: "Ascend Startup Landing",
    img: "/startup.jpg",
    client: "Innovate Solutions",
    quote: "Generated significant leads right from launch.",
  },
  {
    title: "LearnFlex E-Learning Platform",
    img: "/elearning.jpg",
    client: "Global Knowledge",
    quote: "Intuitive and scalable—our students love it.",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
      className="py-16 md:py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">
        Our Work for Our Clients
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={projectVariant}
            className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 flex flex-col h-full transition-all"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/e0f2fe/0c4a6e?text=${encodeURIComponent(p.title)}`;
              }}
            />

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 italic mb-3">
                  Client: {p.client}
                </p>
                <p className="text-gray-600 text-base">"{p.quote}"</p>
              </div>

              <button className="mt-4 inline-block bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-100 transition duration-200">
                View Case Study
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
