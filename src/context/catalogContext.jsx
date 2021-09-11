import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/storage';
import { FAVORITES } from '../constants/storage';

const DEFAULT_VALUE = {
  genres: [],
  updateGenres: () => {},
  favorites: [],
  addFavorite: () => {},
  deleteFavorite: () => {},
};

const CatalogContext = createContext(DEFAULT_VALUE);

export const CatalogProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [favorites, setFavorites] = useState(getFromLocalStorage(FAVORITES, true) || []);

  useEffect(() => {
    saveToLocalStorage(FAVORITES, favorites);
  }, [favorites]);

  const updateGenres = value => {
    Array.isArray(value) && setGenres(value);
  };

  const memoizedUpdate = useCallback(value => {
    updateGenres(value);
  }, []);

  const addFavorite = movie => {
    const foundMovie = favorites.find(_movie => _movie.id === movie.id);
    !foundMovie && setFavorites(prev => prev.concat(movie));
  };

  const deleteFavorite = id => {
    setFavorites(favorites.filter(movie => movie.id !== id));
  };

  return (
    <CatalogContext.Provider
      value={{ genres, updateGenres: memoizedUpdate, favorites, addFavorite, deleteFavorite }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogContext;
