import * as React from 'react';
import './style.scss';

interface IProps {
  startGame: () => void;
}

const Start: React.SFC<IProps> = props => {
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
