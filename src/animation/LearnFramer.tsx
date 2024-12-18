import { motion } from "framer-motion";

const LearnFramer = () => {
  const VariantContainer = {
    hidden: {
      // Starting position off-screen (left side)
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: [0, 20, -20, 20, -20, 0], // Keyframe for x motion on the heading
    },
    hover: {
      scale: 1.2,
      textShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)", // More visible text shadow
      transition: { duration: 0.3 }, // Adding a transition to make hover smoother
    },
    buttonVisible: {
      opacity: 1,
      x: [0, 10, -10, 10, -10, 0], // Keyframe for x motion on the button
    },
  };

  return (
    <div>
      {/* Animated Heading */}
      <motion.h1
        variants={VariantContainer}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
      >
        Welcome to My Website
      </motion.h1>

      {/* Animated Button with Keyframe */}
      <motion.button
        variants={VariantContainer}
        initial="hidden" // Start with hidden state
        animate="buttonVisible" // Use the button-specific animation variant
        whileHover="hover" // Controls hover effect only
        transition={{
          delay: 1.5, // Slight delay to start after the heading animation
          duration: 1,
          type: "spring",
          stiffness: 80,
        }}
      >
        Hover
      </motion.button>
    </div>
  );
};

export default LearnFramer;
