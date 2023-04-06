import classes from "../../style/nav.module.css";
import Button from "../Button/Button";

export default function Nav() {
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/items.html">Items</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/login.html">
              <Button className={classes.homeButton} title="Login" />
            </a>
          </li>
          {/* <li>
            <a href=""><button className="button">Login</button></a>
          </li>  */}
        </ul>
      </nav>
    </>
  );
}
