import React from 'react';
import PropTypes from 'prop-types';
import '../style/ColorPlayButtons.css';

class ColorPlayButtons extends React.Component {
  constructor() {
    super();
    this.addActiveClass = this.addActiveClass.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  addActiveClass() {
    const button = document.getElementById(`btn-${this.props.id}`);
    this.props.sound.play();
    button.classList.add(this.props.activeClass);
  }

  clickButton() {
    const button = document.getElementById(`btn-${this.props.id}`);
    button.classList.remove(this.props.activeClass);
    this.props.playerSelectButton(Number(this.props.id));
  }

  render() {
    const { isPlayersTurn, gameOn } = this.props;

    return (
      <div
        id={`btn-${this.props.id}`}
        className={`color-buttons btn-${this.props.id}`}
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
          if (e.which === 13 || e.which === 32) {
            if (isPlayersTurn && gameOn) {
              this.addActiveClass();
              this.clickButton();
            }
          }
        }}
        role="button"
        tabIndex={0}
      />
    );
  }
}

ColorPlayButtons.propTypes = {
  id: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  sound: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isPlayersTurn: PropTypes.bool.isRequired,
  playerSelectButton: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired
};

export default ColorPlayButtons;
