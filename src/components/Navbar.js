import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button variant="text" color='purple'>Home</button>
                </Link>  {" "}

                <Link to="/listings" style={{ textDecoration: 'none' }}>
                    <button variant="text" color='yellow'>Listings</button>
                </Link>  {" "}

                <Link to="/chat" style={{ textDecoration: 'none' }}>
                    <button variant="text" color='red'>Chat</button>
                </Link> {" "}

                <Link to="/calendar" style={{ textDecoration: 'none' }}>
                    <button variant="text" color='green'>Calendar</button>
                </Link>  {" "}

                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <button variant="text" color='green'>Profile</button>
                </Link>
          </nav>
    )
}

export default Navbar;