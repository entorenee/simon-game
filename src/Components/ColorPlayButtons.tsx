import * as React from 'react';
import simonSound0 from '../sounds/simonSound0.mp3';
import simonSound1 from '../sounds/simonSound1.mp3';
import simonSound2 from '../sounds/simonSound2.mp3';
import simonSound3 from '../sounds/simonSound3.mp3';
import { keyboardHandler } from '../helpers';
import '../style/ColorPlayButtons.css';

type Props = {
  activeClass: string,
  gameOne: boolean,
  id: string,
  isPlayersTurn: boolean,
  playerSelectButton: (id: number) => void,
};

class ColorPlayButtons extends React.Component<Props, {}> {
  componentDidMount() {
    this.buttonSounds = [
      new Audio(simonSound0),
      new Audio(simonSound1),
      new Audio(simonSound2),
      new Audio(simonSound3),
    ];
  }

  addActiveClass = () => {
    const { activeClass, id } = this.props;
    const button = document.getElementById(`btn-${id}`);
    this.buttonSounds[id].play();
    button.classList.add(activeClass);
  };

  clickButton = () => {
    const { activeClass, id, playerSelectButton } = this.props;
    const button = document.getElementById(`btn-${id}`);
    button.classList.remove(activeClass);
    playerSelectButton(Number(id));
  };

  render() {
    const { isPlayersTurn, gameOn, id } = this.props;

    return (
      <div
        id={`btn-${id}`}
        className={`color-buttons btn-${id}`}
        onMouseDown={() => {
          if (isPlayersTurn && gameOn) {
            this.addActiveClass();
          }
        }}
        onMouseUp={() => {
          if (isPlayersTurn) {
            this.clickButton();
          }
        }}
        onKeyPress={e => {
          if (keyboardHandler(e) && isPlayersTurn && gameOn) {
            this.addActiveClass();
            this.clickButton();
          }
        }}
        role="button"
        tabIndex={0}
      />
    );
  }
}

export default ColorPlayButtons;
