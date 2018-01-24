import React from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

class Counter extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.moveCount !== nextProps.moveCount || this.props.gameOn !== nextProps.gameOn) {
      return true;
    }
    return false;
  }

  render() {
    const moveCountString =
      this.props.moveCount < 10 ? `0${this.props.moveCount}` : this.props.moveCount;
    let moveCountDisplay;
    if (!this.props.gameOn) {
      moveCountDisplay = '';
    } else {
      moveCountDisplay = this.props.moveCount !== 0 ? moveCountString : '--';
    }

    if (moveCountDisplay === '! !' || moveCountDisplay === 'WIN!') {
      const ele = document.getElementById('current-count');
      ele.classList.add('counter-blink');
      setTimeout(() => {
        ele.classList.remove('counter-blink');
      }, 1700);
    }
    return (
      <div id="counter-wrap">
        <div id="counter-display">
          <span id="current-count">{moveCountDisplay}</span>
        </div>
        <span id="count-label">COUNT</span>
      </div>
    );
  }
}

Counter.propTypes = {
  moveCount: PropTypes.string.isRequired,
  gameOn: PropTypes.bool.isRequired
};

export default Counter;
