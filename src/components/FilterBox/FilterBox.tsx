import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxFilter from "../CheckBoxFilter/CheckBoxFilter";
import DataFilter from "../DataFilter/DataFilter";

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
        Availabilities
        <CheckBoxFilter />
      </AccordionDetails>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        Release Dates
        <DataFilter />
      </AccordionDetails>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        Genres
      </AccordionDetails>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        Language
      </AccordionDetails>
    </Accordion>
  );
}

export default FilterBox;