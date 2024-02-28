import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
      </div>
      <p> &copy; 2024 Powered by React</p>
    </div>
  );
}

export default Footer;