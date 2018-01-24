import React from 'react';
import PropTypes from 'prop-types';
import '../style/Start.css';

class Start extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id="start-button-wrapper">
        <div
          id="start-button"
          onClick={() => this.props.startGame()}
          onKeyPress={e => {
            if (e.which === 13 || e.which === 32) this.props.startGame();
          }}
          role="button"
          tabIndex={0}
        />
        START
      </div>
    );
  }
}

Start.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Start;
