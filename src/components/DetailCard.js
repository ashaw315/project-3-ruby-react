import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


function DetailCard(){
const [listing, setListing] = useState(null)
const [isLoaded, setIsLoaded] = useState(false);
const [comments, setComments] = useState(null)
const [formData, setFormData] = useState({
  review_name: "",
  comment: "",
  rating: 0, 
  listing: ""
})

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
  e.preventDefault();
  postReview(formData)
  setFormData({
    review_name: "",
    comment: "",
    rating: 0
  })
}

console.log(formData)


const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/listings/${id}`)
    .then((r) => r.json())
    .then((listing) => {
        setListing(listing);
        setIsLoaded(true);
    });
}, [id]);



useEffect(() => {
  fetch('http://localhost:9292/reviews')
  .then(r => r.json())
  .then(data => setComments(data))
}, [])

const postReview = (review) => {
fetch('http://localhost:9292/reviews', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(review)
})
.then(r => r.json())
.then(newReview => {
  setComments([newReview,...comments])
})
}

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

  const all_applicants = listing.applicants.map((applicant) => {
    return (
      <div className='test-position' key={applicant.id}>
               <Accordion className="accordian-detail">
                  <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography><strong>{applicant.user.name}</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p>Current Position: {applicant.user.position}</p>
                      <p>Skill: {applicant.user.user_despcription}</p>  
                      <p>Hobby: {applicant.user.skills}</p>  
                      <p>Favorite Fruit: {applicant.user.password}</p>    
                    </Typography>
                  </AccordionDetails>
              </Accordion>
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
                <p>{all_applicants}</p>  
              </Typography>
            </AccordionDetails>
           </Accordion>
          <div>
      </div>
    </div>
    
    <div>
        
        <form className="new-listing" onSubmit={handleSubmit}>
                  <aside value={formData.listing}>Listing</aside> 
                    <label>
                    Full Name:
                    </label>
                    <input 
                    type="text"
                    name="review_name"
                    value={formData.review_name}
                    onChange={handleChange}/>
                    <label>
                    Comment:
                    </label>
                     <input 
                    type="text"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    />
                    <label>
                    Rating:
                    </label>
                     <input 
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    />
                    <input type="submit" value="Submit" />
                    
                </form>
    </div>
  </section>
    )
}
  export default DetailCard;



 