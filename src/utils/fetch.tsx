const API_KEY = process.env.PUBLIC_MOVIES_API_KEY;

// fetch all list of movies
export async function fetchMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }

  const data = await response.json();
  return data.results || [];
}

// fetch movies based on the search query
export async function fetchSearchedMovies(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch searched movies');
  }

  const data = await response.json();
  return data.results || [];
}

// fetch the movie details page of the relevant movie tile

export async function fetchMovieDetails(movieId: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  const data = await response.json();
  return data; // Return the movie details object
}

// Fetch similar movies based on the movie ID
export async function fetchSimilarMovies(movieId: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch similar movies');
  }

  const data = await response.json();
  return data.results || [];
}
