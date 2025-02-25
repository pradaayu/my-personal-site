import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import MovieReview from "./components/netflix";
import Sayembara from "./components/sayembara";
import Artworks from "./components/artworks"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sayembara" element={<Sayembara />} />
          <Route path="/netflix-movie-review" element={<MovieReview />} />
          <Route path="/artworks" element={<Artworks />} />
      </Routes>
    </div>
  );
}

export default App;
