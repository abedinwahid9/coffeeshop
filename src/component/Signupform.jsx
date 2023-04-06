import AccountContainer from "./AccountContainer";
import TextInput from "./TextInput";
import Button from "./Button/Button";
import classes from "../style/signup.module.css";
import Accountcontent from "./Accountcontent";
import From from "./Form";

export default function Signupform() {
  return (
    <>
      <AccountContainer title="create an account">
        <From>
          <TextInput type="text" placeholder="enter your name" icon="person" />
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
          <TextInput
            type="password"
            placeholder="enter your password"
            icon="lock_clock"
          />

          <label for="checkboxId">
            <input type="checkbox" id="checkboxId" />
            <span>I agree to the Terms & Conditions</span>
          </label>
          <Button className={classes.button} type="submit" title="submit" />
        </From>
        <Accountcontent
          title="you have already an account"
          href="/login.html"
          type="login"
        />
      </AccountContainer>
    </>
  );
}
