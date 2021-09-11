import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CatalogCarousel from '../catalogCarousel';
import { getMoviesByGenre } from '../../../services/catalog.services';
import MovieCard from '../movieCard';

const Genre = ({ genre }) => {
  const { id, name } = genre;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesByGenre(id).then(data => setMovies(data.results.slice(0, 10)));
  }, [id]);

  return (
    <CatalogCarousel
      title={name}
      items={movies}
      renderItem={movie => <MovieCard key={`movie-${movie.id}`} movie={movie} />}
    />
  );
};

Genre.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Genre;
