
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updatestate } from '../redux/action';

export default function Filter() {
  let dispatch = useDispatch()
  let data = useSelector((state) => state.jobs)
  const filterByLocation = (e) => {
    console.log(e.target.value)
    let temp = data.filter((elem) => elem.location === e.target.value)

   console.log(temp)
    dispatch(updatestate(temp))

  }
  

  return (
    <div style={{ margin: "20px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Location</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Location}
    label="Location"
    onChange={(e)=>filterByLocation(e)}
  >
    <MenuItem value={'Delhi'}>Delhi</MenuItem>
    <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
    <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
  </Select>
</FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}