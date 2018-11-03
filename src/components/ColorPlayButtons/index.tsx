import * as React from 'react';
import classNames from 'classnames';

import { ButtonColor } from '../App';
import './style.scss';

interface Props {
  buttonColor: ButtonColor;
  gameOn: boolean;
  isPlayersTurn: boolean;
  playerSelectButton: () => void;
}

const ColorPlayButtons: React.SFC<Props> = props => {
  const { buttonColor, isPlayersTurn, gameOn, playerSelectButton } = props;

  return (
    <button
      type="button"
      className={classNames('color-buttons', `color-buttons__${buttonColor}`)}
      disabled={!isPlayersTurn || !gameOn}
      onClick={playerSelectButton}
    />
  );
};

export default ColorPlayButtons;
