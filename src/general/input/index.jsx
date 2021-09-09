import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = forwardRef(({ error, ...props }, ref) => (
  <div className='input-wrapper'>
    <input {...props} ref={ref} />
    <ErrorMessage message={error} visible />
  </div>
));

Input.propTypes = {
  error: PropTypes.string,
};

export default Input;

export const ErrorMessage = ({ message, visible }) => {
  if (!visible) return null;

  return <p className='error-message'>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
};
