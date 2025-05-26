import React from "react";
import styles from "./Hero.module.css";
import cx from "classnames";

const Hero = () => {
  return (
    <section className={cx(styles.container)}>
      <h1 className={cx(styles["hero-text"])}>
        {" "}
        <span className={cx(styles["span-text-frontend"])}>frontend</span>{" "}
        <br />
        <span className={cx(styles["span-text"])}>&&</span>
        <span className={cx(styles["span-text-backend"])}> backend</span>
        <br />
        <span className={cx(styles["span-text-developer"])}>Developer</span>
      </h1>
    </section>
  );
};

export default Hero;
