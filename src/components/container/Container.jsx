import React from "react";
import cx from "classnames";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <main className={cx(styles.container)}>{children}</main>;
};

export default Container;
