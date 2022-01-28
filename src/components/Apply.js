import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
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


function Apply ( {listings} ) {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        position: "",
        user_despcription: "",
        skills: "",
        favorite_quote: "",
        favorite_game: "",
        listing: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        postUser(formData)
        setFormData({
            name: "",
            password: "",
            position: "",
            user_despcription: "",
            skills: "",
            favorite_quote: "",
            favorite_game: "",
            listing: ""
        })
    }

    useEffect(() => {
        fetch('http://localhost:9292/users')
        .then(r => r.json())
        .then(data => setUsers(data))
    }, [])

    
    const postUser = (user) => {
    fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(newUser => {
        setUsers([newUser,...users])
    })
}


    return (
    <div className="listings-comp">
        <h2 className="listing-header"> Apply for A Position </h2>
        <form className="new-listing" onSubmit={handleSubmit}>
                    <label>
                    Full Name:
                    </label>
                    <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}/>
                    <label>
                    Favorite Fruit:
                    </label>
                     <input 
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    <label>
                    Previous Position:
                    </label>
                     <input 
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    />
                    <label>
                    Skills:
                    </label>
                     <input 
                    type="text"
                    name="user_despcription"
                    value={formData.user_despcription}
                    onChange={handleChange}
                    />
                    <label>
                    Hobbies:
                    </label>
                     <input 
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    />
                    <label>
                    Favorite Quote:
                    </label>
                     <input 
                    type="text"
                    name="favorite_quote"
                    value={formData.favorite_quote}
                    onChange={handleChange}
                    />
                    <label>
                    Favorite Game:
                    </label>
                     <input 
                    type="text"
                    name="favorite_game"
                    value={formData.favorite_game}
                    onChange={handleChange}
                    />
                    <label>
                    Choose Listing to Apply:
                    </label>
                    <select name="listing" value={formData.listing} onChange={handleChange}>
                        <option>Select Listing</option>
                        {listings.map(list => 
                        <option value = {list.id}>{list.job_title}</option> )}
                    </select>
                    <InputA type="submit" value="Submit" />
                </form>
                <h2 className="listings-titles">APPLY</h2>
    </div>
       

    )
}

export default Apply;