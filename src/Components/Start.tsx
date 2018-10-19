import * as React from 'react';
import { keyboardHandler } from '../helpers';
import '../style/Start.css';

type Props = {
  startGame: () => void,
};

const Start: React.SFC<Props> = props => {
  const { startGame } = props;
  return (
    <div className="start-button-wrapper">
      <div
        className="start-button"
        onClick={() => startGame()}
        onKeyPress={e => {
          if (keyboardHandler(e)) startGame();
        }}
        role="button"
        tabIndex={0}
      />
      START
    </div>
  );
};

export default Start;
