import React from "react";
import "./style.css"


function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-inverse navbar-fixed-top jumbotron">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">Memory Game</a>
          </div>
          <ul class="nav navbar-nav">
            <li>Score: {props.score}</li>
            <li>Top Score: {props.topScore}</li>
          </ul>
        </div>
      </nav>
      <div className="underNav">
        <strong className="title">{props.title}</strong>
        <h5>Click on a character to get started. But remember who you clicked. You can't click them twice</h5>
      </div>
    </div>
  );
}

export default NavBar;