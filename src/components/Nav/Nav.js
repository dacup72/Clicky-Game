import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";


const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
        <NavMessage 
          score={4}
          topScore={10}
        />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
