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
      buttonPattern: []
    }

    this.toggleGamePower = this.toggleGamePower.bind(this);
    this.startGame = this.startGame.bind(this);
    this.randomButtonGenerator = this.randomButtonGenerator.bind(this);
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

  startGame() {
    if (this.state.gameOn) {
      this.state.buttonPattern.length === 0 ? this.randomButtonGenerator() : this.randomButtonGenerator(true);
    }
  }

  randomButtonGenerator(clear = false) {
    var buttonPattern = !clear ? this.state.buttonPattern : [];
    var randomNum = Math.floor(Math.random() * 3);
    buttonPattern.push(randomNum);
    this.setState({buttonPattern: buttonPattern});
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
              moveCount={this.state.buttonPattern.length}
              gameOn={this.state.gameOn}
            />
            <Start startGame={this.startGame}/>
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
