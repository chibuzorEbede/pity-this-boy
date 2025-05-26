import React from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className={cx(styles.container)}>
      <span className={cx(styles.title)}>
        <motion.em
          initial={{ translateX: "-500px" }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.8, ease: "easeIn", type: "spring" }}
          className={cx(styles.text)}
        >
          fullstack
        </motion.em>
        <motion.em
          initial={{ translateX: "1000px" }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.8, ease: "easeIn", type: "spring" }}
          className={cx(styles.text)}
        >
          software
        </motion.em>
        <em className={cx(styles.text)}>developer</em>
      </span>
    </section>
  );
};

export default Hero;
