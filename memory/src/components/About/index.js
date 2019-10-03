import React, { Component } from 'react';
import Wrapper from "../Wrapper/Wrapper"
import Jumbotron from "../Jumbotron"
import "./style.css"



function About() {

    return (
      <div className=""> 
        <Jumbotron>
        <h1>Rules for this Game</h1>
        </Jumbotron>
        <Wrapper>
        
        <div className="card">
            <img className="card-img-top" src="https://vitbits.in/views/main/image/contest/memory-game.png" alt="RulesImage"/>
            <div className="card-body">
                <h5 className="card-title">Rules</h5>
                <p className="card-text">
                    <ul>
                        <li>
                            Rule #1: There are 12 cards of different character images
                        </li>
                        <li>
                            Rule #2: You may pick any card to start, but remember who you picked
                        </li>
                        <li>
                            Rule #3: The cards will shuffle and you will pick a different card. Every unique card you choose earns you a point
                        </li>
                        <li>
                            Rule #4: This is repeated until you pick a card twice, and the game will end
                        </li>
                    </ul>
                    <hr/>
                    <h5>Good Luck!</h5>
                    <a href="/play" className="btn btn-outline-primary">Play Game</a>
                </p>
            </div>
        </div>
        </Wrapper>
      </div>
    )
}

export default About;
