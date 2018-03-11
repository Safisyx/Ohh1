import React, { Component } from 'react';
//import logo from './logo.svg';
import Board from './containers/Board'
import CreateGameButton from './components/CreateGameButton'
import Progress from './components/Progress'
import Finished from './components/Finished'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">0hh1</h1>
        <CreateGameButton/>
        <Progress/>
        <Board/>
        <Finished/>
      </div>
    );
  }
}
export default App;
