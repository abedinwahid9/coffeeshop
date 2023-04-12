import classes from "../../style/footer.module.css";
import SocialContact from "./SocialContact";

export default function Footer() {
  return (
    <>
      <footer className={classes.footer} id="about">
        <div className={classes.socialInfo}>
          <SocialContact
            className={classes.miniLogo}
            icon="fab fa-google"
            pathName="https://www.google.com"
          />
          <SocialContact
            className={classes.miniLogo}
            icon="fab fa-facebook"
            pathName="https://www.facebook.com"
          />
          <SocialContact
            className={classes.miniLogo}
            icon="fab fa-twitter"
            pathName="https://www.twitter.com"
          />
          <SocialContact
            className={classes.miniLogo}
            icon="fab fa-instagram"
            pathName="https://www.instagram.com"
          />
          <SocialContact
            className={classes.miniLogo}
            icon="fab fa-linkedin"
            pathName="https://www.linkedin.com"
          />
        </div>
      </footer>
    </>
  );
}
