import React from "react";
import Header from "../components/header"
import Home from "../components/home";
import About from "../components/about";
import Works from "../components/works";

const HomePage = () => {
    return(
        <React.Fragment>
            <Header/>
            <Home/>
            <About/>
            <Works/>
        </React.Fragment>
    )
}

export default HomePage;