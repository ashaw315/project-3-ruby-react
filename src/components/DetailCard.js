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
    fetch(`http://localhost:9292/listings/${id}`)
    .then((r) => r.json())
    .then((listing) => {
        setListing(listing);
        setIsLoaded(true);
    });
}, [id]);



if (!isLoaded) return <h2>Loading...</h2>;

const {job_title, hourly_rate, start_date, end_date, job_description, reviews, rating} = listing

console.log(listing)

const path = `/users/${id}`;

const all_reviews = listing.reviews.map((review) => {
    return (
            <div className='test-position' key={review.id}>
               <Accordion className="accordian-detail">
                  <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography><strong>{review.user.name}</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p>Current Position: {review.user.position}</p>
                      <p>Skill: {review.user.user_despcription}</p>  
                      <p>Hobby: {review.user.skills}</p>  
                      <p>Favorite Fruit: {review.user.password}</p>    
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <li>Comment: {review.comment}</li>
              <li>Rating: {review.rating}</li>
            </div>
    )
  })

    return (
    <section className="whole-detail">
      <div className="project-image">
        <h1>{job_title}</h1>
        </div>
        <div >
          <p>{start_date}</p>
          <p>${hourly_rate}</p>
          <p>{job_description}</p>
          {/* <p  className='test-position'>{all_reviews}</p> */}
          <Accordion className="accordian-detail">
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><strong>Reviews +</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{all_reviews}</p> 
              </Typography>
            </AccordionDetails>
           </Accordion>
           <Accordion className="accordian-detail">
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><strong>Applicants +</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>placeholder</p>  
              </Typography>
            </AccordionDetails>
           </Accordion>
          <div>
      </div>
    </div>
  </section>
    )
}
  export default DetailCard;



 