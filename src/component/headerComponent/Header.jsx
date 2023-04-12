import classes from "../../style/header.module.css";
import image from "../../asset/logo/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <ul className={classes.logo}>
          <li>
            <Link to="/">
              <img src={image} alt="logo" />
              <h4>Coffee Shop</h4>
            </Link>
          </li>
        </ul>
        <Nav />
      </header>
    </>
  );
}
