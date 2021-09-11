import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext';
import Genre from '../../components/catalog/genre';
import { getGenres } from '../../services/catalog.services';
import CatalogContext from '../../context/catalogContext';
import CatalogCarousel from '../../components/catalog/catalogCarousel';
import MovieCard from '../../components/catalog/movieCard';
import './styles.scss';

const Catalog = () => {
  const { currentUser } = useContext(UserContext);
  const { genres, updateGenres, favorites } = useContext(CatalogContext);

  useEffect(() => {
    getGenres().then(data => updateGenres(data.genres));
  }, [updateGenres]);

  return (
    <section className='catalog'>
      <h1>Catalogo de {currentUser?.name}</h1>
      {favorites.length > 0 && (
        <CatalogCarousel
          title='Mis lista'
          items={favorites}
          renderItem={movie => <MovieCard key={`movie-${movie.id}`} movie={movie} />}
        />
      )}
      {genres.map(genre => (
        <Genre key={`genre-${genre.id}`} genre={genre} />
      ))}
    </section>
  );
};

export default Catalog;
