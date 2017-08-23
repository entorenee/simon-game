import React from 'react';
import PropTypes from 'prop-types';
import '../style/PowerButton.css';

class PowerButton extends React.Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.gameOn !== nextProps.gameOn) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    var powerButton = document.getElementById('toggle-power-button').classList;
    this.props.gameOn === false ? powerButton.remove('power-on') : powerButton.add('power-on');
  }

  render() {

    return (
      <div id="power-button-wrapper">
        <span className="power-identifiers">OFF</span>
        <div id="toggle-power" onClick={() => this.props.toggleGamePower()}>
          <span id="toggle-power-button"></span>
        </div>
        <span className="power-identifiers">ON</span>
      </div>
    )
  }
}

PowerButton.propTypes = {
  toggleGamePower: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired
}

export default PowerButton;
