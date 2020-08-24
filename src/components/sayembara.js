import React from "react";
import {Link} from "react-router-dom"
import { Link as Scrollink } from "react-scroll"
import {Row, Col, Button} from "antd"
import {ArrowDownOutlined, ArrowRightOutlined} from "@ant-design/icons"
import Slide from 'react-reveal/Slide';
import withReveal from "react-reveal/withReveal";
import "../assets/style/webapp.scss"

const Sayembara = () => {
    const style = { background: '#0092ff', padding: '8px 0' };
    
    return(
        <div className="webapp-wrapper" >
            <div className="webapp-head-wrapper">
                <Row style={{placeContent:"flex-end"}}>
                    <Link to="/"><p>HOME</p></Link>
                </Row>
                <Row style={{placeContent:"center"}}>
                    <Slide left>
                        <h3 className="greeting">SAYEMBARA</h3>
                        <Row>
                            <a href="http://sayembara-ga6.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button>Live</Button></a>
                            <a href="https://gitlab.com/glints-academy-6/team-e/front-end" target="_blank" rel="noopener noreferrer"><Button>Repo</Button></a>
                        </Row>
                    </Slide>
                </Row>
                <Scrollink style={{marginTop:"10%"}} activeClass="active" spy={true} smooth={true} offset={-0}duration={1500} to="sayembara-desc">
                    <ArrowDownOutlined style={{fontSize:"6rem", color:"#5e7361", marginTop:"10%"}} />
                </Scrollink>
                <Row style={{placeContent:"flex-end", padding:"1rem"}}>
                    <Link to="/netflix-movie-review">
                        <p>Netflix movie review </p> <p style={{marginLeft:".5rem"}}> {'>'} </p>
                    </Link>
                </Row>
            </div>
            <Row id="sayembara-desc" className="webapp-desc"> 
                <Col span={10} className="enQBMk hHIFHN" style={{opacity: "1", transform: "translateY(0px)"}}>
                    <Slide left>
                        <div className="Intro__Container-dz0jgw-0 cHsHHK">
                            <h1 className="Intro__IntroTitle-dz0jgw-1 jVDMgO">SAYEMBARA</h1>
                            <p className="Intro__IntroDescription-dz0jgw-2 ihmbTr">
                                Sayembara is a study project designed to bring together graphic designers and clients. With this Webapp, 
                                users can create graphic design contest (as a provider) or participant in a contest (as a participant).<br/>
                                <br/>It thus allows participants to benefit from an additional source of income by 
                                winning the contest, and allows providers to benefit by saving budgets to hire designers.<br/>
                            </p>
                        </div>
                    </Slide>
                </Col>
                <Col span={10}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xCECMFUDp70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            <div style={{backgroundColor:"#5e7361"}}>
                <Row style={{placeContent:"center"}}>
                    <Col span={10}>
                        <img src={require("../assets/images/sayembara-LP.jpg")} alt="full view" style={{width:"100%"}} />
                    </Col>
                    <Col span={12}>
                        <img src={require("../assets/images/symbr-contest.jpg")} alt="contests" style={{width:"100%"}}/>
                    </Col>
                    <Col span={10}>
                        <img src={require("../assets/images/symbr-submission.jpg")} alt="submissions" style={{width:"100%"}} />
                    </Col>
                </Row>
            </div>
            <Row>
                <Link to="/">
                    <p style={{fontSize:"3rem"}}>Back to home <span><ArrowRightOutlined/></span></p>
                </Link>
            </Row>
        </div>
    )
}

export default Sayembara;