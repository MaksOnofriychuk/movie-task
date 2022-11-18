import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {marks} from "./data";
import {useAppDispatch} from "../../hooks/redux";
import {addMinVotes, chooseSortOption} from "../../store/reducers/fIlmSlice/filmSlice";

const SliderFilter = () => {
  const [value, setValue] = useState(0);

  const dispatch = useAppDispatch();

  const changeValue = (event: any) => {
    setValue(event.target.value);
    dispatch(chooseSortOption(true));
  };

  useEffect(() => {
    dispatch(addMinVotes(value))
  }, [value])

  return (
    <Box sx={{width: '100%'}}>
      < Slider
        aria-label="Custom marks"
        defaultValue={0}
        valueLabelDisplay="auto"
        value={value}
        onChange={changeValue}
        step={50}
        marks={marks}
        min={0}
        max={500}
        sx={{
          '& .MuiSlider-mark': {
            backgroundColor: '#bfbfbf',
            height: '12px',
            width: '1px',
            position: 'absolute',
            top: '5px',
            '&:nth-of-type(3n-1)': {
              height: '6px',
            }
          }
        }}
      />
    </Box>
  );
}

export default SliderFilter;