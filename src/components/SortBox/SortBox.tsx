import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SortSelect from "../SortSelect/SortSelect";

const SortBox = () => {
  return (
    <Accordion disableGutters sx={{
      border: '1px solid #e3e3e3',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{fontWeight: '600'}}>Sort</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        borderTop: '1px solid #e3e3e3',
        display: 'flex',
        flexDirection: 'column',
      }}>
        Sort Results By
        <SortSelect/>
      </AccordionDetails>
    </Accordion>
  );
}

export default SortBox;