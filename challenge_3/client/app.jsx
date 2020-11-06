import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PinSelection from './PinSelection.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Pin Selection</h1>
        <PinSelection />
        <br />
        <br />
        <ScoreBoard />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));