const SERVER_URL = process.env.REACT_APP_MOVIES_SERVER_URL;
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export async function getGenres() {
  const response = await fetch(`${SERVER_URL}/genre/movie/list?api_key=${API_KEY}`);
  return await response.json();
}

export async function getMoviesByGenre(genreId) {
  const response = await fetch(
    `${SERVER_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
  );
  return await response.json();
}
