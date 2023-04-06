import classes from "../style/form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${classes.accountSection} ${className}`} {...rest}>
      {children}
    </form>
  );
}
