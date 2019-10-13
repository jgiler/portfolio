import React from "react";
import "../css/about.css";

const AboutMe = () => (
  <React.Fragment>
    <div className="homehero">
      <h1>Jonathan Giler</h1>
    </div>
    <div>
      <h2>About Me</h2>
    </div>
    <div>
      <img
        className="pic"
        src={require("../img/headshot.jpg")}
        alt="JonathanGilerPic"
      />
    </div>
    <div className="intro">
      <p>
        I was born in Ecuador and arrived at the United States at the age of 6.
        I always was effecient at math and enjoyed solving problems. When I was
        a kid, I loved to beat video games. My mother used to yell at me for
        playing too much sometimes, and I remember first learning math with my
        mom next to an abacus.
      </p>
    </div>
    <div className='skills'>
      <h2>Skills</h2>
      <div className="logos">
        <img
          className="react"
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="react-logo"
        />
        <img
          className="react"
          src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
          alt="nodeJS-logo"
        />
        <img
          className="react"
          src="data:image/png;base64,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"
          alt="html logo"
        />
        <img
          className="react"
          src="data:image/png;base64,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"
          alt="css logo"
        />
        <img
          className="react"
          src="https://live.staticflickr.com/3701/19224697601_6b600f21eb.jpg"
          alt="javascript logo"
        />
        <img
          className="react"
          src="http://pngimg.com/uploads/mysql/mysql_PNG35.png"
          alt="mySQL logo"
        />
        <img
          className="react"
          src="https://miro.medium.com/max/310/1*77jUu8XXo2IuA-G5YB444A.png"
          alt="mongoDB logo"
        />
      </div>
    </div>
  </React.Fragment>
);

export default AboutMe;
