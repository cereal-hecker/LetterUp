<<<<<<< HEAD
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState({});
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
=======
import { useState } from 'react'
import Login from './assets/login'

import './App.css'

function App() {
  
  return (
    <Login/>
  )
>>>>>>> 848c9be58c8d9423fcb6a9f9acd09f0af04d706c
}

export default App;
