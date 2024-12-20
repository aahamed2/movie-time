const API_KEY = process.env.NEXT_PUBLIC_MOVIES_API_KEY;

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

// fetch the movie details page of the relevant movie tile/id
export async function fetchMovieDetails(
  movieId: string,
  options?: { next?: { revalidate: number } }
) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  const data = await response.json();
  return data;
}

// Fetch similar movies based on the movie ID
export async function fetchSimilarMovies(
  movieId: string,
  options?: { next?: { revalidate: number } }
) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    throw new Error('Failed to fetch similar movies');
  }

  const data = await response.json();
  return data.results || [];
}
