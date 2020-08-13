import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from "./components/header"
import Home from "./components/home"
import About from "./components/about"
import Works from "./components/works"

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      <About/>
      <Works/>
    </div>
  );
}

export default App;
