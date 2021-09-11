import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { IMAGE_SRC } from '../../../constants/assets';
import ButtonIcon from '../../../general/buttonIcon';
import CatalogContext from '../../../context/catalogContext';
import { movie as movieRoute } from '../../../routes/routes';
import './styles.scss';

const BTN_SIZE = 1.1;

const MovieCard = ({ movie }) => {
  const { id, backdrop_path, genre_ids, adult, vote_average } = movie;
  const { genres, addFavorite, deleteFavorite, favorites } = useContext(CatalogContext);
  const history = useHistory();

  const genresNames = useMemo(() => {
    return genres.length > 0 ? genre_ids.map(id => genres.find(genre => genre.id === id)) : [];
  }, [genre_ids, genres]);

  const isFavorite = useMemo(() => {
    return !!favorites.find(_movie => _movie.id === id);
  }, [favorites, id]);

  const handlePlayClick = () => history.push(movieRoute(id));

  const handleAddClick = () => addFavorite(movie);

  const handleDeleteClick = () => deleteFavorite(id);

  return (
    <article className='movie-card'>
      <img className='cover' src={`${IMAGE_SRC}${backdrop_path}`} alt='' />
      <div className='options'>
        <div className='actions'>
          <ButtonIcon icon='play_arrow' size={BTN_SIZE} onClick={handlePlayClick} />
          <ButtonIcon icon={isFavorite ? 'done' : 'add'} size={BTN_SIZE} onClick={handleAddClick} />
          <ButtonIcon icon='thumb_up' size={BTN_SIZE} />
          <ButtonIcon icon='thumb_down' size={BTN_SIZE} />
          {isFavorite && <ButtonIcon icon='close' size={BTN_SIZE} onClick={handleDeleteClick} />}
        </div>
        <p className='classification'>{adult ? '18+' : '7+'}</p>{' '}
        <span className='vote'>{vote_average} score</span>
        <div className='genres'>
          {genresNames.map(({ id, name }) => (
            <span key={`genre-${id}`}>{name}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
