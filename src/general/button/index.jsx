import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SM = 'sm';
const LG = 'lg';

const Button = ({ text, onClick, size, type }) => {
  const className = `button ${size === LG && 'lg'}`;

  return (
    <button className={className} onClick={onClick} ty>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([SM, LG]),
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

Button.defaultProps = {
  size: SM,
  type: 'button',
};

export default Button;
