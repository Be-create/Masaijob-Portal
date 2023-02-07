
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updatestate } from '../redux/action';

export default function Sort() {
  let dispatch = useDispatch()
  let data = useSelector((state) => state.jobs)
  const sortbysalary = () => {
    let temp = data.sort((a, b) => {

      return (b.salary - a.salary)
    })

   // console.log(temp)
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
          <Typography>Sort</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Salary" onChange={sortbysalary} />
           
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}