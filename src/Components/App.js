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
import buzzer from '../sounds/buzzer.mp3';
import '../style/App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      gameOn: false,
      strict: false,
      isPlayersTurn: false,
      buttonPattern: [],
      playerCopyPattern: [],
      moveCount: "--"
    }

    this.toggleGamePower = this.toggleGamePower.bind(this);
    this.toggleStrict = this.toggleStrict.bind(this);
    this.startGame = this.startGame.bind(this);
    this.randomButtonGenerator = this.randomButtonGenerator.bind(this);
    this.computerPlayButtonPattern = this.computerPlayButtonPattern.bind(this);
    this.playerSelectButton = this.playerSelectButton.bind(this);
  }

  toggleGamePower() {
    var powerState = {gameOn: this.state.gameOn};
    if (this.state.gameOn === false) {
      powerState.gameOn = true;
    } else {
      powerState = {
        gameOn: false,
        strict: false,
        isPlayersTurn: false,
        buttonPattern: [],
        playerCopyPattern: [],
        moveCount: "--"
      }

    }
    this.setState({...powerState});
  }

  toggleStrict() {
    var strictState = !this.state.strict;
    this.setState({strict: strictState});
  }

  startGame() {
    if (this.state.gameOn) {
      this.state.buttonPattern.length === 0 ? this.randomButtonGenerator() : this.randomButtonGenerator(true);
    }
  }

  randomButtonGenerator(clear = false) {
    if (typeof clear === "boolean") {
      var buttonPattern = !clear ? this.state.buttonPattern : [];
      var randomNum = Math.floor(Math.random() * 4);
      buttonPattern.push(randomNum);
      this.setState({
        buttonPattern: buttonPattern,
        moveCount: buttonPattern.length
      });
      setTimeout(() => {this.computerPlayButtonPattern();}, 1200);
    } else {
      console.log("The parameter passed to randomButtonGenerator must be a boolean.");
    }
  }

  computerPlayButtonPattern(counter = 0) {
    var states = {
      isPlayersTurn: true,
      playerCopyPattern: []
    };
    states.moveCount = this.state.moveCount === "! !" ? this.state.buttonPattern.length : this.state.moveCount;
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
      } else {
        this.setState({...states});
      }
    }, 800);
  }

  playerSelectButton(button) {
    var states = {playerCopyPattern: this.state.playerCopyPattern};
    var playerIndex = this.state.playerCopyPattern.length;
    if (button === this.state.buttonPattern[playerIndex]) {
      states.playerCopyPattern.push(button);
      if (states.playerCopyPattern.length === this.state.buttonPattern.length) {
        if (this.state.buttonPattern.length === 20) { // Determine if the user has won
          states.isPlayersTurn = false;
          states.moveCount = "WIN!";
          setTimeout(() => {this.randomButtonGenerator(true)}, 3000);
        } else {
          states.isPlayersTurn = false;
          this.randomButtonGenerator();
        }
      }
      this.setState({...states});
    } else { // This block handles if an incorrect button is pushed.
      var buzzerSound = new Audio(buzzer);
      if (!this.state.strict) {
        buzzerSound.play();
        setTimeout(() => {this.computerPlayButtonPattern();}, 2000);
      } else {
        buzzerSound.play();
        this.randomButtonGenerator(true);
      }
      this.setState({
        isplayersTurn: false,
        moveCount: "! !"
      });
    }
  }

  render() {
    return (
      <div id="game">
        <ColorPlayButtons
          id="0"
          activeClass="active-green"
          sound={new Audio(simonSound0)}
          playerSelectButton={this.playerSelectButton}
          isPlayersTurn={this.state.isPlayersTurn}
          gameOn={this.state.gameOn}
        />
        <ColorPlayButtons
          id="1"
          activeClass="active-red"
          sound={new Audio(simonSound1)}
          playerSelectButton={this.playerSelectButton}
          isPlayersTurn={this.state.isPlayersTurn}
          gameOn={this.state.gameOn}
        />
        <ColorPlayButtons
          id="2"
          activeClass="active-yellow"
          sound={new Audio(simonSound2)}
          playerSelectButton={this.playerSelectButton}
          isPlayersTurn={this.state.isPlayersTurn}
          gameOn={this.state.gameOn}
        />
        <ColorPlayButtons
          id="3"
          activeClass="active-blue"
          sound={new Audio(simonSound3)}
          playerSelectButton={this.playerSelectButton}
          isPlayersTurn={this.state.isPlayersTurn}
          gameOn={this.state.gameOn}
        />
        <div id="game-control-wrapper">
          <h1>Simon Game</h1>
          <div id="game-controls">
            <Counter
              moveCount={String(this.state.moveCount)}
              gameOn={this.state.gameOn}
            />
            <Start startGame={this.startGame}/>
            <Strict
              toggleStrict={this.toggleStrict}
              isStrict={this.state.strict}
            />
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
