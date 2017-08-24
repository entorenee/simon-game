import React from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

class Counter extends React.Component {
  render() {
    var moveCountDisplay = this.props.gameOn === false ? "" : this.props.gameOn === true && this.props.moveCount !== 0 ? this.props.moveCount : "--";

    return (
      <div id="counter-wrap">
        <div id="counter-display">
          <span id="current-count">{moveCountDisplay}</span>
        </div>
        <span id="count-label">COUNT</span>
      </div>
    )
  }
}

Counter.propTypes = {
  moveCount: PropTypes.number.isRequired,
  gameOn: PropTypes.bool.isRequired
}

export default Counter;
