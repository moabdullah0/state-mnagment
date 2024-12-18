import React from 'react';
import { motion } from 'framer-motion';

const AnimateMultiple: React.FC = () => {
  return (
    <motion.div
      className="flex gap-4 justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1 }}
    >
        sss
      <motion.div
        className="w-24 h-24 bg-red-500"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="w-24 h-24 bg-blue-500"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 0.4 }}
      />
      sss
      <motion.div
        className="w-24 h-24 bg-green-500"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 0.6 }}
      />
    </motion.div>
  );
};

export default AnimateMultiple;
