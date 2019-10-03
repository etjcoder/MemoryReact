import React from 'react';
import GameContainer from "./components/GameContainer"
import NavBar from "./components/NavBar"
import About from "./components/About"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path="/" component={About} />
          <Route exact path="/play" component={GameContainer} />
      </div>
    </Router>
  );
}

export default App;
