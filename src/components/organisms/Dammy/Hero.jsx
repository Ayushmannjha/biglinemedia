import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = new Array(6).fill(
  "https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg"
);

const Hero = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      gsap.to(img.querySelector("img"), {
        scale: 1.5,
        xPercent: 20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(img.querySelector(".swipe"), {
        yPercent: 300,
        delay: 0.2,
        duration: 3,
        stagger: {
          from: "random",
          each: 0.1,
        },
        ease: "sine.out",
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen relative overflow-hidden bg-black">
      <div className="grid grid-cols-6 h-full w-full">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            className="relative overflow-hidden"
          >
            <img
              src={src}
              alt={`Image ${i}`}
              className="absolute top-0 left-0 w-[700%] h-full object-cover"
              style={{ left: `-${(i + 1) * 100}%` }}
            />
            <div className="swipe absolute top-0 left-0 w-full h-full bg-black z-10" />
            {i < images.length - 1 && (
              <div className="absolute right-0 top-0 h-full w-[2.5px] bg-black z-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
