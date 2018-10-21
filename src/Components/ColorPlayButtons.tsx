import * as React from 'react';
import classNames from 'classnames';

import { ButtonColors } from './App';
import '../style/ColorPlayButtons.css';

interface IProps {
  buttonColor: ButtonColors;
  gameOn: boolean;
  isPlayersTurn: boolean;
  playerSelectButton: () => void;
}

const ColorPlayButtons: React.SFC<IProps> = props => {
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
