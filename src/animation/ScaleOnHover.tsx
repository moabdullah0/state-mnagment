import React from 'react';
import { motion } from 'framer-motion';

const HoverScaleButton: React.FC = () => {
  return (
    <motion.button
      className="bg-blue-500 text-white px-6 py-2 rounded-full"
      whileHover={{ scale: 1.1 }} // تكبير الزر عند التمرير
      transition={{ type: 'spring', stiffness: 300 }}
    >
      اضغط هنا
    </motion.button>
  );
};

export default HoverScaleButton;
