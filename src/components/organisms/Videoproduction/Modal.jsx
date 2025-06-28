// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children, titleId = 'modal-title', descriptionId = 'modal-description' }) => {
    const modalRef = useRef(null);

    // Effect to handle focus trapping and escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Focus the first focusable element when modal opens
        firstElement && firstElement.focus();

        const handleTabKey = (event) => {
            if (event.key === 'Tab') {
                if (event.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        event.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        event.preventDefault();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('keydown', handleTabKey);

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('keydown', handleTabKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose} // Close when clicking outside
            >
                <motion.div
                    ref={modalRef}
                    className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-auto p-6 relative flex flex-col md:flex-row gap-6"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    aria-describedby={descriptionId}
                    tabIndex="-1" // Make modal focusable
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors duration-200 z-10"
                        aria-label="Close modal"
                    >
                        <X size={28} />
                    </button>
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;