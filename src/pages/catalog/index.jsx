import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { profileSelection } from '../../routes/routes';
import './styles.scss';

const Catalog = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) return <Redirect to={profileSelection} />;

  return (
    <section className='catalog'>
      <h1>Catalogo de {currentUser?.name}</h1>
    </section>
  );
};

export default Catalog;
