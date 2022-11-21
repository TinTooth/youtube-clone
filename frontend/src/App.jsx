// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState} from 'react';
import Footer from "./components/Footer/Footer";
import VideoPage from "./pages/VideoPage/VideoPage";

import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";

// Util Imports

function App() {
  const [search,setSearch] = useState('decorating cookies')
  


  return (
    <div className="page">
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<SearchPage search = {search}/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:vid" element = {<VideoPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
