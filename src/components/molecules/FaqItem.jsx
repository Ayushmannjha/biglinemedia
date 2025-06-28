// components/FaqItem.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Optional: Use heroicons or SVGs too

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 text-[#001a72] rounded-md p-6 mb-4 shadow-sm transition-all duration-200 ease-in-out">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-lg">{question}</h3>
        <div className="bg-blue-600 text-white p-2 rounded">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      {open && (
        <p className="mt-4 text-sm text-gray-700 transition-opacity duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
