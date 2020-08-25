import React from "react"
import {Link} from "react-router-dom"
import { Link as Scrollink } from "react-scroll"
import {Row, Col} from "antd"
import Slide from 'react-reveal/Slide'
import {BackTop} from "antd"
import {ArrowDownOutlined, ArrowUpOutlined, ArrowRightOutlined} from "@ant-design/icons"
import "../assets/style/webapp.scss"

const MovieReview = () => {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#5e7361',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };
    return(
        <div className="webapp-wrapper">
            <div className="webapp-head-wrapper">
                <Row className="home-wrapper">
                    <Link to="/"><h2 className="home">HOME</h2></Link>
                </Row>       
                <Row style={{placeContent:"center"}}>
                    <Slide right>
                        <h3 className="greeting">MOVIE REVIEW</h3>
                        <Row className="project-link">
                            <a href="https://netflix-moviereview.netlify.app/" target="_blank" rel="noopener noreferrer"><p>Live Website</p></a>
                            <p>|</p>
                            <a href="https://gitlab.com/ditcu-code/ga-movieapps" target="_blank" rel="noopener noreferrer"><p>Repo</p></a>
                        </Row>
                    </Slide>
                </Row>
                <Scrollink activeClass="active" spy={true} smooth={true} offset={-0}duration={1500} to="movie-review-desc">
                    <ArrowDownOutlined style={{fontSize:"6rem", color:"#5e7361", marginTop:"10%"}}/>
                </Scrollink>
                <Row className="next-project" style={{placeContent:"flex-start"}}>
                    <Col>
                        <Link to="/sayembara">
                            <p style={{marginRight:".5rem"}}> {'< '} </p>
                        </Link>
                    </Col>
                    <Col>
                       <Link to="/sayembara"><p>Sayembara </p></Link> 
                    </Col>
                </Row>
            </div>
            <Row id="movie-review-desc" className="webapp-desc">
                <Col className="enQBMk hHIFHN" style={{opacity: "1", transform: "translateY(0px)"}}>
                    <Slide left>
                        <div className="Intro__Container-dz0jgw-0 cHsHHK">
                            <h1 className="Intro__IntroTitle-dz0jgw-1 jVDMgO">Netflix Movie Review</h1>
                            <p className="Intro__IntroDescription-dz0jgw-2 ihmbTr">
                                Netflix movie review was made during the time I first learn using ReactJS.
                    This webapp is a movie database intended for user to see each movie's trailer and synopsis
                    as well as leave review as a member. It is fully integrated with API.
                            </p>
                        </div>
                    </Slide>
                </Col>
            </Row>
            <div style={{backgroundColor:"#5e7361"}}>
                <Row style={{placeContent:"center"}}>
                    <Col span={10} style={{marginTop:"6%"}}>
                        <img src={require("../assets/images/movie-review.jpg")} alt="contests" style={{width:"100%"}}/>
                    </Col>
                    <Col span={10} style={{marginLeft:"3%", marginTop:"3%"}}>
                        <img src={require("../assets/images/netflix-movrev.jpg")} alt="full view" style={{width:"100%", marginBottom:"5%"}} />
                        <img src={require("../assets/images/movielist.jpg")} alt="submissions" style={{width:"100%"}} />
                    </Col>
                </Row>
            </div>
            <Row className="backhome-wrapper">
                <Link to="/">
                    <p style={{fontSize:"3rem"}}>Back to home <span><ArrowRightOutlined/></span></p>
                </Link>
            </Row>
            <BackTop>
                <div style={style}><ArrowUpOutlined/></div>
            </BackTop>
        </div>
    )
}

export default MovieReview;