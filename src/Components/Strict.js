import React from 'react';
import PropTypes from 'prop-types';
import '../style/Strict.css';

class Strict extends React.Component {
  render() {
    return (
      <div id="strict-button-wrapper">
        <div id="strict-mode-light"></div>
        <div id="strict-mode-button" onClick={() => this.props.toggleStrict()}></div>
        STRICT
      </div>
    )
  }
}

Strict.propTypes = {
  toggleStrict: PropTypes.func.isRequired
}

export default Strict;
