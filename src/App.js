import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Home from './components/Home';
import Listings from './components/Listings';
import './App.css';

function App() {
  const [userData, setUserData] = useState([])
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [listings, setListings] = useState([])


  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then(resp => resp.json())
      .then(userData => setUserData(userData))
  }, [])
    // console.log(userData)

    useEffect(() => {
      fetch('http://localhost:9292/listings')
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])
  console.log(listings)

  
 

  function handleLogin(name, password){
    setUserName(name)
    setPassword(password)
    setLoggedIn(true)
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route/>
        <Route path="/" element={<Home handleLogin={handleLogin} userData={userData} username={userName} password={password} loggedIn={loggedIn} />} /> 
        <Route path="/listings" element={<Listings listings={listings}/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/profile" element={<Profile userData={userData} />} />
        <Route path="/listings/:id" element={<DetailCard />}
      </Routes>

      
    </div>
  );
}

export default App;
