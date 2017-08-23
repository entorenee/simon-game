import React from 'react';
import PropTypes from 'prop-types';
import '../style/PowerButton.css';

class PowerButton extends React.Component {
  render() {
    return (
      <div id="power-button-wrapper">
        <span className="power-identifiers">OFF</span>
        <div id="toggle-power"><span id="toggle-power-button"></span></div>
        <span className="power-identifiers">ON</span>
      </div>
    )
  }
}

PowerButton.propTypes = {

}

export default PowerButton;
