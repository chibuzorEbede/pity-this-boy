import React from "react";
import Logo from "../logo/Logo";
import MenuButton from "../menu/MenuButton";
import styles from "./Navbar.module.css";
import cx from "classnames";

const Navbar = () => {
  return (
    <header className={cx(styles["header-container"])}>
      <nav className={cx(styles.navbar)}>
        <Logo />
        <MenuButton />
      </nav>
    </header>
  );
};

export default Navbar;
