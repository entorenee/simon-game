import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/Strict.css';

class Strict extends Component {
  shouldComponentUpdate(nextProps) {
    const { isStrict } = this.props;
    if (isStrict !== nextProps.isStrict) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const { isStrict } = this.props;
    const btnElement = this.strictLight;
    if (isStrict) {
      btnElement.style.backgroundColor = 'red';
    } else {
      btnElement.style.backgroundColor = 'black';
    }
  }

  render() {
    const { toggleStrict } = this.props;
    return (
      <div className="strict-button-wrapper">
        <div
          className="strict-mode-light"
          ref={input => {
            this.strictLight = input;
          }}
        />
        <div
          className="strict-mode-button"
          onClick={() => toggleStrict()}
          onKeyPress={e => {
            if (keyboardHandler(e)) toggleStrict();
          }}
          role="button"
          tabIndex={0}
        />
        STRICT
      </div>
    );
  }
}

Strict.propTypes = {
  toggleStrict: PropTypes.func.isRequired,
  isStrict: PropTypes.bool.isRequired
};

export default Strict;
