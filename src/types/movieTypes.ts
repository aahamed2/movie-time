// movie listing

export type TMovie = {
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
};

// movie details
export type TMoviesListProps = {
  movies: TMovie[];
};

export type TGenre = {
  id: number;
  name: string;
};
export type TProductionCompany = {
  name: string;
};

export type TLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type TMovieDetailsType = {
  title: string;
  tagline?: string;
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
  genres?: TGenre[];
  director?: string;
  cast?: string[];
  runtime?: number;
  vote_average?: number;
  vote_count?: number;
  status?: string;
  production_companies?: TProductionCompany[];
  spoken_languages?: TLanguage[];
};
