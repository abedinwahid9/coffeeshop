import classes from "../style/accountContainer.module.css";
import Container from "./Container";

export default function AccountContainer({ children, title }) {
  return (
    <Container>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.account}>{children}</div>
    </Container>
  );
}
