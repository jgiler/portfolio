import React from "react";
import "../css/contact.css";

const Contact = () => (
  <React.Fragment>
    <div className="contactcontainer">
      <div className="contacthero">
        <h1 className="contactme">Contact Me!</h1>
      </div>
      <div className="reachout">
        <h2>Please Reach Out!</h2>
        <p>
          Please Feel Free to reach out to me in my social media links or my
          email!
        </p>
        <a href='mailto:jonathangiler@hotmail.com?Subject=Checked%20Your%20Portfolio' target='_top'>Send Email</a>
      </div>

      <h3 className='thankyou'>Thank you for your time!</h3>
    </div>
  </React.Fragment>
);

export default Contact;
