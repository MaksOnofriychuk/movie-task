import {
  TCasts,
  TFilm,
  TFilmList,
  TServerNewMedia,
  TReviews,
  TServerCasts,
  TServerFilm,
  TServerFilmsList,
  TServerReviews,
  TNewMedia,
  TServerBackdrops,
  TServerLogos,
  TServerPosters,
  TServerVideos,
  TServerCollection,
  TCollection,
  TServerCollectionParts,
  TCollectionParts,
  TServerRecommendations,
  TRecommendations,
  TServerKeywordsMovies,
  TKeywordsMovies,
} from "../store/reducers/fIlmSlice/types";

export const transformFilmData = (film: TServerFilm): TFilm => {
  const {
    backdrop_path,
    belongs_to_collection,
    imdb_id,
    original_language,
    original_title,
    poster_path,
    production_companies,
    production_countries,
    spoken_languages,
    release_date,
    vote_average,
    vote_count,
    ...filmsData
  } = film;
  return {
    ...filmsData,
    backdropPath: `${process.env.React_App_Image_Base_Path}/${backdrop_path}`,
    belongsToCollection: belongs_to_collection,
    originalLanguage: original_language,
    originalTitle: original_title,
    posterPath: `${process.env.React_App_Image_Base_Path}/${poster_path}`,
    productionCompanies: production_companies,
    productionCountries: production_countries,
    spokenLanguages: spoken_languages,
    releaseDate: release_date,
    voteAverage: vote_average,
    voteCount: vote_count,
    imdbId: imdb_id,
  };
};

export const transformCastsData = (casts: TServerCasts[]): TCasts[] => {
  return casts.map((cast) => ({
    adult: cast.adult,
    gender: cast.gender,
    id: cast.id,
    knownForDepartment: cast.known_for_department,
    name: cast.name,
    originalName: cast.original_name,
    popularity: cast.popularity,
    profilePath: `${process.env.React_App_Image_Base_Path}/${cast.profile_path}`,
    castId: cast.cast_id,
    character: cast.character,
    creditId: cast.credit_id,
    order: cast.order,
  }));
};

export const transformFilmsData = (films: TServerFilmsList[]): TFilmList[] => {
  return films.map((film: TServerFilmsList) => ({
    adult: film.adult,
    backdropPath: `${process.env.React_App_Image_Base_Path}/${film.backdrop_path}`,
    genreIds: film.genre_ids,
    id: film.id,
    originalLanguage: film.original_language,
    originalTitle: film.original_title,
    overview: film.overview,
    popularity: film.popularity,
    posterPath: `${process.env.React_App_Image_Base_Path}/${film.poster_path}`,
    releaseDate: film.release_date,
    title: film.title,
    video: film.video,
    voteAverage: film.vote_average,
    voteCount: film.vote_count,
  }));
};

export const transformReviewsData = (reviews: TServerReviews[]): TReviews[] => {
  return reviews.map((review: TServerReviews) => ({
    author: review.author,
    authorDetails: {
      name: review.author_details.name,
      username: review.author_details.username,
      avatarPath: review.author_details.avatar_path,
      rating: review.author_details.rating,
    },
    content: review.content,
    createdAt: review.created_at,
    id: review.id,
    updatedAt: review.updated_at,
    url: review.url,
  }));
};

export const transformMediaData = (mediaData: TServerNewMedia): TNewMedia => {
  return {
    backdrops: mediaData.backdrops.map((backdrop: TServerBackdrops) => {
      return {
        aspectRatio: backdrop.aspect_ratio,
        height: backdrop.height,
        iso6391: backdrop.iso_639_1,
        filePath: backdrop.file_path,
        voteAverage: backdrop.vote_average,
        voteCount: backdrop.vote_count,
        width: backdrop.width,
      };
    }),
    id: mediaData.id,
    logos: mediaData.logos.map((logo: TServerLogos) => {
      return {
        aspectRatio: logo.aspect_ratio,
        height: logo.height,
        iso6391: logo.iso_639_1,
        filePath: logo.file_path,
        voteAverage: logo.vote_average,
        voteCount: logo.vote_count,
        width: logo.width,
      };
    }),
    posters: mediaData.posters.map((poster: TServerPosters) => {
      return {
        aspectRatio: poster.aspect_ratio,
        height: poster.height,
        iso6391: poster.iso_639_1,
        filePath: poster.file_path,
        voteAverage: poster.vote_average,
        voteCount: poster.vote_count,
        width: poster.width,
      };
    }),
    videos: mediaData.videos.map((video: TServerVideos) => {
      return {
        iso6391: video.iso_639_1,
        iso31661: video.iso_3166_1,
        name: video.name,
        key: video.key,
        site: video.site,
        size: video.size,
        type: video.type,
        official: video.official,
        publishedAt: video.published_at,
        id: video.id,
      };
    }),
  };
};

export const transformCollectionData = (
  collection: TServerCollection
): TCollection => {
  return {
    id: collection.id,
    name: collection.name,
    overview: collection.overview,
    posterPath: collection.poster_path,
    backdropPath: collection.backdrop_path,
    parts: collection.parts.map(
      (part: TServerCollectionParts): TCollectionParts => {
        return {
          adult: part.adult,
          backdropPath: part.backdrop_path,
          genreIds: part.genre_ids,
          id: part.id,
          title: part.title,
          originalLanguage: part.original_language,
          originalTitle: part.original_title,
          overview: part.overview,
          popularity: part.popularity,
          posterPath: part.poster_path,
          releaseDate: part.release_date,
          video: part.video,
          voteAverage: part.vote_average,
          voteCount: part.vote_count,
        };
      }
    ),
  };
};

export const transformRecommendationsData = (
  recommendations: TServerRecommendations[]
): TRecommendations[] => {
  return recommendations.map((recommendation: TServerRecommendations) => {
    return {
      adult: recommendation.adult,
      backdropPath: `${process.env.React_App_Image_Base_Path}${recommendation.backdrop_path}`,
      genreIds: recommendation.genre_ids,
      id: recommendation.id,
      mediaType: recommendation.media_type,
      title: recommendation.title,
      originalLanguage: recommendation.original_language,
      originalTitle: recommendation.original_title,
      overview: recommendation.overview,
      popularity: recommendation.popularity,
      posterPath: `${process.env.React_App_Image_Base_Path}${recommendation.poster_path}`,
      releaseDate: recommendation.release_date,
      video: recommendation.video,
      voteAverage: recommendation.vote_average,
      voteCount: recommendation.vote_count,
    };
  });
};

export const transformKeywordsMoviesData = (
  keywordsMovies: TServerKeywordsMovies[]
): TKeywordsMovies[] => {
  return keywordsMovies.map((movie: TServerKeywordsMovies) => {
    return {
      adult: movie.adult,
      backdropPath: movie.backdrop_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      originalLanguage: movie.original_language,
      originalTitle: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      posterPath: `https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${movie.poster_path}`,
      releaseDate: movie.release_date,
      title: movie.title,
      video: movie.video,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
    };
  });
};
