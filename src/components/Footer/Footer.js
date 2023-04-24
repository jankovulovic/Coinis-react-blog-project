import React from "react";
import classes from "../Footer/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div>Created by Janko Vulovic © {currentYear}</div>
    </footer>
  );
};

export default Footer;
