import React from "react";
import styles from "./Hero.module.css";
import cx from "classnames";

const Hero = () => {
  return (
    <section className={cx(styles.container)}>
      <span className={cx(styles.title)}>
        <em className={cx(styles.text)}>fullstack</em>
        <em className={cx(styles.text)}>software</em>
        <em className={cx(styles.text)}>developer</em>
      </span>
    </section>
  );
};

export default Hero;
