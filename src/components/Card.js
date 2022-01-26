import React from 'react'
import { Link } from "react-router-dom";

function Card({ list, handleDelete }){
    
const { job_title, hourly_rate, start_date, end_date, id, hired } = list

const path = `/listings/${id}`;

function Card({ list, handleBookmarked, onAdd }){
const { job_title, hourly_rate, start_date, end_date } = list

    return (
        <div>
            <h2>{job_title}</h2>
            <p>${hourly_rate}</p>
            <p>{start_date}</p>
            <p>{end_date}</p>
            <p>{hired ? "Position Filled" : "Position Open"}</p>
            <button> Apply </button>
            <button> Bookmark in Calendar </button>
            <button onClick={() => handleDelete(id)}> Delete </button>
            <button> Position Open </button>
            <Link to={path}>
                <button> See Details </button>
            </Link>
            
            <button onClick={() => onAdd(list)}> Bookmark </button>
            <button> See Details </button>
        </div>
    )}
}

export default Card;