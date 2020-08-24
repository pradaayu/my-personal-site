import React from "react"
import {Link} from "react-router-dom"
import { Link as Scrollink } from "react-scroll"
import {Row, Col} from "antd"
import Slide from 'react-reveal/Slide'
import Reveal from 'react-reveal/Reveal';
import {BackTop} from "antd"
import {ArrowLeftOutlined} from "@ant-design/icons"
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons"
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
                <Row style={{placeContent:"flex-end"}}>
                    <Link to="/"><p>HOME</p></Link>
                </Row>
                
                <Row style={{placeContent:"center"}}>
                    <Col flex="5%">
                        <Link to="/sayembara"> <p className="greeting"> {'<'} </p> </Link>
                    </Col>
                    <Col flex="80%">
                        <Slide right>
                            <h3 className="greeting">MOVIE REVIEW</h3>
                        </Slide>
                    </Col>
                    <Col flex="5%">
                        <Link to="/sayembara"> <p className="greeting"> {'>'} </p> </Link>
                    </Col>
                </Row>
                <Scrollink activeClass="active" spy={true} smooth={true} offset={-0}duration={1500} to="movie-review-desc"><ArrowDownOutlined/></Scrollink>
                                <Row style={{placeContent:"flex-start", padding:"1rem"}}>
                    <Link to="/sayembara">
                        <p>Sayembara </p> <p style={{marginLeft:".5rem"}}> {'<'} </p>
                    </Link>
                </Row>
            </div>
            <div id="movie-review-desc">
                <h1>Netflix Movie Review</h1>
                <p style={{paddingLeft:"25%", paddingRight:"25%"}}>
                    Netflix movie review was made during the time I first learn using ReactJS.
                    This webapp is a movie database intended for user to see each movie's trailer and synopsis
                    as well as leave review as a member. It is fully integrated with API.
                </p>
            </div>
            <div >
                <Reveal effect="fadeInUp">
                     <img src={require("../assets/images/netflix.png")} alt="" style={{width:"100%", paddingLeft:"10%", paddingRight:"10%"}} />
                </Reveal>
            </div>
            <BackTop>
                <div style={style}><ArrowUpOutlined/></div>
            </BackTop>
        </div>
    )
}

export default MovieReview;