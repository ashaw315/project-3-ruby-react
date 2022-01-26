import React from 'react'
import { Link } from "react-router-dom";

function Card({ list }){
    
const { job_title, hourly_rate, start_date, end_date, id, hired } = list

const path = `/listings/${id}`;

    return (
        <div>
            <h2>{job_title}</h2>
            <p>${hourly_rate}</p>
            <p>{start_date}</p>
            <p>{end_date}</p>
            <p>{hired ? "true" : "false"}</p>
            <button> Apply </button>
            <button> Bookmark in Calendar </button>
            <button> Delete </button>
            <button> Position Open </button>
            <Link to={path}>
                <button> See Details </button>
            </Link>
            
        </div>
    )
}

export default Card;