import React from "react";
import {Row, Col} from "antd"
import "../assets/style/about.scss"

const About = () => {
    return(
        <div className="main-wrapper">
            <Row className="content-wrapper">
                <Col flex="auto">
                    <h2 className="alfa">About Me</h2>
                </Col>
                <Col flex="30%" className="col-right">
                    <h3 className="subtitle">Education</h3>
                    <p>Glints Academy</p>
                    <p>Chinese Language Center of National Chengchi University</p>
                    <p>Universitas Indonesia</p>
                    <h3 className="subtitle">Experience</h3>
                    <p>Management Trainee</p>
                    <p>PT Haidilao Indonesia Restaurants</p>
                    <h3 className="subtitle">Languages</h3>
                    <p>Bahasa Indonesia (native)</p>
                    <p>English (advanced)</p>
                    <p>Chinese Mandarin (intermediate)</p>
                </Col>
                <Col flex="30%">
                    <h3 className="subtitle">Skills</h3>
                    <h3 className="subtitle">Interests</h3>
                </Col>
            </Row>
        </div>
    )
}

export default About;