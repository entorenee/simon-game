import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Strict.css';

class Strict extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.isStrict !== nextProps.isStrict) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const btnElement = this.strictLight;
    if (this.props.isStrict) {
      btnElement.style.backgroundColor = 'red';
    } else {
      btnElement.style.backgroundColor = 'black';
    }
  }

  render() {
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
          onClick={() => this.props.toggleStrict()}
          onKeyPress={e => {
            if (e.which === 13 || e.which === 32) this.props.toggleStrict();
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
