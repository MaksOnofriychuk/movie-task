import * as React from 'react';
import {FC, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {MaterialUIPickerProps} from "../../ComponentTypes/types";
import {useAppDispatch} from "../../hooks/redux";
import {addDateFrom, addDateTo, chooseSortOption, paramsIsLoad,} from "../../store/reducers/fIlmSlice/filmSlice";

const MaterialUIPicker: FC<MaterialUIPickerProps> = ({defaultValue, dataType, minData, maxData}) => {
  const [value, setValue] = React.useState<Date | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(defaultValue instanceof Date){
      setValue(defaultValue);
      dispatch(paramsIsLoad(false));
    }
    else{
      setValue(null)
    }
  }, [defaultValue]);

  useEffect(() => {
    if (value !== null) {
      if(dataType === 'from'){
        dispatch(addDateFrom(value.toISOString().slice(0, 10)))
        dispatch(paramsIsLoad(true));
      }
      if(dataType === 'to'){
        dispatch(addDateTo(value.toISOString().slice(0, 10)))
        dispatch(paramsIsLoad(true));
      }
    }
  }, [value]);

  const handleChange = (newValue: Date | null) => {
    if (newValue && isFinite(+newValue)) {
        setValue(newValue);
    }
    dispatch(chooseSortOption(true));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack sx={{
        width: '200px',
        '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
          height: '1px'
        }
      }}
      >
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          maxDate={maxData}
          minDate={minData}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default MaterialUIPicker;