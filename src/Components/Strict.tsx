import * as React from 'react';
import classnames from 'classnames';
import { keyboardHandler } from '../helpers';
import '../style/Strict.css';

type Props = {
  isStrict: boolean,
  toggleStrict: () => void,
};

const Strict: React.SFC<Props> = props => {
  const { isStrict, toggleStrict } = props;
  return (
    <div className="strict-button-wrapper">
      <div className={classnames('strict-mode-light', { strict: isStrict })} />
      <div
        className="strict-mode-button"
        onClick={() => toggleStrict()}
        onKeyPress={e => {
          if (keyboardHandler(e)) toggleStrict();
        }}
        role="button"
        tabIndex={0}
      />
      STRICT
    </div>
  );
};

export default Strict;
