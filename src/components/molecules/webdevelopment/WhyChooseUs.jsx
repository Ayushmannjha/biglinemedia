import { motion } from "framer-motion";

const benefits = [
  {
    title: "Client-Centric Approach",
    desc: "Your vision is our blueprint. We listen, understand, and tailor solutions to your specific needs.",
  },
  {
    title: "Scalable Architecture",
    desc: "Future-proof websites built on robust foundations that grow with your business.",
  },
  {
    title: "Seamless Collaboration",
    desc: "We believe in transparent communication and working hand-in-hand with you at every stage.",
  },
  {
    title: "Post-Launch Support",
    desc: "Our commitment extends beyond launch, offering continuous support and optimization.",
  },
];

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

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      className="py-16 md:py-24 px-6 bg-cyan-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-800">
          Why Choose Us for Your Digital Journey?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-white p-6 rounded-xl shadow-md border border-cyan-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-700">
                {b.title}
              </h3>
              <p className="text-gray-700 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
