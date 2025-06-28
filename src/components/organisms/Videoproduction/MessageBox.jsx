// src/components/MessageBox.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageBox = ({ isVisible, content, onClose }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl z-[1000] text-center max-w-sm w-11/12 border border-gray-200"
                >
                    <p className="text-lg font-semibold text-gray-800 mb-4">{content}</p>
                    <button
                        onClick={onClose}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                    >
                        OK
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MessageBox;