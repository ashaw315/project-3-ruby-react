import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Home from './components/Home';
import Listings from './components/Listings';
import DetailCard from './components/DetailCard';
import UserCard from './components/UserCard';
import './App.css';


function App() {
  const [listings, setListings] = useState([])
 

  // useEffect(() => {
  //   fetch('http://localhost:9292/users')
  //     .then((r) => r.json())
  //     .then((userData) => setUserData(userData))
  // },[])

  // *** Get Listings ***
  useEffect(() => {
    fetch('http://localhost:9292/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  },[])

  // *** Post New Listing ***

//   const postListing = (listing) => {
//     fetch('http://localhost:9292/listings', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(listing)
//     })
//     .then(r => r.json())
//     .then(newListing => {
//         setListings([newListing,...listings])
//     })
// }

  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route/>
        <Route path="/users/:id" element={<UserCard />} />
        <Route path="/listings/:id" element={<DetailCard listings={listings}/>} />
        <Route path="/" element={<Home />} /> 
        <Route path="/listings" element={<Listings listings={listings}/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}



export default App;
