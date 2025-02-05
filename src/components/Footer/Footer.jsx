import classes from "./Footer.module.scss";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>© 2025 just t-shirts, inc. all rights reserved</h3>
      <div className={classes.socialsContainer}>
        <FaInstagram className={classes.socials} />
        <FaTwitter className={classes.socials} />
      </div>
    </footer>
  );
};

export default Footer;
