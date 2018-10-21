import * as React from 'react';
import classnames from 'classnames';
import '../style/Strict.css';

interface IProps {
  isStrict: boolean;
  toggleStrict: () => void;
}

const Strict: React.SFC<IProps> = props => {
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
