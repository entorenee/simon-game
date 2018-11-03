import * as React from 'react';
import './style.scss';

interface Props {
  startGame: () => void;
}

const Start: React.SFC<Props> = props => {
  const { startGame } = props;
  return (
    <div className="start-button-wrapper">
      <button
        className="start-button"
        type="button"
        onClick={startGame}
      />
      START
    </div>
  );
};

export default Start;
