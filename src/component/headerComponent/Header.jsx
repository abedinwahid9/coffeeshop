import classes from "../../style/header.module.css";
import image from "../../asset/logo/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header>
        <ul className={classes.logo}>
          <li>
            <a href="/index.html">
              <img src={image} alt="logo" />
              <h4>Coffee Shop</h4>
            </a>
          </li>
        </ul>
        <Nav />
      </header>
    </>
  );
}
