import React, { Component } from "react";
import "./NavMessage.css";

class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  
  render() {
    return (
      <li className={this.state.animating ? this.state.message : ""}>
        message
      </li>
    );
  }
}

export default NavMessage;
