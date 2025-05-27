import React from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import { motion } from "motion/react";

const Hero = () => {
  //animation variants
  // fadeIn animation variant
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  //end animation variants
  return (
    <section className={cx(styles.container)}>
      <span className={cx(styles.title)}>
        <motion.em
          initial={{ translateX: "-500px" }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.97, ease: "easeIn", type: "spring" }}
          className={cx(styles.text)}
        >
          fullstack
        </motion.em>
        <motion.em
          initial={{ translateX: "1000px" }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.97, ease: "easeIn", type: "spring" }}
          className={cx(styles.text)}
        >
          software
        </motion.em>
        <motion.em
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2, duration: 1 }}
          className={cx(styles.text)}
        >
          developer
        </motion.em>
      </span>
    </section>
  );
};

export default Hero;
