import React from "react";
import "../css/portfolio.css";

const Portfolio = () => (
  <div>
    <div className="portfoliohero">
      <h1 className="portfolioheader">Portfolio</h1>
    </div>
    <div>
      <ul>
      <li className="links">
          <a
            className="list"
            href="https://codepen.io/jonathan-giler/project/editor/XYpNkz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="gateway"
          >
            Gateway Project
          </a>
        </li>
        <li className="links">
          <a
            className="list"
            href="https://github.com/jgiler/guessing-game"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="guessing game"
          >
            Guessing Game
          </a>
        </li>
        <li className="links">
          <a
            className="list"
            href="https://github.com/jgiler/calculator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            Javascript Calculator
          </a>
        </li>
        <li className="links">
          <a
            className="list"
            href="https://github.com/jgiler/node-api-endpoints"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="node"
          >
            Node API Endpoints
          </a>
        </li>
        <li className="links">
          <a
            className="list"
            href="https://codepen.io/collection/XEvLLm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code pen"
          >
            First Week React
          </a>
        </li>
        <li className="links">
          <a
            className="list"
            href="https://github.com/jgiler/comment-form"
            target='_blank'
            rel='noopener noreferrer'
            aria-label="comment form"
          >
            Comment Form
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Portfolio;
