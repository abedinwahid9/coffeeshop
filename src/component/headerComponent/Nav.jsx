import classes from "../../style/nav.module.css";
import Button from "../Button/Button";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/itemrecipe">Items Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/home#contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/home#about">About</NavLink>
          </li>
          <li>
            {location.pathname === "/login" ? (
              <NavLink to="/signup">
                <Button className={classes.homeButton} title="SignUp" />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button className={classes.homeButton} title="Login" />
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
