import * as React from 'react';

import Counter from './Counter';
import PowerButton from './PowerButton';
import Start from './Start';
import Strict from './Strict';

interface IProps {
  gameOn: boolean;
  moveCount: string;
  startGame: () => void;
  strict: boolean;
  toggleGamePower: () => void;
  toggleStrict: () => void;
}

const GameControls: React.SFC<IProps> = props => {
  const {
    gameOn,
    moveCount,
    startGame,
    strict,
    toggleGamePower,
    toggleStrict,
  } = props;

  return (
    <div className="game-control-container">
      <div className="game-control-wrapper">
        <h1>Simon</h1>
        <div className="game-controls">
          <Counter moveCount={moveCount} gameOn={gameOn} />
          <Start startGame={startGame} />
          <Strict toggleStrict={toggleStrict} isStrict={strict} />
        </div>
        <PowerButton toggleGamePower={toggleGamePower} gameOn={gameOn} />
      </div>
    </div>
  );
};

export default GameControls;
