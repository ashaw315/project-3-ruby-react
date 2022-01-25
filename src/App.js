import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((r) => r.json())
      .then((userData) => setUserData(userData))
  },[])

  function handleLogin(name, password, status){
    setUserName(name)
    setLoggedIn(status)
    setPassword(password)
  }

  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route/>
        <Route path="/" element={
        <Home handleLogin={handleLogin} userData={userData} />} /> 
        <Route path="/listings" element={<Listings />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      
    </div>
  );
}

export default App;
