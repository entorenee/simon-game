import React from 'react';
import ColorPlayButtons from './ColorPlayButtons';
import Counter from './Counter';
import Start from './Start';
import Strict from './Strict';
import PowerButton from './PowerButton';
import '../style/App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      gameOn: false,
      strict: false,
    }

    this.toggleGamePower = this.toggleGamePower.bind(this);
  }

  toggleGamePower() {
    var powerState = {gameOn: this.state.gameOn};
    if (this.state.gameOn === false) {
      powerState.gameOn = true;
    } else {
      powerState.gameOn = false;
    }
    this.setState({...powerState});
  }

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
            <Strict />
          </div>
          <PowerButton
            toggleGamePower = {this.toggleGamePower}
            gameOn = {this.state.gameOn}
          />
        </div>
      </div>
    )
  }
}

export default App;
