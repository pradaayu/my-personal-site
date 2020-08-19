import React from "react";
import {Row} from "antd"
import {NavLink} from "react-router-dom";
import "./assets/style/routes.css"

function Routes() {
    return(
        <Row className="navbar">
            <p style={{padding:"1rem"}}><NavLink to="/">Home</NavLink></p>
            <p style={{padding:"1rem"}}><NavLink to="/about">About</NavLink></p>
            <p style={{padding:"1rem"}}><NavLink to="/works">Works</NavLink></p>
            <p style={{padding:"1rem"}}>Contact</p>
        </Row>
    )
}



export default Routes;