import React, {useState} from "react";
import {Link} from "react-router-dom"
import { Link as Scrollink } from "react-scroll"
import {Row, Col, Modal, BackTop} from "antd"
import {ArrowDownOutlined, ArrowRightOutlined, ArrowUpOutlined} from "@ant-design/icons"
import Slide from 'react-reveal/Slide';
import "../assets/style/webapp.scss"

const Sayembara = () => {
    const [visible, setVisible] = useState(false)
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
        <div className="webapp-wrapper" >
            <div className="webapp-head-wrapper">
                <Row  className="home-wrapper" style={{placeContent:"flex-end"}}>
                    <Link to="/"><h2 className="home">HOME</h2></Link>
                </Row>
                <Row style={{placeContent:"center"}}>
                    <Slide left>
                        <h3 className="greeting greeting-symbr">SAYEMBARA</h3>
                        <Row className="project-link">
                            <a href="http://sayembara-ga6.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Live Website</p></a>
                            <p>|</p>
                            <a href="https://gitlab.com/glints-academy-6/team-e/front-end" target="_blank" rel="noopener noreferrer"><p>Repo</p></a>
                            <p>|</p>
                            <p onClick={() => setVisible(true)}>Demo Video</p>
                        </Row>
                    </Slide>
                </Row>
                <Scrollink style={{marginTop:"10%"}} activeClass="active" spy={true} smooth={true} offset={-0}duration={1500} to="sayembara-desc">
                    <ArrowDownOutlined style={{fontSize:"6rem", color:"#5e7361", marginTop:"10%"}} />
                </Scrollink>
                <Row className="next-project" style={{placeContent:"flex-end"}}>
                    <Col> <Link to="/netflix-movie-review"><p>Netflix movie review </p></Link></Col>
                    <Col>
                        <Link to="/netflix-movie-review">
                            <p style={{marginLeft:".5rem"}}> {'>'} </p>
                        </Link>
                    </Col>
                </Row>
            </div>
            <Row id="sayembara-desc" className="webapp-desc"> 
                <Col className="enQBMk hHIFHN" style={{opacity: "1", transform: "translateY(0px)"}}>
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
            </Row>
            <div style={{backgroundColor:"#5e7361"}}>
                <Row className="project-img-wrapper">
                    <Col className="project-img project-img-top" span={10}>
                        <img src={require("../assets/images/sayembara-LP.jpg")} alt="full view" style={{width:"100%"}} />
                    </Col>
                    <Col className="project-img project-img-bottom" span={10} >
                        <img className="img-top" src={require("../assets/images/symbr-contest.jpg")} alt="contests" style={{width:"100%"}}/>
                        <img src={require("../assets/images/symbr-submission.jpg")} alt="submissions" style={{width:"100%"}} />
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
            <Modal
                className= "modal-web"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={()=>setVisible(false)}
                footer={null}
                width='100%'
            >
                <iframe width="100%" height="100%" className="iframe" title="symbr" src="https://www.youtube.com/embed/xCECMFUDp70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
        </div>
    )
}

export default Sayembara;