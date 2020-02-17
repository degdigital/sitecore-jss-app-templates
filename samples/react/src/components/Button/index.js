import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ classNames, type, text, clickHandler, disabled }) => (
  <button
    className={classnames('button', classNames)}
    type={type}
    onClick={clickHandler}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.propTypes = {
  classNames: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  classNames: '',
  clickHandler: null,
};

export default Button;
