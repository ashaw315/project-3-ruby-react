import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Home from './components/Home';
import Listings from './components/Listings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route/>
        <Route path="/" element={<Home />} /> 
        <Route path="/listings" element={<Listings />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      
    </div>
  );
}

export default App;
