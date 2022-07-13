import {nanoid} from "@reduxjs/toolkit";
import {TSortOptions} from "../../ComponentTypes/types";

export const sortOptions: TSortOptions[] = [
  {
    id: nanoid(),
    title: 'Popularity Descending',
    sortBy: 'popularity.desc'
  },
  {
    id: nanoid(),
    title: 'Popularity Ascending',
    sortBy: 'popularity.asc'
  },
  {
    id: nanoid(),
    title: 'Rating Descending',
    sortBy: 'vote_average.desc'
  },
  {
    id: nanoid(),
    title: 'Rating Ascending',
    sortBy: 'vote_average.asc'
  },
  {
    id: nanoid(),
    title: 'Release Date Descending',
    sortBy: 'release_date.desc'
  },
  {
    id: nanoid(),
    title: 'Release Date Ascending',
    sortBy: 'release_date.asc'
  },
  {
    id: nanoid(),
    title: 'Title (A-Z)',
    sortBy: 'original_title.desc'
  },
  {
    id: nanoid(),
    title: 'Title (Z-A)',
    sortBy: 'original_title.asc'
  }
]