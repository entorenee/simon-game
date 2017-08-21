import React from 'react';
import ColorPlayButtons from './ColorPlayButtons';
import GameControls from './GameControls';
import '../style/App.css';

class App extends React.Component {
  render() {
    return (
      <div id="game">
        <ColorPlayButtons id="0" />
        <ColorPlayButtons id="1" />
        <ColorPlayButtons id="2" />
        <ColorPlayButtons id="3" />
        <div id="game-control-wrapper">

        </div>
      </div>
    )
  }
}

export default App;
