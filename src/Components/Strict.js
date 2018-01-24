import React from 'react';
import PropTypes from 'prop-types';
import '../style/Strict.css';

class Strict extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.isStrict !== nextProps.isStrict) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const btnElement = document.getElementById('strict-mode-light');
    if (this.props.isStrict) {
      btnElement.style.backgroundColor = 'red';
    } else {
      btnElement.style.backgroundColor = 'black';
    }
  }

  render() {
    return (
      <div id="strict-button-wrapper">
        <div id="strict-mode-light" />
        <div
          id="strict-mode-button"
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
