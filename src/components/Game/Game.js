import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "../../data.json";



class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };
  
  render() {
    return (
      <div>
        <Nav 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
        <ClickItem 

        />
        </Container>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Game;
