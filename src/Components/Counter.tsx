import * as React from 'react';
import '../style/Counter.css';

type Props = {
  gameOn: boolean,
  moveCount: string,
};

const Counter: React.SFC<Props> = props => {
  const { gameOn, moveCount } = props;
  const moveCountString = moveCount < 10 ? `0${moveCount}` : moveCount;
  let moveCountDisplay;
  if (!gameOn) {
    moveCountDisplay = '';
  } else {
    moveCountDisplay = moveCount !== 0 ? moveCountString : '--';
  }

  if (moveCountDisplay === '! !' || moveCountDisplay === 'WIN!') {
    const ele = document.querySelector('.current-count');
    ele.classList.add('counter-blink');
    setTimeout(() => {
      ele.classList.remove('counter-blink');
    }, 1700);
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
