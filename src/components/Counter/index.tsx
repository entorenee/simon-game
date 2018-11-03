import * as React from 'react';
import './style.scss';

interface Props {
  gameOn: boolean;
  moveCount: string;
}

const Counter: React.SFC<Props> = props => {
  const { gameOn, moveCount } = props;
  const moveCountString = Number(moveCount) < 10 ? `0${moveCount}` : moveCount;
  let moveCountDisplay;
  if (!gameOn) {
    moveCountDisplay = '';
  } else {
    moveCountDisplay = Number(moveCount) !== 0 ? moveCountString : '--';
  }

  if (moveCountDisplay === '! !' || moveCountDisplay === 'WIN!') {
    const ele = document.querySelector('.current-count');
    if (ele) {
      ele.classList.add('counter-blink');
      setTimeout(() => {
        ele.classList.remove('counter-blink');
      }, 1700);
    }
  }
  return (
    <div className="counter-wrap">
      <div className="counter-display">
        <span className="current-count">{moveCountDisplay}</span>
      </div>
      <span className="count-label">COUNT</span>
    </div>
  );
};

export default Counter;
