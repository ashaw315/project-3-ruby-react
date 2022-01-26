import React, { useState, useEffect } from "react";
import Card from './Card'

function Listings({ listings, handleBookmarked, onAdd }) {

<<<<<<< HEAD
=======
const mappedListings = listings.map((list) => {
    return <Card list={list} key={list.id} handleBookmarked={handleBookmarked} onAdd={onAdd}/>
})

>>>>>>> d28d3e4cc7c7086e3bba80a5a791b076009512b4
const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
    e.preventDefault();
    postListing(formData)
}

// Get all Listings
useEffect(() => {
    fetch('http://localhost:9292/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  },[])

const postListing = (listing) => {
    fetch('http://localhost:9292/listings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    })
    .then(r => r.json())
    .then(newListing => {
        setListings([newListing,...listings])
    })
}

const handleDelete = (id) => {
    fetch(`http://localhost:9292/listings/${id}`, {
        method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => {
        setListings(listings.filter(l => l.id !== id))
    })
}



const mappedListings = listings.map((list) => {
    return <Card list={list} key={list.id} handleDelete={handleDelete}/>
})


    return (
        <div>
            <h1>This is the Listings</h1>
                <form className="new-Listing" onSubmit={handleSubmit}>
                    <label>
                    Job Title:
                    <input 
                    type="text"
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}/>
                    </label>
                    <label>
                    Job Description:
                     <input 
                    type="text"
                    name="job_description"
                    value={formData.job_description}
                    onChange={handleChange}
                    />
                    </label>
                    <label>
                    Hourly Rate:
                     <input 
                    type="text"
                    name="hourly_rate"
                    value={formData.hourly_rate}
                    onChange={handleChange}
                    />
                    </label>
                    <label>
                    Start Date (yyyy/mm/dd):
                     <input 
                    type="text"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    />
                    </label>
                    <label>
                    End Date (yyyy/mm/dd):
                     <input 
                    type="text"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    />
                    </label>
                    <label>
                    Hired:
                    <select name="hired" value={formData.hired} onChange={handleChange}>
                        <option>Select Hired</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            {mappedListings}
        </div>
    )
}

export default Listings;