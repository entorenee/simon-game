import * as React from 'react';
import Helmet from 'react-helmet';
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

type State = {
  buttonPattern: number[],
  gameOn: boolean,
  isPlayersTurn: boolean,
  moveCount: string,
  playerCopyPattern: number[],
  strict: boolean,
};

class App extends React.Component<{}, State> {
  buzzerSound: HTMLAudioElement
  buttonSounds: HTMLAudioElement[]

  state = {
    buttonPattern: [] as number[],
    gameOn: false,
    isPlayersTurn: false,
    moveCount: '--',
    playerCopyPattern: [] as number[],
    strict: false,
  };

  componentDidMount() {
    this.buzzerSound = new Audio(buzzer);
    this.buttonSounds = [
      new Audio(simonSound0),
      new Audio(simonSound1),
      new Audio(simonSound2),
      new Audio(simonSound3),
    ];
  }

  toggleGamePower = () => {
    this.setState(state => {
      if (!state.gameOn) {
        return { ...state, gameOn: true };
      }

      return {
        gameOn: false,
        strict: false,
        isPlayersTurn: false,
        buttonPattern: [],
        playerCopyPattern: [],
        moveCount: '--',
      };
    });
  };

  toggleStrict = () => {
    const { strict } = this.state;
    this.setState({ strict: !strict });
  };

  startGame = () => {
    const { buttonPattern, gameOn } = this.state;
    if (gameOn) {
      if (buttonPattern.length === 0) {
        this.randomButtonGenerator();
      } else {
        this.randomButtonGenerator(true);
      }
    }
  };

  randomButtonGenerator = (clear = false) => {
    const { buttonPattern: prevPattern } = this.state;
    const buttonPattern = !clear ? prevPattern : [];
    const randomNum = Math.floor(Math.random() * 4);
    buttonPattern.push(randomNum);
    this.setState({
      buttonPattern,
      moveCount: String(buttonPattern.length),
    });

    setTimeout(() => {
      this.computerPlayButtonPattern();
    }, 1200);
  };

  computerPlayButtonPattern = (count = 0) => {
    const { buttonPattern: pattern, gameOn } = this.state;
    const id = pattern[count];

    const el = document.getElementById(`btn-${id}`);
    if (gameOn && el) {
      el.focus();
      this.buttonSounds[id].play();
      setTimeout(() => {
        el.blur();
        if (count < pattern.length - 1) {
          this.computerPlayButtonPattern(count + 1);
        } else {
          this.setState(prevState => {
            const { moveCount: prevMoveCount, buttonPattern } = prevState;
            const moveCount = prevMoveCount === '! !' ? String(buttonPattern.length) : prevMoveCount;
            return {
              ...prevState,
              isPlayersTurn: true,
              playerCopyPattern: [],
              moveCount,
            };
          });
        }
      }, 800);
    }
  };

  playerSelectButton = (button: number) => {
    const { buttonPattern, playerCopyPattern } = this.state;
    const playerIndex = playerCopyPattern.length;
    this.buttonSounds[button].play();

    if (button !== buttonPattern[playerIndex]) {
      this.handlePlayerError();
      return;
    }

    playerCopyPattern.push(button);
    if (playerCopyPattern.length === buttonPattern.length) {
      if (buttonPattern.length === 20) {
        // Determine if the user has won
        this.setState({
          isPlayersTurn: false,
          moveCount: 'WIN!',
          playerCopyPattern,
        });
        setTimeout(() => {
          this.randomButtonGenerator(true);
        }, 3000);
      } else {
        this.setState({ isPlayersTurn: false });
        this.randomButtonGenerator();
      }
    }
  };

  handlePlayerError = () => {
    const { strict } = this.state;

    this.buzzerSound.play();
    this.setState({ moveCount: '! !' });
    if (strict) {
      this.randomButtonGenerator(true);
    } else {
      setTimeout(() => {
        this.computerPlayButtonPattern();
      }, 2000);
    }
  };

  render() {
    const { isPlayersTurn, gameOn, moveCount, strict } = this.state; // eslint-disable-line
    return (
      <div className="simon-app">
        <Helmet>
          <title>Simon Game | Daniel Lemay</title>
          <link href="https://fonts.googleapis.com/css?family=Ultra" rel="stylesheet" />
        </Helmet>
        <div className="game">
          <ColorPlayButtons
            id="0"
            buttonColor="green"
            activeClass="active-green"
            playerSelectButton={() => this.playerSelectButton(0)}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="1"
            buttonColor="red"
            activeClass="active-red"
            playerSelectButton={() => this.playerSelectButton(1)}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="2"
            buttonColor="yellow"
            activeClass="active-yellow"
            playerSelectButton={() => this.playerSelectButton(2)}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="3"
            buttonColor="blue"
            activeClass="active-blue"
            playerSelectButton={() => this.playerSelectButton(3)}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <div className="game-control-container">
            <div className="game-control-wrapper">
              <h1>Simon</h1>
              <div className="game-controls">
                <Counter moveCount={String(moveCount)} gameOn={gameOn} />
                <Start startGame={this.startGame} />
                <Strict toggleStrict={this.toggleStrict} isStrict={strict} />
              </div>
              <PowerButton toggleGamePower={this.toggleGamePower} gameOn={gameOn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
