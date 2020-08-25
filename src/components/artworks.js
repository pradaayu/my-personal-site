import React from "react";
import {Row, Col} from "antd";
import {Link} from "react-router-dom";
import { Link as Scrollink } from "react-scroll"
import {ArrowRightOutlined, ArrowDownOutlined} from  "@ant-design/icons";
import "../assets/style/artworks.scss"

const Artworks = () => {
    return(
        <div className="artwork-wrapper">
            <div className="set-height-wrapper">
                <Row className="home-wrapper">
                    <Link to="/"><h2 className="home">HOME</h2></Link>
                </Row>
                <div className="artwork-intro-wrapper">
                    <h1>Artwork & Studies</h1>
                    <p className="synopsis">A small collection of artworks, some of them are illustration requests.
                        I have a manga-esque art style in general, 
                        but since I am still experimenting with techniques, 
                        it may look like that I never commit to just one style.
                        For traditional works, I mainly work with watercolor, while for digital work,
                        I use Paint Tool SAI and Adobe Photoshop.
                    </p>
                </div>
                <Scrollink className="arrow-style" activeClass="active" spy={true} smooth={true} offset={-0}duration={1500} to="gallery">
                    <ArrowDownOutlined className="down" />
                </Scrollink>
            </div>
            <Row id="gallery" style={{placeContent:"center"}}>
                <Col span={10} className="wrap">
                     <img src={require("../assets/images/nonamanis.png")} alt="art"/>
                </Col>
                <Col span={10} className="wrap">
                    <img src={require("../assets/images/luke copy.png")} alt="art" />
                </Col>
                <Col span={6} className="wrap" style={{marginRight:"2%"}}>
                    <img src={require("../assets/images/LW.png")} alt="art" />
                </Col>
                <Col span={6} className="wrap">
                    <img src={require("../assets/images/matilda.png")} alt="art" />
                </Col>
                <Col span={8} className="wrap">
                    <img src={require("../assets/images/hwayugi.png")} alt="art" />
                </Col>
                <Col span={12} className="wrap">
                    <img src={require("../assets/images/hiccup.png")} alt="art" />
                </Col>
                <Col span={12} className="wrap">
                    <img src={require("../assets/images/jasmine.png")} alt="art" />
                </Col>

            </Row>
            <Row className="backhome-wrapper">
                <Link to="/">
                    <p>Back to home <span><ArrowRightOutlined/></span></p>
                </Link>
            </Row>
        </div>
    )
}

export default Artworks;