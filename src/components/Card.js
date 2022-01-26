import React from 'react'
import { Link } from "react-router-dom";

<<<<<<< HEAD
function Card({ list, handleDelete }){
    
const { job_title, hourly_rate, start_date, end_date, id, hired } = list
=======
function Card({ list, handleBookmarked, onAdd }){
const { job_title, hourly_rate, start_date, end_date } = list
>>>>>>> d28d3e4cc7c7086e3bba80a5a791b076009512b4


    return (
        <div>
            <h2>{job_title}</h2>
            <p>${hourly_rate}</p>
            <p>{start_date}</p>
            <p>{end_date}</p>
            <p>{hired ? "Position Filled" : "Position Open"}</p>
            <button> Apply </button>
<<<<<<< HEAD
            <button> Bookmark in Calendar </button>
            <button onClick={() => handleDelete(id)}> Delete </button>
            <button> Position Open </button>
            <Link to={path}>
                <button> See Details </button>
            </Link>
            
=======
            <button onClick={() => onAdd(list)}> Bookmark </button>
            <button> See Details </button>
>>>>>>> d28d3e4cc7c7086e3bba80a5a791b076009512b4
        </div>
    )
}

export default Card;