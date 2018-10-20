import * as React from 'react';
import classNames from 'classnames';

import '../style/ColorPlayButtons.css';

type Props = {
  activeClass: string,
  buttonColor: 'red' | 'yellow' | 'green' | 'blue',
  gameOn: boolean,
  id: string,
  isPlayersTurn: boolean,
  playerSelectButton: () => void,
};

const ColorPlayButtons: React.SFC<Props> = props => {
  const { buttonColor, isPlayersTurn, gameOn, id, playerSelectButton } = props;

  return (
    <button
      id={`btn-${id}`}
      type="button"
      className={classNames('color-buttons', `color-buttons__${buttonColor}`)}
      disabled={!isPlayersTurn || !gameOn}
      onClick={playerSelectButton}
    />
  );
};

export default ColorPlayButtons;
