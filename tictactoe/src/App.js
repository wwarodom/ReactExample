import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Game from './component/Game';
import './component/game.css';


class App extends Component {
  render() {
    return (
        <div align="center">
            <h1>Tic Tac Toe </h1>
            <Game/>
        </div>
    );
  }
}

export default App;
