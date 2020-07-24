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


  

  restart = card => {
    const resetCard = card.map(item => ({ ...item, clicked: false }));

    this.setState({
      title: "Bunk Man, they've been clicked already! Try again",
      card: resetCard,
      score: 0
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

    const newTopScore = Math.max(newScore, this.state.topScore);

    const rightTerms = ["Mathmatical!", "Shmowzow!", "Algebraic!", "Flipping Awesome Dude!", "Lumpin killing it", "Radical!", "Alphanumeric!"]
    let num = Math.floor(Math.random()* rightTerms.length)
    let newTitle = rightTerms[num]


    this.setState({
      card: this.shuffle(card),
      score: newScore,
      title: newTitle,
      topScore: newTopScore
    });
    // this.maxScore();
  };

  // maxScore = () => {
      // if(this.state.score > this.state.topScore){
      // this.setState(
      //   {topScore: this.state.score}
      // )}
    //  };

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
      return newItem
    });

    this.setState({
          card: updatedCard,
          title: "Adventure Time!"
      });

    rightAnswer
      ? this.correct(updatedCard)
      : this.restart(updatedCard);


    
    
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
