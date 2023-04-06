import classes from "../../style/footer.module.css";
import SocialContact from "./SocialContact";

export default function Footer() {
  return (
    <>
      <footer className={classes.footer} id="about">
        <div className={classes.socialInfo}>
          <SocialContact className={classes.miniLogo} icon="fab fa-google" />
          <SocialContact className={classes.miniLogo} icon="fab fa-facebook" />
          <SocialContact className={classes.miniLogo} icon="fab fa-twitter" />
          <SocialContact className={classes.miniLogo} icon="fab fa-instagram" />
          <SocialContact className={classes.miniLogo} icon="fab fa-linkedin" />
        </div>
      </footer>
    </>
  );
}
