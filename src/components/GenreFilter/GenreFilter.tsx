import {genreList} from "./data";
import {Box, Button} from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import {addGenres, chooseSortOption} from "../../store/reducers/fIlmSlice/filmSlice";
import {TGenreList} from "../../ComponentTypes/types";
import * as React from "react";

const GenreFilter = () => {
  const [genreListItems, setGenreListItems] = React.useState(genreList);

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(addGenres(genreListItems))
    dispatch(chooseSortOption(true))
  }, [genreListItems])

  const handleClick = (item: TGenreList) => {
    if(!item.picked){
      const newGenreListItems = genreListItems.map(el => el.id === item.id ? {...el, picked: true} : el);
      setGenreListItems(newGenreListItems)
    } else {
      const newGenreListItems = genreListItems.map(el => el.id === item.id ? {...el, picked: false} : el);
      setGenreListItems(newGenreListItems)
    }
  }

  return (
    <Box>
      {
        genreListItems.map(item => {
          return <Button
            key={item.id}
            variant='outlined'
            onClick={() => handleClick(item)}
            sx={{
              color: item.picked ? '#fff' : '#000',
              backgroundColor: item.picked ? '#01B4E4' : '#fff',
              fontWeight: '400',
              textTransform: 'none',
              borderRadius: '25px',
              borderColor: item.picked ? '#01B4E4' : "#7f7f7f",
              margin: '0 10px 10px 0',
              '&:hover': {
                backgroundColor: item.picked ? '#01B4E4' : '#fff',
                borderColor: item.picked ? '#01B4E4' : "#7f7f7f"
              }
            }}>{item.name}</Button>
        })
      }
    </Box>
  )
};

export default GenreFilter;