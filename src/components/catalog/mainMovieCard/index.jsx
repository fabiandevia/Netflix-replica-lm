import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MainMovieCard = ({ movie }) => {
  const { poster_path } = movie;

  return <article className='main-movie-card'></article>;
};

MainMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MainMovieCard;
