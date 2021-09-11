import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonIcon = ({ icon, onClick, size }) => {
  const defaultWidth = size || 1.5;
  const width = `${defaultWidth * 2}rem`;

  return (
    <div
      style={{ width, height: width, lineHeight: width }}
      onClick={onClick}
      className='button-icon'
    >
      <span style={{ fontSize: `${defaultWidth}rem` }} className='material-icons'>
        {icon}
      </span>
    </div>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
};

ButtonIcon.defaultProps = {
  icon: '',
  onClick: () => {},
  size: 1.5,
};

export default ButtonIcon;
