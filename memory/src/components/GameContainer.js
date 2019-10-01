import React, { Component } from 'react';
import MemoryCard from "./MemoryCard"
import clickitems from "../clickitems.json"



class GameContainer extends Component {
  state = {
    score: 0,
    highScore: 0,
    chosenCards: [],
    clickItems: clickitems
  }

  //Presents state for development purposes
  componentDidMount() {
    // console.log(this.state);
    // this.randomizeItems()
  }

  flipItems = () => {
    this.setState({
      clickItems: clickitems.reverse()
    })
    // console.log(this.state.clickItems)
  }

  //This will randomize the items in the array and re-send to the user for another guess
  randomizeItems = () => {

    // var currentArray = this.state.clickItems;
    console.log("pre-randomize: " + JSON.stringify(this.state.clickItems[0].id))

    for (var i = this.state.clickItems.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.state.clickItems[i];
      this.state.clickItems[i] = this.state.clickItems[j];
      this.state.clickItems[j] = temp;
    }

    console.log("post-randomize: " + JSON.stringify(this.state.clickItems[0].id));
    // console.log(this.state.clickItems)

  }

  //This handles the users guess and passes it into the handleSubmit function
  checkValue = (event) => {
    const value = event.target.value;
    // console.log(value)
    this.handleSubmit(value);
  }

  //This is where the app checks if the user's guess exists in the user's current guess array
  handleSubmit = (val) => {

    var cardArray = this.state.chosenCards
    // var validateNum = cardArray.length;
    // var checked = "false"

    var exists = cardArray.includes(val);
    // console.log(exists);
    if (exists === false) {
      this.state.chosenCards.push(val)
      this.setState({
        score: this.state.score + 1
      })
      this.randomizeItems()
    } else {
      this.endGame()
    }

    // console.log(this.state.chosenCards);
  }


  //This handles the results after the game has been lost. It also resets the state and randomizes the images again
  endGame = () => {
    alert("Game is over!");

    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      })
    }

    this.setState({
      chosenCards: [],
      score: 0
    })

    this.randomizeItems()
  }

  render() {
    return (
      <div>
        <h1>Memory Game</h1>
        <h2>High Score: {this.state.highScore}</h2>
        <h3>Score: {this.state.score}</h3>
        <div className="row">
          <MemoryCard
            name={this.state.clickItems[0].name}
            image={this.state.clickItems[0].image}
            id={this.state.clickItems[0].id}
            handleClick={this.checkValue}
          // value = {id}
          />
          <MemoryCard
            name={this.state.clickItems[1].name}
            image={this.state.clickItems[1].image}
            id={this.state.clickItems[1].id}
            handleClick={this.checkValue}
          // value = {id}

          />
          <MemoryCard
            name={this.state.clickItems[2].name}
            image={this.state.clickItems[2].image}
            id={this.state.clickItems[2].id}
            handleClick={this.checkValue}
          // value = {id}
          />
          <MemoryCard
            name={this.state.clickItems[3].name}
            image={this.state.clickItems[3].image}
            id={this.state.clickItems[3].id}
            handleClick={this.checkValue}
          // value = {id}
          />
          <MemoryCard
            name={this.state.clickItems[4].name}
            image={this.state.clickItems[4].image}
            id={this.state.clickItems[4].id}
            handleClick={this.checkValue}
          // value = {id}
          />
          <MemoryCard
            name={this.state.clickItems[5].name}
            image={this.state.clickItems[5].image}
            id={this.state.clickItems[5].id}
            handleClick={this.checkValue}
          // value={id}
          />
        </div>
      </div>
    )
  }
}

export default GameContainer;
