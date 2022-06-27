import { THeaderItem, TTypographyText } from "./types";

export const menuItems: THeaderItem[] = [
  {
    id: 1,
    title: "Movies",
    selectValue: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
  },
  {
    id: 2,
    title: "TV Shows",
    selectValue: ["Popular", "Airing Today", "On Tv", "Top Rated"],
  },
  {
    id: 3,
    title: "People",
    selectValue: ["Popular People"],
  },
  {
    id: 4,
    title: "More",
    selectValue: ["Discussions", "Leeboard", "Support", "Api"],
  },
];

export const typographyText: TTypographyText[] = [
  { id: 1, text: "EN" },
  { id: 2, text: "Login" },
  { id: 3, text: "Join TMDB" },
];
