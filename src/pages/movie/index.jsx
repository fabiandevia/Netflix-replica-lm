import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

const Movie = () => {
  const { id } = useParams();

  return (
    <section className='movie'>
      <h1>PELICULA {id}</h1>
    </section>
  );
};

export default Movie;
