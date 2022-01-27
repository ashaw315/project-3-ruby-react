import React from "react";
import {Link} from "react-router-dom";
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

function Navbar() {
    return(
        <nav className="nav-bar" style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ButtonA variant="text" color='purple'>Home</ButtonA>
                </Link>  {" "}

                <Link to="/listings" style={{ textDecoration: 'none' }}>
                    <ButtonA variant="text" color='yellow'>Listings</ButtonA>
                </Link>  {" "}

                <Link to="/chat" style={{ textDecoration: 'none' }}>
                    <ButtonA variant="text" color='red'>Chat</ButtonA>
                </Link> {" "}

                <Link to="/calendar" style={{ textDecoration: 'none' }}>
                    <ButtonA variant="text" color='green'>Calendar</ButtonA>
                </Link>  {" "}

                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <ButtonA variant="text" color='green'>Profile</ButtonA>
                </Link>
          </nav>
    )
}

export default Navbar;