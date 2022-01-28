import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const ButtonA = styled.button`
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

function Card({ list, handleDelete, onAdd, patchListing }){

const [togglePosition, setTogglePostion] = useState(false)
    
const { job_title, hourly_rate, start_date, end_date, id, hired } = list

const path = `/listings/${id}`;

const path_apply = '/apply';

function handleToggle(){
    setTogglePostion(!togglePosition)
}



    return (
        <div className='card'>
            <h2 className='title-card'>{job_title}</h2>
            <p>${hourly_rate}</p>
            <p>{start_date}</p>
            <p>{end_date}</p>
            <p>{hired ? "Position Filled" : "Position Open"}</p>
            <div className='card-buttons'>
                <Link to={path_apply}>
                <ButtonA> Apply </ButtonA>
                </Link>
                <ButtonA onClick={() => handleDelete(id)}> Delete </ButtonA>
                {list.hired? <ButtonA onClick={()=> patchListing(list)}>Position Filled</ButtonA> : <ButtonA onClick={()=> patchListing(list)}>Position Open </ButtonA>}
                {/* <button onClick={handleToggle}> {togglePosition ? "Position Open" : "Position Filled"}</button> */}
                <Link to={path}>
                    <ButtonA> See Details </ButtonA>
                </Link>
                <ButtonA onClick={() => onAdd(list)}> Bookmark in Calendar </ButtonA>
            </div>
        </div>
    )
}

export default Card;