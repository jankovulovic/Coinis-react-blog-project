import { Link } from "react-router-dom";

import Logo from "../../assets/blog.jpg";

import classes from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img className={classes.img} src={Logo} alt="Logo" />
        </Link>
        <Link to="/add-post">
          <button className={classes.btn}>Add Post</button>
        </Link>
      </header>
    </>
  );
};
