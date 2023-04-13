import classes from "../../style/header.module.css";
import image from "../../asset/logo/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <>
      <header className={active ? classes.active : ""}>
        <ul className={classes.logo}>
          <li>
            <Link to="/">
              <img src={image} alt="logo" />
              <h4>Coffee Shop</h4>
            </Link>
          </li>
        </ul>
        <div className={classes.manubar} onClick={handleActive}>
          <i className={`${classes.icon} fa-solid fa-bars`}></i>
        </div>
        <Nav active={active} />
      </header>
    </>
  );
}
