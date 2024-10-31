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

export type TMoviesListProps = {
  movies: TMovie[];
};
