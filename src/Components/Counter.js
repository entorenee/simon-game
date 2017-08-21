import React from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div id="counter-wrap">
        <div id="counter-display">
          <span id="current-count">01</span>
        </div>
        <span id="count-label">COUNT</span>
      </div>
    )
  }
}

Counter.propTypes = {

}

export default Counter;
