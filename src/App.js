import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Routes from "./routes"
import Home from "./components/home";
import About from "./components/about";
import Works from "./components/works";

function App() {
  return (
    <div className="App">
      {/* <Routes/> */}
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/works" exact component={Works} />
      </Switch>
    </div>
  );
}

export default App;
