import React, { useState } from "react";
import { motion } from "framer-motion";

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold">مرحباً!</h2>
            <p className="mt-2">هذه نافذة منبثقة. اضغط على زر الإغلاق.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
              onClick={closePopup}
            >
              {isOpen ? "Close" : "Open"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Popup;
