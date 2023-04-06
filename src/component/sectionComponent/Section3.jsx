import classes from "../../style/section3.module.css";
import TextInput from "../TextInput";
import Form from "../Form";

export default function Section3() {
  return (
    <>
      <section className={classes.section3} id="contact">
        <div className={classes.contact}>
          <h1>CONTACT US</h1>

          <Form action="#">
            <TextInput
              type="text"
              placeholder="enter your name"
              icon="person"
            />{" "}
            <TextInput
              type="email"
              placeholder="enter your valid email address"
              icon="alternate_email"
            />
            <div className={classes.textarea}>
              <textarea placeholder="enter you comment"></textarea>
            </div>
            <div className="button">
              <input type="submit" />
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
