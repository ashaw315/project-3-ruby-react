import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CalendarComp from './components/CalendarComp';
import Apply from './components/Apply';
import Home from './components/Home';
import Listings from './components/Listings';
import DetailCard from './components/DetailCard';
import UserCard from './components/UserCard';
import './App.css';



function App() {
  const [listings, setListings] = useState([])
  const [eventItems, setEventItems] = useState([])

  // *** Get Listings ***
  useEffect(() => {
    fetch('http://localhost:9292/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  },[])

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
  alert("Added to Calendar!")
};
  
  return (
    <div className="App">
      <h1 className='header-title'>HANDLED</h1>
      <Navbar/>
      <Routes>
        <Route/>
        <Route path="/users/:id" element={<UserCard />} />
        <Route path="/listings/:id" element={<DetailCard listings={listings}/>} />
        <Route path="/" element={<Home />} /> 
        <Route path="/listings" element={<Listings listings={listings} onAdd={onAdd}/>} />
        <Route path="/apply" element={<Apply listings={listings}/>} />
        <Route path="/calendar" element={<CalendarComp eventItems={eventItems} onAdd={onAdd}/>} />
      </Routes>
    </div>
  );
}



export default App;
