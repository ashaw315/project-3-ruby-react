import { SettingsBackupRestoreSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Card from './Card'
import styled from "styled-components"

const InputA = styled.input`
    background: white;
    padding: 10px;
    margin-right: 20px;
    border: 2px grey;
    transition: 500ms ease;
    color: black;
    text-decoration: none;
    font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 2px solid rgba(0, 0, 0, 1);
    border-radius: 10px;

    

    &:hover {
        background: grey;
        color: white;
        border: 2px solid rgba(0, 0, 0, 1);
        border-radius: 10px;
    }
    `;

function Listings({ onAdd }) {
const [listings, setListings] = useState([])
const [formData, setFormData] = useState({
    job_title: "",
    job_description: "",
    hourly_rate: 0,
    start_date: Date.new,
    end_date: Date.new,
    hired: false
})


const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
    e.preventDefault();
    postListing(formData);
    setFormData ({
        job_title: "",
        job_description: "",
        hourly_rate: 0,
        start_date: "",
        end_date: "",
        hired: "Select Hired"
    })
    
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

const patchListing = (listing) => {
    fetch(`http://localhost:9292/listings/${listing.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({...listing, hired: !listing.hired})
    })
    .then(r => r.json())
    .then(data => {
        
        setListings(listings.map(l => {
            console.log(l)
            if(listing.id === data.id){
                return data
            } else {
                return l
            }
        }))
    }).catch((error) => {
        console.error('Error',error);
    });
    window.location.reload(false);
} 


const mappedListings = listings.map((list) => {
    console.log(listings.length)
    return <Card list={list} key={list.id} handleDelete={handleDelete} onAdd={onAdd} patchListing={patchListing}/>
})


    return (
        <div className="listings-comp">
            <h2 className="listing-header">Add A Listing</h2>
            <div>
                <form className="new-listing" onSubmit={handleSubmit}>
                    <label>
                    Job Title:
                    </label>
                    <input 
                    type="text"
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}/>
                    <label>
                    Job Description:
                    </label>
                     <input 
                    type="text"
                    name="job_description"
                    value={formData.job_description}
                    onChange={handleChange}
                    />
                    <label>
                    Hourly Rate:
                    </label>
                     <input 
                    type="text"
                    name="hourly_rate"
                    value={formData.hourly_rate}
                    onChange={handleChange}
                    />
                    <label>
                    Start Date (yyyy/mm/dd):
                    </label>
                     <input 
                    type="text"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    />
                    <label>
                    End Date (yyyy/mm/dd):
                    </label>
                     <input 
                    type="text"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    />
                    <label>
                    Hired:
                    </label>
                    <select name="hired" value={formData.hired} onChange={handleChange}>
                        <option>Select Hired</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <br />
                    <InputA type="submit" value="Submit" />
                    <br />
                </form>
                </div>
                <div>
                    <h2 className="listings-title">LISTINGS</h2>
                </div>
            <ul className="cards">{mappedListings}</ul>
        </div>
    )
}

export default Listings;