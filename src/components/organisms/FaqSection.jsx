// sections/FaqSection.jsx
import React from 'react';
import FaqItem from '../molecules/FaqItem';       
import { faqs } from '../../assets/data/home/FaqSection'; // Assuming you have a data file for FAQs



const FaqSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001a72] mb-12">
        Customers Frequently Ask
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
