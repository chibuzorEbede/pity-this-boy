import React from "react";
import cx from "classnames";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  return (
    <div className={cx(styles["menu-container"])}>
      <div className={cx(styles.dash)}></div>
      <div className={cx(styles.dash)}></div>
      <div className={cx(styles.dash)}></div>
    </div>
  );
};

export default MenuButton;
