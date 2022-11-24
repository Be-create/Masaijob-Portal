
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Filter() {
  let data = useSelector((state)=>state.jobs)
const sortbysalary=()=>{

}


  return (
    <div style={{ margin:"20px"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sort</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
  <FormControlLabel control={<Checkbox />} label="Salary"  onChange={(e)=>{
    console.log(e.target.checked)
  }}  />
  <FormControlLabel  control={<Checkbox  />} label="Latest" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Employment</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Full-Time" />
  <FormControlLabel  control={<Checkbox defaultChecked />} label="Part-Time" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Remote" />
  <FormControlLabel  control={<Checkbox defaultChecked />} label="Contract" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}