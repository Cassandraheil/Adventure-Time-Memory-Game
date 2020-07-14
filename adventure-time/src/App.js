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
    const newScore = 0;
    const newTitle = "Oh No, they've been clicked already! Try again";

    this.setState({
      card,
      score: newScore,
      title: newTitle
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
    
    const newScore = this.state.score + 1
    
    this.setState({
      data: this.shuffle(card),
      score: newScore
    });
    this.maxScore();
  };

  wrong = card => {
    this.setState({
      data: this.restart(card),
      score: 0
    });
  };

  handleClicked = id => {
    console.log("tis the state", this.state.card)

    let rightAnswer = false;
    let updatedCard = [];

    const newCard = this.state.card.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          // console.log("new item", newItem)
          rightAnswer = true;
        }
      }
      // console.log("new item afterword...", newItem)
      updatedCard.push(newItem)
    });


    rightAnswer
      ? this.correct(newCard)
      : this.wrong(newCard);


    this.setState({
      card: updatedCard,
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
