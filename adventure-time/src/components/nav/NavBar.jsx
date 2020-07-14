import React from "react";
import "./style.css"


function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-inverse navbar-fixed-top jumbotron">
      <img class="adventureImg" alt="adventure time logo" src="https://i.etsystatic.com/10281372/r/il/7af34c/1047011185/il_570xN.1047011185_og43.jpg" />
        <div class="container-fluid">
          <div class="navbar-header">
            <h3 class="navbar-brand">Memory Game</h3>
          </div>
          <div class="nav navbar-nav">
            <p>Score: {props.score}</p>
            <p>Top Score: {props.topScore}</p>
          </div>
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