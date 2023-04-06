import classes from "../style/textInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className={classes.inputText}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
