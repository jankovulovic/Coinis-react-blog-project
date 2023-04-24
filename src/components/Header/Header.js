import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/blog.jpg";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img className={classes.img} src={Logo} alt="Logo" />
        </Link>
        <Link to="/add-post">
          <button className={classes.btn}> Dodaj post </button>
        </Link>
      </header>
    </>
  );
};
