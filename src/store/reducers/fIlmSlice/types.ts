export type TInitialState = {
  filmList: TFilmList[];
  film: TFilm | null;
  casts: TCasts[] | [];
  reviews: TReviews[] | [];
  keywords: TKeywords[] | [];
  recommendations: TRecommendations[] | [];
  media: TNewMedia | null;
  collection: TCollection | null;
  keywordsMovies: [] | TKeywordsMovies[];
  loading: boolean;
  error: string;
  page: number;
  likesData: TLikes[] | [];
};

export type TLikes = {
  id: string;
  link: string;
};

export type TServerFilmsList = {
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

export type TFilmList = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type TServerFilm = {
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

export type TFilm = {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: TBelongsToCollection;
  budget: number;
  homepage: string;
  id: number;
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  genres: TGenres[];
  popularity: number;
  posterPath: string;
  productionCompanies: TProductionCompanies[];
  productionCountries: TProductionCountries[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: TSpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
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

export type TServerCasts = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TCasts = {
  adult: boolean;
  gender: number;
  id: number;
  knownForDepartment: string;
  name: string;
  originalName: string;
  popularity: number;
  profilePath: string;
  castId: number;
  character: string;
  creditId: string;
  order: number;
};

export type TKeywords = {
  id: number;
  name: "string";
};

export type TServerReviews = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type TReviews = {
  author: string;
  authorDetails: {
    name: string;
    username: string;
    avatarPath: string;
    rating: number;
  };
  content: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  url: string;
};

export type TServerAuthorDetails = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export type TAuthorDetails = {
  name: string;
  username: string;
  avatarPath: string;
  rating: number;
};

export type TServerPhotos = {
  backdrops: TServerBackdrops[];
  id: number;
  logos: TServerLogos[];
  posters: TServerPosters[];
};

export type TServerVideos = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type TVideos = {
  iso6391: string;
  iso31661: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  publishedAt: string;
  id: string;
};

export type TServerBackdrops = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type TBackdrops = {
  aspectRatio: number;
  height: number;
  iso6391: string | null;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
};

export type TServerLogos = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type TLogos = {
  aspectRatio: number;
  height: number;
  iso6391: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
};

export type TServerPosters = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
export type TPosters = {
  aspectRatio: number;
  height: number;
  iso6391: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
};

export type TServerNewMedia = {
  backdrops: TServerBackdrops[];
  id: number;
  logos: TServerLogos[];
  posters: TServerPosters[];
  videos: TServerVideos[];
};

export type TNewMedia = {
  backdrops: TBackdrops[];
  id: number;
  logos: TLogos[];
  posters: TPosters[];
  videos: TVideos[];
};

export type TServerCollection = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: TServerCollectionParts[];
};

export type TServerCollectionParts = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TCollection = {
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  parts: TCollectionParts[];
};

export type TCollectionParts = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  title: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type TServerRecommendations = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TRecommendations = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  mediaType: string;
  title: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type TServerKeywordsMovies = {
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

export type TKeywordsMovies = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};
