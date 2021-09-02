import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../general/button';
import Input from '../../../general/input';
import { USER } from '../../../constants/storage';
import { profileSelection } from '../../../routes/routes';
import './styles.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem(USER, JSON.stringify({ email, password }));
    history.push(profileSelection);
  };

  return (
    <div className='login-form'>
      <h2 className='title'>Inicia Sesión</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          type='email'
          placeholder='Correo'
          onChange={handleEmailChange}
          error='Ingresa un email o un número de teléfono válido.'
        />
        <Input
          value={password}
          type='password'
          onChange={handlePasswordChange}
          placeholder='Contraseña'
        />
        <br />
        <br />
        <br />
        <Button text='Iniciar Sesión' size='lg' type='submit' />
      </form>
    </div>
  );
};

export default LoginForm;
