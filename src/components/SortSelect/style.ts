import { styled } from '@mui/system';
import Select from '@mui/material/Select';

export const CustomSelect = styled(Select)({
  marginTop: '10px',
  width: '100%',
  height: '35px',
  backgroundColor: '#CED3DB',
  borderRadius: '4px',
  fontSize: '15px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});