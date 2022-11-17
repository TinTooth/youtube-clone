// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import VideoPage from "./pages/VideoPage/VideoPage";

import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [search,setSearch] = useState('decorating cookies')
  


  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<SearchPage search = {search}/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:vid" element = {<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
