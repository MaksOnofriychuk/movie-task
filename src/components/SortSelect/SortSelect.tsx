import MenuItem from '@mui/material/MenuItem';
import { FC, useState } from 'react';
import { CustomSelect } from './style';

const SortSelect: FC = () => {
  const [sortOption, setSortOption] = useState('1');

  const handleChange = (event: any) => {
    setSortOption(event.target.value as string);
  };

  return (
    <CustomSelect
      value={sortOption}
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
      <MenuItem value="1">Popularity Descending</MenuItem>
      <MenuItem value="2">Popularity Ascending</MenuItem>
      <MenuItem value="3">Rating Descending</MenuItem>
      <MenuItem value="4">Rating Ascending</MenuItem>
      <MenuItem value="5">Release Date Descending</MenuItem>
      <MenuItem value="6">Release Date Ascending</MenuItem>
      <MenuItem value="7">Title (A-Z)</MenuItem>
      <MenuItem value="8">Title (Z-A)</MenuItem>
    </CustomSelect>
  );
};

export default SortSelect;