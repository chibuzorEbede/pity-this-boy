import styles from "./Logo.module.css";
import React from "react";
import cx from "classnames";

const Logo = () => {
  return (
    <a href="">
      <div className={cx(styles["logo-container"])}>
        <div className={cx(styles.dash, styles.zero)}></div>
        <div className={cx(styles.dash, styles.one)}></div>
        <div className={cx(styles.dash, styles.two)}></div>
      </div>
    </a>
  );
};

export default Logo;
