import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
// import styled from "styled-components"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DetailCard(){
const [listing, setListing] = useState(null)
const [isLoaded, setIsLoaded] = useState(false);

const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/listing/${id}`)
    .then((r) => r.json())
    .then((listing) => {
        setListing(listing);
        setIsLoaded(true);
    });
}, [id]);

if (!isLoaded) return <h2>Loading...</h2>;

    return (
        <section className="whole-detail">
        <div className="project-image">
        </div>
        <div className="furn-details">
          <p className="price-detail">name</p>
          <p className="price-detail">$price</p>
          <p>by </p>
          <p>cat</p>
          <p>mat</p>
          <Accordion className="accordian-detail">
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><strong>About</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                <p>ab</p>
                </Typography>
        </AccordionDetails>
      </Accordion>
          <button>Add To Cart</button>
          <div>
      </div>
    </div>
  </section>
    )
}
  export default DetailCard;
