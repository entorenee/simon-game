import React from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

class Counter extends React.Component {
  render() {
    var moveCountString = this.props.moveCount < 10 ? "0" + this.props.moveCount : this.props.moveCount;
    var moveCountDisplay = this.props.gameOn === false ? "" : this.props.gameOn === true && this.props.moveCount !== 0 ? moveCountString : "--";

    if (moveCountDisplay === "! !" || moveCountDisplay === "WIN!") {
      var ele = document.getElementById('current-count');
      ele.classList.add('counter-blink');
      setTimeout(() => {ele.classList.remove('counter-blink');}, 1700);
    }
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
  moveCount: PropTypes.string.isRequired,
  gameOn: PropTypes.bool.isRequired
}

export default Counter;
