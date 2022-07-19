import {
  TBackdrops,
  TGenres,
  TNewMedia,
  TPosters,
  TProductionCompanies,
  TProductionCountries,
  TRecommendations,
  TVideos,
} from "../store/reducers/fIlmSlice/types";
import {MouseEventHandler} from "react";

export type THomeCardProps = {
  posterPath: string;
  originalTitle: string;
  releaseDate: string;
  id: number;
};

export type TCastCardProps = {
  profilePath: string;
  name: string;
  character: string;
};

export type TTabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export type TTabMediaPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export type TRecommendationCardProps = {
  recommendation: TRecommendations;
  index: number;
};

export type THoverBlockProps = {
  releaseDate: string;
};

export type TPropsDropDown = {
  children?: React.ReactNode;
  selectValue: TSelectValue[];
};

export type TSelectValue = {
  title: string;
  path: string
}

export type TSocialLinkProps = {
  children: React.ReactElement;
  title: string;
};

export type TCircularStatic = {
  valuePercent: number;
};

export type TImageCardProps = {
  posterPath: string;
  productionCompanies: TProductionCompanies[];
};

export type TInfoProps = {
  voteAverage: number;
  releaseDate: string;
  runtime: number;
  title: string;
  productionCountries: TProductionCountries[];
  genres: TGenres[];
  tagline: string;
  overview: string;
};

export type TModal = {
  statusModal: boolean;
  setStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalImage?: string;
};

export type TPopularProps = {
  media: TNewMedia;
};

export type TBackdropsProps = {
  backdrops: TBackdrops[];
};

export type TPostersProps = {
  posters: TPosters[];
};

export type TVideosProps = {
  videos: TVideos[];
};

export type TVideoProviderProps = {
  key?: string;
};

export type TPopupProps = {
  children?: React.ReactNode;
};

export type TUserCommentProps = {
  text: string;
  status: string;
  count: number;
  date: string;
  nameBy: string;
};

export type ButtonLoadMoreProps = {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  borderRadius?: string;
  disabled?: boolean;
}

export type TCardMovie = {
  poster: string;
  title: string;
  subtitle: string;
  releaseDate: string;
};

export type TSortOptions = {
  id: string;
  title: string;
  sortBy: string
}

export type TCheckBoxOptions = {
  id: string;
  title: string;
  withWatchFilter: string;
  checked: boolean,
}
