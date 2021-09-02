import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../general/button';
import { login } from '../../routes/routes';
import { LOGO } from '../../constants/assets';
import './styles.scss';

const Landing = () => {
  const history = useHistory();

  const handleClick = () => history.push(login);

  return (
    <section className='landing'>
      <header>
        <img className='logo' src={LOGO} alt='' />
        <Button text='Iniciar Sesión' onClick={handleClick} />
      </header>
    </section>
  );
};

export default Landing;
