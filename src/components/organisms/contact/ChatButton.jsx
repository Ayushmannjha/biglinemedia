import { motion } from 'framer-motion';

const ChatButton = ({ setIsChatOpen }) => (
  <motion.button
    className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-4 shadow-2xl z-50 flex items-center space-x-2"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 2, type: "spring", damping: 15 }}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setIsChatOpen(prev => !prev)}
  >
    <span className="text-2xl">💬</span>
    <span className="hidden sm:block font-medium">Chat with Us</span>
  </motion.button>
);

export default ChatButton;