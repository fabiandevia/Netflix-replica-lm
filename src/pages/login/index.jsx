import React from 'react';
import { useHistory } from 'react-router-dom';
import { LOGO, MAIN_BG_IMG } from '../../constants/assets';
import { main } from '../../routes/routes';
import LoginForm from '../../components/login/form';
import './styles.scss';

const Login = () => {
  const history = useHistory();

  const handleClick = () => history.push(main);

  return (
    <section className='login'>
      <header>
        <img className='logo' src={LOGO} alt='logo-netflix' onClick={handleClick} />
      </header>
      <img className='background' src={MAIN_BG_IMG} alt='' />
      <div className='overlay' />
      <div className='form-wrapper'>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
