import AccountContainer from "./AccountContainer";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button/Button";
import classes from "../style/signup.module.css";
import Accountcontent from "./Accountcontent";

export default function Loginform() {
  return (
    <>
      <AccountContainer title="login account">
        <Form>
          <TextInput
            type="email"
            placeholder="enter your email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="enter your password"
            icon="lock"
          />
          <Button className={classes.button} type="submit" title="Login" />
        </Form>
        <Accountcontent title="create an new" path="/signup" type="account" />
      </AccountContainer>
    </>
  );
}
