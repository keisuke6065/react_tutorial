import React, { Component } from 'react';
import Li from './content';
import Count from './count';
import Todo from './todo';
import Timer from './timer';

class App extends Component {
  render() {
    return (
      <div className="test">
        <Todo></Todo>
        <Li></Li>
        <Count></Count>
        <Timer></Timer>
      </div>
    );
  }
}

export default App;
