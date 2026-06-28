import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-body"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-serif font-bold text-text-primary"
      >
        FUTURA
      </motion.div>
    </motion.div>
  );
}
