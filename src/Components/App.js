import React from 'react';
import ColorPlayButtons from './ColorPlayButtons';
import Counter from './Counter';
import Start from './Start';
import Strict from './Strict';
import PowerButton from './PowerButton';
import simonSound0 from '../sounds/simonSound0.mp3';
import simonSound1 from '../sounds/simonSound1.mp3';
import simonSound2 from '../sounds/simonSound2.mp3';
import simonSound3 from '../sounds/simonSound3.mp3';
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
    this.computerPlayButtonPattern = this.computerPlayButtonPattern.bind(this);
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
    if (typeof clear === "boolean") {
      var buttonPattern = !clear ? this.state.buttonPattern : [];
      var randomNum = Math.floor(Math.random() * 3);
      buttonPattern.push(randomNum);
      this.setState({buttonPattern: buttonPattern});
    } else {
      console.log("The parameter passed to randomButtonGenerator must be a boolean.");
    }
  }

  computerPlayButtonPattern(counter = 0) {
    var activeColors = ["active-green", "active-red", "active-yellow", "active-blue"];
    var pattern = this.state.buttonPattern;
    var id = pattern[counter];
    var sound = id === 0 ? new Audio(simonSound0) : id === 1 ? new Audio(simonSound1) : id === 2 ? new Audio(simonSound2) : new Audio(simonSound3);
    var el = document.getElementById('btn-' + id);
    el.classList.add(activeColors[id]);
    sound.play();
    setTimeout(() => {
      el.classList.remove(activeColors[id]);
      if (counter < pattern.length - 1) {
        counter++;
        this.computerPlayButtonPattern(counter);
      }
    }, 1000);
  }

  render() {
    return (
      <div id="game">
        <ColorPlayButtons
          id="0"
          activeClass="active-green"
          sound={new Audio(simonSound0)}
        />
        <ColorPlayButtons
          id="1"
          activeClass="active-red"
          sound={new Audio(simonSound1)}
        />
        <ColorPlayButtons
          id="2"
          activeClass="active-yellow"
          sound={new Audio(simonSound2)}
        />
        <ColorPlayButtons
          id="3"
          activeClass="active-blue"
          sound={new Audio(simonSound3)}
        />
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
