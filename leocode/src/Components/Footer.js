import React from "react";
import "../Styles/Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__heading"></div>
        <div className="footer__links">
          <span className="footer-blogs">Blog</span>
          <span className="footer-videos">Videos </span>
          <span className="footer-games">Games </span>{" "}
          <span className="footer-excercises">Excercises </span>
          <span className="footer-test">Test </span>
          <span className="footer-skills">Skills</span>
          <span
            className="footer-community
          "
          >
            Community
          </span>
        </div>

        <div className="footer__data">
          <div className="aboutus"> About us</div>
          <div className="support"> Support</div>
          <div className="legal"> Legal</div>
          <div className="footerlogo"></div>
          <div className="footertext">
            © Copyright 2022 Dualingua All rights reserved
          </div>
        </div>
        <hr className="horzontalline" />
      </footer>
    </div>
  );
}

export default Footer;
