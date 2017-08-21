import React from 'react';
import ColorPlayButtons from './ColorPlayButtons';
import '../style/App.css';

class App extends React.Component {
  render() {
    return (
      <div id="game">
        <ColorPlayButtons id="0" />
        <ColorPlayButtons id="1" />
        <ColorPlayButtons id="2" />
        <ColorPlayButtons id="3" />
      </div>
    )
  }
}

export default App;
