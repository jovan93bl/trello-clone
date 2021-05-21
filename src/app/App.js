import "./App.sass";

import React, { Component } from "react";
import Board from "../features/Board/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">Trello</div>
        <Board />
      </div>
    );
  }
}

export default App;
