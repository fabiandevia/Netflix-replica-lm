import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SaveButton = ({ disabled, onClick, text, type }) => {
  const className = `save-button ${type === 'main' ? '' : 'default'}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

SaveButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['main', 'default']),
};

SaveButton.defaultProps = {
  text: 'Guardar',
  type: 'main',
};

export default SaveButton;
