import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ error, ...props }) => {
  return (
    <div className='input-wrapper'>
      <input {...props} />
      <ErrorMessage message={error} visible={!!error} />
    </div>
  );
};

Input.propTypes = {
  error: PropTypes.string,
};

export default Input;

const ErrorMessage = ({ message, visible }) => {
  if (!visible) return null;

  return <p className='error-message'>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
};
