import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden"
    >
      {/* 📹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile autoplay
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50" // Adjust opacity as needed
      >
        {/* Replace with your video source.
            Ensure you have different formats for wider browser support. */}
        <source src="/your-background-video.mp4" type="video/mp4" />
        <source src="/your-background-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* 🎨 Animated Background SVG bubbles */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgb(224,242,254)", stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(240,249,255)", stopOpacity: 0 }}
            />
          </radialGradient>
        </defs>
        {/* Animated Circles */}
        <motion.circle
          cx="20"
          cy="80"
          r="30"
          fill="url(#grad1)"
          animate={{
            x: [0, 10, 0], // Move horizontally
            y: [0, -10, 0], // Move vertically
            scale: [1, 1.1, 1], // Scale up and down
            opacity: [0.8, 0.5, 0.8], // Fade in and out
          }}
          transition={{
            duration: 10,
            repeat: Infinity, // Loop continuously
            ease: "easeInOut",
            repeatType: "mirror", // Animate back and forth
          }}
        />
        <motion.circle
          cx="80"
          cy="20"
          r="40"
          fill="url(#grad1)"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: 1, // Stagger animation start
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          fill="url(#grad1)"
          animate={{
            x: [0, 5, -5, 0],
            y: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: 0.5,
          }}
        />
      </svg>

      {/* 🌟 Main Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-indigo-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          We Engineer{" "}
          <span className="text-cyan-600">Digital Foundations</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Websites structured, scalable, and intelligent—built to empower{" "}
          <span className="font-semibold text-indigo-700">your vision</span>.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Get a Free Quote
        </motion.a>
      </div>
    </section>
  );
}