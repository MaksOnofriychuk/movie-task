export const sortOptions: Array<{id: number, title: string, sortBy: string}> = [
  {
    id: 1,
    title: 'Popularity Descending',
    sortBy: 'popularity.desc'
  },
  {
    id: 2,
    title: 'Popularity Ascending',
    sortBy: 'popularity.asc'
  },
  {
    id: 3,
    title: 'Rating Descending',
    sortBy: 'vote_average.desc'
  },
  {
    id: 4,
    title: 'Rating Ascending',
    sortBy: 'vote_average.asc'
  },
  {
    id: 5,
    title: 'Release Date Descending',
    sortBy: 'release_date.desc'
  },
  {
    id: 6,
    title: 'Release Date Ascending',
    sortBy: 'release_date.asc'
  },
  {
    id: 7,
    title: 'Title (A-Z)',
    sortBy: 'original_title.desc'
  },
  {
    id: 8,
    title: 'Title (Z-A)',
    sortBy: 'original_title.asc'
  }
]