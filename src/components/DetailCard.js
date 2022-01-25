import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import styled from "styled-components"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DetailCard(){
  

    return (
        <section className="whole-detail">
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
        <div className="furn-details">
          <p className="price-detail">{name}</p>
          <p className="price-detail">${price}</p>
          <p>by {designer}</p>
          <p>{category}</p>
          <p>{materials}</p>
          <Accordion className="accordian-detail">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><strong>About</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                <p>{about}</p>
                </Typography>
        </AccordionDetails>
      </Accordion>
          <Button className="button-card" onClick={() => onAdd(furniture)}>Add To Cart</Button><Link to="/furniture">
          <Button className="button-go-back">Go Back</Button>
        </Link>
          <div>
      </div>
    </div>
  </section>
    )
    }
  export default DetailCard 










