import React from "react";
// import "../assets/style/works.scss"
import {Row, Col} from "antd"
import LW from "../assets/images/LW.png"

const Works = () => {
    return(
        <div className="works-wrapper">
            <h1 className="alfa">My Works</h1>
            <Row>
                <Col flex="50%">
                    <h2>Code</h2>
                </Col>
                <Col flex="50%">
                    <h2>Illustration</h2>
                    <div className="illustration-img">
                        <img src={LW} style={{width:"100%"}} alt="LW" />
                    </div>
                    {/*pake modal isinya traditional illustration & digital illustration*/}
                </Col>
            </Row>
        </div>
    )
}
export default Works;