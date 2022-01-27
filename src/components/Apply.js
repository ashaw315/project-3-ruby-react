import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";


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
    <div>
        <h2> Apply for A Position </h2>
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
                    <input type="submit" value="Submit" />
                </form>
    </div>
       

    )
}

export default Apply;