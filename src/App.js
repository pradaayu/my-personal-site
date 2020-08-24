import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home";
import MovieReview from "./components/netflix";
import Sayembara from "./components/sayembara";
import Artworks from "./components/artworks"

function App() {
  return (
    <div className="App">
      {/* <Routes/> */}
      <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/sayembara" exact component={Sayembara}/>
            <Route path="/netflix-movie-review" exact component={MovieReview} />
            <Route path="/artworks" exact component={Artworks} />
      </Switch>
    </div>
  );
}

export default App;
