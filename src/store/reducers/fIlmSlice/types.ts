export type TInitialState = {
  filmList: TFilmList[];
  film: TFilm | null;
  loading: boolean;
  error: string;
};

export type TFilmList = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TFilm = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: TBelongsToCollection;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  genres: TGenres[];
  popularity: number;
  poster_path: string;
  production_companies: TProductionCompanies[];
  production_countries: TProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TSpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TBelongsToCollection = {
  backdrop_path: "string";
  id: number;
  name: string;
  poster_path: string;
  genres: TGenres[];
};

export type TGenres = {
  id: number;
  name: string;
};

export type TProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type TProductionCountries = {
  iso_3166_1: string;
  name: string;
};

export type TSpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
