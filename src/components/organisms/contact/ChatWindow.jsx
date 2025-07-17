
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I help you today?", sender: "bot" },
    { id: 2, text: "I'm interested in your services.", sender: "user" },
    { id: 3, text: "Great! Which service are you most interested in: Election Campaigning, Web Development, Social Media Management, or Video Production?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = { id: messages.length + 1, text: inputMessage, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage('');

      // Simple bot response logic (mock)
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or FAQs.",
          sender: "bot"
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="fixed bottom-24 right-6 w-80 h-[450px] bg-white rounded-2xl shadow-xl flex flex-col z-50 overflow-hidden border border-gray-200"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center shadow-md">
            <h3 className="text-lg font-bold">Chat with Us</h3>
            <motion.button
              onClick={onClose}
              className="text-white text-xl hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`max-w-[75%] p-3 rounded-xl shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-indigo-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </motion.div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll target */}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex rounded-full overflow-hidden border-2 border-gray-300 focus-within:border-indigo-500 transition-all">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-3 bg-transparent focus:outline-none text-gray-800"
              />
              <motion.button
                type="submit"
                className="bg-indigo-600 text-white p-3 px-4 hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-paper-plane"></i>
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 

export default ChatWindow;