import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxFilter from "../CheckBoxFilter/CheckBoxFilter";
import DataFilter from "../DataFilter/DataFilter";
import GenreFilter from "../GenreFilter/GenreFilter";
import SliderFilter from "../SliderFilter/SliderFilter";

const FilterBox = () => {
  return (
    <Accordion disableGutters sx={{
      marginTop: '15px',
      position: 'static',
      border: '1px solid #e3e3e3',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{fontWeight: '600'}}>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography>Availabilities</Typography>
        <CheckBoxFilter/>
      </AccordionDetails>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <DataFilter/>
      </AccordionDetails>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography sx={{marginBottom: '10px'}}>Genres</Typography>
        <GenreFilter/>
      </AccordionDetails>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography sx={{marginBottom: '15px'}}>Minimum User Votes</Typography>
        <SliderFilter />
      </AccordionDetails>
    </Accordion>
  );
}

export default FilterBox;