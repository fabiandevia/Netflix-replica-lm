import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../general/button';
import Input from '../../../general/input';
import { TOKEN } from '../../../constants/storage';
import { profileSelection } from '../../../routes/routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { REQUIRED, EMAIL } from '../../../constants/error_messages';
import { resolveErrorMessage } from '../../../utils/fuctions';
import login from '../../../services/login.services';
import './styles.scss';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const schema = Yup.object().shape({
  email: Yup.string().email(EMAIL).required(REQUIRED),
  password: Yup.string().required(REQUIRED),
});

const LoginForm = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
    login(values).finally(() => {
      localStorage.setItem(TOKEN, ACCESS_TOKEN);
      history.push(profileSelection);
    });
  };

  return (
    <div className='login-form'>
      <h2 className='title'>Inicia Sesión</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          placeholder='Correo'
          error={resolveErrorMessage(errors, 'email')}
        />
        <Input
          type='password'
          placeholder='Contraseña'
          {...register('password')}
          error={resolveErrorMessage(errors, 'password')}
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
