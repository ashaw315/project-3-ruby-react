import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Card({ list, handleDelete, onAdd, patchListing }){

const [togglePosition, setTogglePostion] = useState(false)
    
const { job_title, hourly_rate, start_date, end_date, id, hired } = list

const path = `/listings/${id}`;

function handleToggle(){
    setTogglePostion(!togglePosition)
}

    return (
        <div>
            <h2>{job_title}</h2>
            <p>${hourly_rate}</p>
            <p>{start_date}</p>
            <p>{end_date}</p>
            <p>{hired ? "Position Filled" : "Position Open"}</p>
            <button> Apply </button>
            <button onClick={() => handleDelete(id)}> Delete </button>
            {list.hired? <button onClick={()=> patchListing(list)}>Position Filled</button> : <button onClick={()=> patchListing(list)}>Position Open </button>}
            {/* <button onClick={handleToggle}> {togglePosition ? "Position Open" : "Position Filled"}</button> */}
            <Link to={path}>
                <button> See Details </button>
            </Link>
            
            <button onClick={() => onAdd(list)}> Bookmark In Calendar </button>
        </div>
    )
}

export default Card;