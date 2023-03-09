import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import IshipPage from "./components/IshipPage";
import Navbar from "./components/Navbar";
import PlacementsPage from "./components/PlacementsPage";
import LOR from "./components/LOR";

function App() {
  const [data, setData] = useState({});
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/IshipPage" element={<IshipPage />} />
          <Route path="/PlacementsPage" element={<PlacementsPage />} />
          <Route path="/LOR" element={<LOR />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
