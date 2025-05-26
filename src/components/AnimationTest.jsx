import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const AnimationTest = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "20vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={() => setIsVisible(!isVisible)}>show/hide</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "180deg" }}
            transition={{ duration: 1, ease: "backInOut" }}
            exit={{ rotate: "0deg" }}
            style={{ width: 150, height: 150, background: "black" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimationTest;
