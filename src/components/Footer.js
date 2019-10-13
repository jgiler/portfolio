import React from "react";
import "../css/footer.css";

const Footer = () => (
  <React.Fragment>
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jonathan-giler-a89682151/"
            target="_blank"
            className="fa fa-linkedin"
            aria-label="linkedin"
          ></a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jonathangiler/"
            target="_blank"
            className="fa fa-instagram"
            aria-label="instagram"
          ></a>
          </li>
          <li>
            <a
              href="https://github.com/jgiler"
              target="_blank"
              className="fa fa-github"
              aria-label="github"
            ></a>
          </li>
        <li>
          <a
            href="https://www.facebook.com/jonathan.giler.9"
            target="_blank"
            className="fa fa-facebook"
            aria-label="facebook"
          ></a>
        </li>
      </ul>
      <p className="copyright">Last Updated: Oct 11, 2019</p>
    </footer>
  </React.Fragment>
);

export default Footer;