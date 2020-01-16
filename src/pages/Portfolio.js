import React from "react";
import "../css/portfolio.css";

const Portfolio = () => (
  <React.Fragment>
    <div className="portfoliohero">
      <h1 className="portfolioheader">Portfolio</h1>
    </div>
    <div className="row">
      <div className="column">
        <div className="card">
          <a
            href="https://codepen.io/jonathan-giler/project/editor/XYpNkz"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            <img
              src={require("../img/gateway.png")}
              alt="gateway codepen"
              className="cardimg"
            />
            <div className="container">
              <h4 className="text">
                <b>Road to Hire Gateway Project</b>
              </h4>
              <p className="text">It all started here.</p>
            </div>
          </a>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <a
            href="https://ecom-mobile.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            <img
              src={require("../img/ecom.png")}
              className="cardimg"
              alt="ecommerce website"
            />
            <div className="container">
              <h4 className="text">
                <b>Ecommerce Mobile App</b>
              </h4>
              <p className="text">Most relaxing store.</p>
            </div>
          </a>
        </div>
        <a
          href="https://github.com/jgiler/ecom-mobile"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../img/Octocat.jpg")}
            alt="github"
            className="git"
          />
        </a>
      </div>
      <div className="column">
        <div className="card">
          <a
            href="https://github.com/Code2Hire/submit-weeklychallenges-r2h-2019-jgiler/blob/master/mysqlChallenges/hard/hard.sql"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            <img
              src={require("../img/mysql.png")}
              alt="MySQL logo"
              className="cardimg"
            />
            <div className="container">
              <h4 className="text">
                <b>MySQL Challenges</b>
              </h4>
              <p className="text">Database CRUD.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column">
        <div className="card">
          <a
            href="https://github.com/Code2Hire/submit-weeklychallenges-r2h-2019-jgiler/tree/master/node-challenges/med-hard"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            <img
              src={require("../img/node.png")}
              alt="Node and Express logo"
              className="cardimg"
            />
            <div className="container">
              <h4 className="text">
                <b>Node and Express</b>
              </h4>
              <p className="text">Express API and CRUD functionality.</p>
            </div>
          </a>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <a
            href="http://cartoon-friends.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            <img
              src={require('../img/friends.png')}
              alt="Cartoon Friends Website"
              className="cardimg"
            />
            <div className="container">
              <h4 className="text">
                <b>Friends List</b>
              </h4>
              <p className="text">Interactive Friends List Website. React Js.</p>
            </div>
          </a>
        </div>
        <a
          href="https://github.com/jgiler/friends"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../img/Octocat.jpg")} alt="github" className="git" />
        </a>
      </div>
      <div className="column">
        <div className="card">
          <a
            href="https://guessing-game7.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            <img src={require("../img/guessinggame.jpg")} alt="Guessing Game" className='cardimg'/>
            <div className="container">
              <h4 className="text">
                <b>Numbers Guessing Game</b>
              </h4>
              <p className="text">Made with React JS.</p>
            </div>
          </a>
        </div>
        <a
          href="https://github.com/jgiler/guessing-game/tree/master/my-app"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../img/Octocat.jpg")} alt="github" className="git" />
        </a>
      </div>
    </div>
  </React.Fragment>
);

export default Portfolio;
