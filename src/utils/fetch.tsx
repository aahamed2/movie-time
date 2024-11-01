const API_KEY = process.env.PUBLIC_MOVIES_API_KEY;

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
