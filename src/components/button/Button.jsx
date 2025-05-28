import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

//create button depending on the type value
function Button({ type, text }) {
  if (type === "secondary") {
    return <button className={cx(styles["button-secondary"])}>{text}</button>;
  }
  return <button className={cx(styles["button-secondary"])}>{text}</button>;
}

export default Button;
