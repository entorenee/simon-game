import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/PowerButton.css';

class PowerButton extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.gameOn !== nextProps.gameOn) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const powerButton = this.togglePower.classList;
    if (!this.props.gameOn) {
      powerButton.remove('power-on');
    } else {
      powerButton.add('power-on');
    }
  }

  render() {
    return (
      <div className="power-button-wrapper">
        <span className="power-identifiers">OFF</span>
        <div
          className="toggle-power"
          onClick={() => this.props.toggleGamePower()}
          onKeyPress={e => {
            if (e.which === 13 || e.which === 32) this.props.toggleGamePower();
          }}
          role="button"
          tabIndex={0}
        >
          <span
            className="toggle-power-button"
            ref={input => {
              this.togglePower = input;
            }}
          />
        </div>
        <span className="power-identifiers">ON</span>
      </div>
    );
  }
}

PowerButton.propTypes = {
  toggleGamePower: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired
};

export default PowerButton;
