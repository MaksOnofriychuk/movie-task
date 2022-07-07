import MenuItem from '@mui/material/MenuItem';
import React, {FC, useState} from 'react';
import {CustomSelect} from './style';
import {useAppDispatch} from "../../hooks/redux";
import {chooseSortOption, setSortBy} from "../../store/reducers/fIlmSlice/filmSlice";
import {sortOptions} from "./data";

const SortSelect: FC = () => {
  const [itemTitle, setItemTitle] = useState('popularity.desc');

  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    setItemTitle(event.target.value as string);
    dispatch(setSortBy(event.target.value as string));
    dispatch(chooseSortOption(true));
  };

  return (
    <CustomSelect
      value={itemTitle}
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
    >
      {
        sortOptions.map(item => {
          return(
            <MenuItem key={item.id} value={item.sortBy}>{item.title}</MenuItem>
          )
        })
      }
    </CustomSelect>
  );
};

export default SortSelect;