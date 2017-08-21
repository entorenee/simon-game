import React from 'react';
import PropTypes from 'prop-types';
import '../style/ColorPlayButtons.css';

class ColorPlayButtons extends React.Component {
  render() {
    return (
      <div id={"btn-" + this.props.id} className="color-buttons">

      </div>
    )
  }
}

ColorPlayButtons.propTypes = {

}

export default ColorPlayButtons;
