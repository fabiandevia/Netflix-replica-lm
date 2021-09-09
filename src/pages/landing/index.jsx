import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../general/button';
import { login } from '../../routes/routes';
import { LOGO } from '../../constants/assets';
import InformativeSection from '../../components/landing/informativeSection';
import informativeData from './informativeData.json';
import Divider from '../../components/landing/divider';
import FAQSection from '../../components/landing/faqSection';
import EmailSection from '../../components/landing/emailSection';
import './styles.scss';

const Landing = () => {
  const history = useHistory();

  const handleClick = () => history.push(login);

  return (
    <section className='landing'>
      <header>
        <div className='overlay' />
        <div className='options'>
          <img className='logo' src={LOGO} alt='' />
          <Button text='Iniciar Sesión' onClick={handleClick} />
        </div>
        <div className='content'>
          <h1 className='text main'>{`Películas y serie\nilimitadas y mucho más.`}</h1>
          <h4 className='text middle'>Disfruta donde quieras. Cancela cuando quieras.</h4>
          <EmailSection />
        </div>
      </header>
      <Divider />
      {informativeData.map(({ id, title, img, description, align }) => (
        <div key={`info-section-${id}`}>
          <InformativeSection title={title} img={img} description={description} align={align} />
          <Divider />
        </div>
      ))}
      <FAQSection />
      <Divider />
    </section>
  );
};

export default Landing;
