import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CalendarComp from './components/CalendarComp';
import Chat from './components/Chat';
import Home from './components/Home';
import Listings from './components/Listings';
import DetailCard from './components/DetailCard';
import './App.css';



function App() {
  const [listings, setListings] = useState([])
  const [eventItems, setEventItems] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:9292/users')
  //     .then((r) => r.json())
  //     .then((userData) => setUserData(userData))
  // },[])

  useEffect(() => {
    fetch('http://localhost:9292/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  },[])

  const events = []

//   function handleBookmarked(listings){
//     const newEvent = {
//         title: listings.job_title,
//         allDay: true,
//         start: new Date(listings.start_date),
//         end: null
//     }
//     return ([...events, newEvent])
// }

const onAdd = (listings) => {
  const exist = eventItems.find((x) => x.id === listings.id);
  if (exist) {
    setEventItems(
      eventItems.map((x) =>
        x.id === listings.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setEventItems([...eventItems, { ...listings, qty: 1 }]);
  }
};
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route/>
        <Route path="/" element={<Home />} /> 
        <Route path="/listings" element={<Listings listings={listings} onAdd={onAdd}/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<CalendarComp eventItems={eventItems} onAdd={onAdd}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings/:id" element={<DetailCard />} />
      </Routes>
    </div>
  );
}



export default App;
