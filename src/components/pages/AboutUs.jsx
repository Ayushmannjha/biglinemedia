// File: src/pages/AboutUs.jsx
import React from "react";
import ExpertiseGrid from "../organisms/about/ExpertiseGrid";
import WhyUs from "../organisms/about/WhyUs";
import AboutHeader from "../organisms/about/AboutHeader";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20">
     <AboutHeader/>
     <WhyUs/>
    
      <ExpertiseGrid/>
       
    </section>
  );
};

export default AboutUs;

// Suggested folder structure:
// src/
// ├── components/
// │   └── about/
// │       ├── AboutHeader.jsx
// │       └── AboutMainContent.jsx
// ├── pages/
// │   └── AboutUs.jsx
// └── assets/
//     └── images/
//         └── image1.png

// In AboutMainContent.jsx, you can merge the WhyUs and ExpertiseGrid sections into one reusable layout block.
