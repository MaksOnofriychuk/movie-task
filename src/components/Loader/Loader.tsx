import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearDeterminate = () => {
  return (
    <Box sx={{width: '130vw', position: 'fixed', top: '0', zIndex: '1000'}}>
      <LinearProgress/>
    </Box>
  );

};

export default LinearDeterminate