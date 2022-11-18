import MenuItem from '@mui/material/MenuItem';
import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {chooseSortOption, setSortBy} from "../../store/reducers/fIlmSlice/filmSlice";
import {sortOptions} from "./data";
import {Select, SelectChangeEvent} from "@mui/material";

const SortSelect: FC = () => {
  const dispatch = useAppDispatch();

  const {moviesType, params} = useAppSelector(
    (state) => state.filmReducer
  );

  const [option, setOption] = useState<string>(params.sortBy);

  useEffect(() => {
    if (moviesType === 'Top Rated') {
      setOption('vote_average.desc');
      dispatch(setSortBy('vote_average.desc'));
    } else {
      setOption('popularity.desc');
      dispatch(setSortBy('popularity.desc'));
    }
  }, [dispatch, moviesType])

  const handleChange = (event: SelectChangeEvent<string>) => {
    setOption(event.target.value);
    dispatch(setSortBy(event.target.value));
    dispatch(chooseSortOption(true));
  };

  return (
    <Select
      value={option}
      onChange={handleChange}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: '#fff',
            borderRadius: '5px',
            marginTop: '-10px',
            height: '200px',
            '& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root': {
              fontSize: '13px'
            }
          },
        },
      }}
      sx={{
        marginTop: '10px',
        width: '100%',
        height: '35px',
        backgroundColor: '#CED3DB',
        borderRadius: '4px',
        fontSize: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
    >
      {
        sortOptions.map(item => {
          return (
            <MenuItem key={item.id} value={item.sortBy}>{item.title}</MenuItem>
          )
        })
      }
    </Select>
  );
};

export default SortSelect;