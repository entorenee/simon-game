import React from 'react';
import PropTypes from 'prop-types';
import '../style/Start.css';

class Start extends React.Component {
  render() {
    return (
      <div id="start-button-wrapper">
        <div id="start-button" onClick={() => this.props.startGame()}></div>
        START
      </div>
    )
  }
}

Start.propTypes = {
  startGame: PropTypes.func.isRequired
}

export default Start;
