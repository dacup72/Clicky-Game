import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";


class Game extends Component {
  
  render() {
    return (
      <div>
        <Nav 
          score={5}
          topScore={20}
        />
        <Header />
      </div>
    );
  }
}

export default Game;
