import {THeaderItem, TTypographyText} from "./types";

export const menuItems: THeaderItem[] = [
  {
    id: 1,
    title: "Movies",
    selectValue: [
      {
        title: "Popular",
        path: "movie"
      },
      {
        title: "Now Playing",
        path: "movie/now-playing"
      },
      {
        title: "Upcoming",
        path: "movie/upcoming"
      },
      {
        title: "Top Rated",
        path: "movie/top-rated"
      },
    ]
  },
  {
    id: 2,
    title: "TV Shows",
    selectValue: [
      {
        title: "Popular",
        path: "tv"
      },
      {
        title: "Airing Today",
        path: "tv/airing-today"
      },
      {
        title: "On Tv",
        path: "tv/on-the-air"
      },
      {
        title: "Top Rated",
        path: "tv/top-rated"
      },
    ]
  },
  {
    id: 3,
    title: "People",
    selectValue: [
      {
        title: "People",
        path: "person"
      }
    ]
  },
  {
    id: 4,
    title: "More",
    selectValue: [
      {
        title: "Discussions",
        path: "discuss"
      },
      {
        title: "Leaderboard",
        path: "leaderboard"
      },
      {
        title: "Support",
        path: "talk"
      },
      {
        title: "Api",
        path: "documentation/api"
      },
    ]
  },
];

export const typographyText: TTypographyText[] = [
  {id: 1, text: "EN"},
  {id: 2, text: "Login"},
  {id: 3, text: "Join TMDB"},
];
