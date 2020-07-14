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

  restart = card => {
    console.log("must have been wrong")
    for (var i=0; i< this.state.card.length; i++){
      this.state.card[i].clicked = false;
    }
    const newTitle = "Oh No, they've been clicked already! Try again";

    this.setState({
      card: this.shuffle(card),
      score: 0,
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
    console.log("must have been right!")
    
    const newScore = this.state.score + 1
    
    this.setState({
      card: this.shuffle(card),
      score: newScore
    });
    this.maxScore();
  };

  handleClicked = id => {

    let rightAnswer = false;
    let updatedCard = [];

    const newCard = this.state.card.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          rightAnswer = true;
        }
      }
      updatedCard.push(newItem)
    });


    rightAnswer
      ? this.correct(updatedCard)
      : this.restart(updatedCard);


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
