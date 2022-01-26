import React from 'react'

function Card({ list, handleBookmarked, onAdd }){
const { job_title, hourly_rate, start_date, end_date } = list


    return (
        <div>
            <h2>{job_title}</h2>
            <p>{hourly_rate}</p>
            <p>{start_date}</p>
            <button> Apply </button>
            <button onClick={() => onAdd(list)}> Bookmark </button>
            <button> See Details </button>
        </div>
    )
}

export default Card