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
    var button = document.getElementById('btn-' + this.props.id);
    this.props.sound.play();
    button.classList.add(this.props.activeClass);
  }

  clickButton() {
    var button = document.getElementById('btn-' + this.props.id);
    button.classList.remove(this.props.activeClass);
  }

  render() {
    return (
      <div
        id={"btn-" + this.props.id}
        className="color-buttons"
        onMouseDown={() => this.addActiveClass()}
        onMouseUp={() => this.clickButton()}
      >
      </div>
    )
  }
}

ColorPlayButtons.propTypes = {
  id: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  sound: PropTypes.object.isRequired
}

export default ColorPlayButtons;
