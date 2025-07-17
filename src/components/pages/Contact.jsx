import React, { useState } from 'react';
import {services,faqItems,serviceConfigs} from "../../assets/data/contact/Contacts.js"

import HeroSection from '../organisms/contact/HeroSection';
import ServiceSelector from '../organisms/contact/ServiceSelector';    
import ContactFormsSection from '../organisms/contact/ContactFormsSection';
import ContactDetails from '../organisms/contact/ContactDetails';
import FAQSection from '../organisms/contact/FAQSection';
import ChatButton from '../organisms/contact/ChatButton';
import ChatWindow from '../organisms/contact/ChatWindow';

// Importing the necessary components for the Contact page
// This file serves as the main entry point for the Contact page, integrating various components to create

const Contact = () => {
  const [activeService, setActiveService] = useState('general');

  const [isChatOpen, setIsChatOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 font-inter">
      {/* Header Component */}
      

      
      {/* Hero Section Component */}
      <HeroSection />

      {/* Service Selector Component */}
      <ServiceSelector services={services} activeService={activeService} setActiveService={setActiveService} />

      {/* Contact Forms Section Component */}
      <ContactFormsSection activeService={activeService} serviceConfigs={serviceConfigs} />

      {/* Contact Details Component */}
      <ContactDetails />

      {/* FAQ Section Component */}
      <FAQSection faqItems={faqItems} />
        
    

      {/* Floating Chatbot Button Component */}
      <ChatButton setIsChatOpen={setIsChatOpen} />

      {/* Chat Window Component */}
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Footer Component */}
    
    </div>
  );
};

export default Contact;