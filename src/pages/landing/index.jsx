import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../general/button';
import { login } from '../../routes/routes';
import { LOGO } from '../../constants/assets';
import InformativeSection from '../../components/landing/informativeSection';
import informativeData from './informativeData.json';
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
      <div>
        {informativeData.map(({ id, title, img, description }) => (
          <InformativeSection
            key={`info-section-${id}`}
            title={title}
            img={img}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Landing;
