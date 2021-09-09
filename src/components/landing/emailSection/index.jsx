import React, { useRef } from 'react';
import './styles.scss';

const EmailSection = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className='email-section'>
      <h5 className='text'>
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de
        Netflix.
      </h5>
      <br />
      <div className='email'>
        <input ref={inputRef} type='email' placeholder='email' />
        <button onClick={handleClick}>Comenzar</button>
      </div>
    </div>
  );
};

export default EmailSection;
