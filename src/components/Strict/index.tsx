import * as React from 'react';
import classnames from 'classnames';
import './style.scss';

interface Props {
  isStrict: boolean;
  toggleStrict: () => void;
}

const Strict: React.SFC<Props> = props => {
  const { isStrict, toggleStrict } = props;
  return (
    <div className="strict-button-wrapper">
      <div className={classnames('strict-mode-light', { strict: isStrict })} />
      <button
        className="strict-mode-button"
        type="button"
        onClick={toggleStrict}
      />
      STRICT
    </div>
  );
};

export default Strict;
