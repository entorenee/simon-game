import React from 'react';
import ColorPlayButtons from './ColorPlayButtons';
import Counter from './Counter';
import Start from './Start';
import '../style/App.css';

class App extends React.Component {
  render() {
    return (
      <div id="game">
        <ColorPlayButtons id="0" />
        <ColorPlayButtons id="1" />
        <ColorPlayButtons id="2" />
        <ColorPlayButtons id="3" />
        <div id="game-control-wrapper">
          <h1>Simon Game</h1>
          <div id="game-controls">
            <Counter />
            <Start />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
