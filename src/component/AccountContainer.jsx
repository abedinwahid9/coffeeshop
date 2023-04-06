import classes from "../style/container.module.css";

export default function AccountContainer({ children, title }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.account}>{children}</div>
    </div>
  );
}
