import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";


class Game extends Component {
  
  render() {
    return (
      <div>
        <Nav 
          score={5}
          topScore={20}
        />
        <Container>
        <div>Hello</div>
        </Container>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Game;
