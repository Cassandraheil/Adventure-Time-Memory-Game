import React, { Component } from 'react';
import card from './card.json'
import CardSetup from './components/cardstyle'
import NavBar from './components/nav/NavBar';
import "./style.css";

class App extends Component {

  //dealing with the score
    state = {
      title: "Adventure Time!",
      score: 0,
      topScore: 0,
      isGameOver: false,
      card
  };


  maxScore = () => {
      if(this.state.score> this.state.topScore){
      this.setState(
                {topScore: this.state.score}
            )
      }
     };

  restart = () => {
    for (var i=0; i< this.state.card.length; i++){
      this.state.card[i].clicked = false;
    }
    this.state.score = 0;
    this.state.title = "Oh No, they've been clicked already! Try again";
    console.log("title", this.state.title) //console.logs but doesn't display// it did before idk what changed
    this.setState({
      card,
      score: this.state.score,
      title: this.state.title
    });
  }


  shuffle = arr => {
    let i = arr.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i--;
    }
    return arr;
  };
  
  correct = card => {
    this.maxScore();

    this.setState({
      data: this.shuffle(card),
      score: this.score
    });
  };

  wrong = card => {
    this.setState({
      data: this.restart(card),
      score: 0
    });
  };

  handleClicked = id => {
    console.log(id)
    console.log(this.state.card)

    let rightAnswer = false;
    const card = this.state.card.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          rightAnswer = true;
        }
      }
      return newItem;
    });
    rightAnswer
      ? this.correct(card)
      : this.wrong(card);


    this.setState({
      card,
      score: this.state.score,
      title: "Adventure Time!"
    });
    
  };


  render() {
    return (
      <div>

      <NavBar title={this.state.title} score={this.state.score} topScore={this.state.topScore}></NavBar>
      
      <div className="cards">
     {this.state.card.map(card => 
      (
        <CardSetup 
        key={"card" + card.id}
        handleClicked={this.handleClicked}
        id={card.id}
        image={card.image}
        clicked={card.clicked}
        />
      ))
      }
      </div>

    </div>
    )
  };
};

export default App;
