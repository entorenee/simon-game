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
      computerMoves: []
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
        <ColorPlayButtons id="0" activeClass="active-green" />
        <ColorPlayButtons id="1" activeClass="active-red" />
        <ColorPlayButtons id="2" activeClass="active-yellow" />
        <ColorPlayButtons id="3" activeClass="active-blue" />
        <div id="game-control-wrapper">
          <h1>Simon Game</h1>
          <div id="game-controls">
            <Counter
              moveCount={this.state.computerMoves.length}
              gameOn={this.state.gameOn}
            />
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
