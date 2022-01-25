import React from "react";
import Card from './Card'

function Listings({ listings }) {

const mappedListings = listings.map((list) => {
    return <Card list={list} key={list.id}/>
})
    return (
        <div>
            <h1>This is the Listings</h1>
            {mappedListings}
        </div>
    )
}

export default Listings;