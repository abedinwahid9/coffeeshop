import { Link } from "react-router-dom";
import classes from "../style/accountcontent.module.css";

export default function Accountcontent({ title, path, type }) {
  return (
    <div className={classes["account-content"]}>
      <span>
        {title}
        <Link to={path}> {type} </Link>here
      </span>
    </div>
  );
}
