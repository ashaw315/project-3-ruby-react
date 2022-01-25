import React, { useState } from "react";

function Home( userData, userInfo ) {
const [userName, setUserName] = useState('')
const [pass, setPass] = useState('')
const [details, setDetails] = useState({name: "", password: ""});

const {name, password} = userData



const submitHandler = e => {
    e.preventDefault();
    userData(details)
}

console.log(userData)

    return (
        <div>
          <form onSubmit={submitHandler}>
            <h1>This is the Home</h1>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <button value="submit" value="LOGIN">LOGIN</button>
            </div>
          </form>
        </div>
    )
}

export default Home;