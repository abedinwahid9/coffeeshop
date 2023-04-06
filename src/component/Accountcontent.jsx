import classes from "../style/accountcontent.module.css";

export default function Accountcontent({ title, href, type }) {
  return (
    <div className={classes["account-content"]}>
      <span>
        {title},<a href={href}> {type} </a>here
      </span>
    </div>
  );
}
