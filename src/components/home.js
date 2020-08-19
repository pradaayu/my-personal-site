import React, {Fragment, useState} from "react";
import {Row, Col, Button, BackTop, Drawer, Modal} from "antd";
import {InstagramOutlined, LinkedinOutlined, GithubFilled, BehanceOutlined, ArrowUpOutlined, CopyrightCircleOutlined} from "@ant-design/icons"
import foliage from "../assets/images/jungle foliage.png"
import art from "../assets/images/art.svg"
import webdev from "../assets/images/webdev.svg"
import "../assets/style/home.scss"

const Home = () => {
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

    const [showModal, setShowModal] = useState(false)
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <Fragment>
            <div className="put-middle">
                <Row className="navbar" style={{placeContent:"flex-end", textAlign:"right"}}>
                    <Button type="primary" onClick={showDrawer}>
                        Menu
                    </Button>
                    <Drawer
                        placement="right"
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                    >
                        <p style={{padding:"1rem"}}><a href="#home">Home</a></p>
                        <p style={{padding:"1rem"}}><a href="#about">About</a></p>
                        <p style={{padding:"1rem"}}><a href="#works">Works</a></p>
                        <p style={{padding:"1rem"}}>Contact</p>
                    </Drawer>
                </Row>
                <div id="home" className="home-wrapper">
                     <Col flex="auto">   
                        {/* <h3 className="alfa">Hi,</h3> */}
                        <h3 className="greeting">HELLO, I'M ANI.</h3>
                        <p className="synopsis">I'm a junior front-end web developer with background in Chinese Studies. I love drawing, traveling, plants, and cats.</p>
                        
                        <Button className="cv-btn"><a href="https://drive.google.com/file/d/13MkvuyWFpxxsW27SmLbvBUZeqRUGr1Xy/view?usp=sharing" rel="noopener noreferrer" target="_blank">Download CV</a></Button>
                        
                    </Col>
                    {/* <Col flex="50%">
                        <img style={{width:"40%"}} src={photo} alt="ani" />
                    </Col> */}
                    <Row className="socmed-icon-wrapper">
                        <InstagramOutlined className="socmed-icon"/>
                        <LinkedinOutlined className="socmed-icon"/>
                        <GithubFilled className="socmed-icon"/>
                        <BehanceOutlined className="socmed-icon"/>
                    </Row>
                </div>
                <div className="foliage-wrapper">
                    <img className="foliage" src={foliage} alt=""/> 
                </div>
                 <div id="about" className="about-wrapper">
                    <Row className="content-wrapper">
                        <Col flex="50%" style={{paddingRight:"5rem"}}>
                            <h2 className="title">PRADA AYU NURANI</h2>
                            <p>
                                Hello, my name is Prada Ayu Nurani but you can call me Ani.
                                I am a beginner in front-end web developer and enjoy browsing through beautiful web design.
                            </p>
                            <p>I learn about web engineering through Glints Academy, 
                                a bootcamp specialized for those who wish to learn about web development.
                                There, I chose to learn about front-end because I am interested in design interface.
                            </p>
                            <p>
                                I graduated from Universitas Indonesia majoring in Chinese Studies. 
                                I have several experience working and living in a Chinese-speaking environment, 
                                and would like to integrate this skill with web-development skills someday.
                            </p>
                            <h3 className="subtitle" style={{marginTop:"1rem"}}>Skills</h3>
                            <Row style={{placeContent:"center"}}>
                                <p className="skill-item">Web Design</p> <p className="skill-item">HTML/CSS/JS</p> <p className="skill-item">ReactJS</p> <p className="skill-item">SASS</p> <p className="skill-item">Redux</p> 
                            </Row>
                            <Row style={{placeContent:"center"}}>
                                <p className="skill-item">Git</p> <p className="skill-item">Adobe Photoshop</p> <p className="skill-item">Paint Tool SAI</p> <p className="skill-item">Hand sketching</p> <p className="skill-item">Watercolor</p> <p className="skill-item">Chinese Mandarin</p>
                            </Row>
                            <h3 className="subtitle" style={{marginTop:"1rem"}}>Languages</h3>
                            <p>Bahasa Indonesia (native)</p>
                            <p>English (advanced)</p>
                            <p>Chinese Mandarin (intermediate)</p>
                        </Col>
                        <Col flex="25%" className="col-left" style={{textAlign:"left"}}>
                            <h3 className="subtitle">Education</h3>
                            
                            <div className="resume-item">
                                <p className="year">April 2020 - August 2020</p>
                                <p className="role">Frontend Web Development</p>
                                <p className="institution">Glints Academy</p>
                            </div>
                            
                            <div className="resume-item">
                                <p className="year">September 2018 - May 2019</p>
                                <p className="role">Chinese Mandarin Course</p>
                                <p >Chinese Language Center of National Chengchi University</p>
                            </div>

                            <div className="resume-item">
                                <p className="year">August 2014 - August 2018</p>
                                <p className="role">Bachelor Degree of Chinese Studies</p>
                                <p>Universitas Indonesia</p>
                            </div>
                        </Col>
                        <Col flex="25%" className="col-right" style={{textAlign:"left"}}>
                            <h3 className="subtitle">Experience</h3>
                            <div className="resume-item">
                                <p className="year">July 2019 - November 2019</p>
                                <p className="role">Management Trainee</p>
                                <p>PT Haidilao Indonesia Restaurants</p>
                                <p style={{wordWrap:"break-word"}}>
                                    As a Management Trainee, I am in charge of the service division of the outlet 
                                    as well as making sure the communication between Chinese employees and local employees goes well.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="works" className="works-wrapper">
                    <h2 className="title">MY WORKS</h2>
                    <Row>
                        <Col flex="50%">
                            <h2>Web</h2>
                            <p>I design and code websites.</p>
                            <div className="illustration-img">
                                <img src={webdev} style={{width:"100%", cursor:"pointer"}} alt="dev" onClick={() => setShowModal(true)}/>
                            </div>
                        </Col>
                        <Col flex="50%">
                            <h2>Artworks</h2>
                            <p>Collection of artwork illustration.</p>
                            <div className="illustration-img">
                                <img src={art} style={{width:"100%"}} alt="LW" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="contact-wrapper">
                    <h2 className="title">FIND ME</h2>
                    <Row style={{placeContent:"center"}}>
                        <InstagramOutlined style={{fontSize:"5rem", padding:"2rem"}}/>
                        <LinkedinOutlined style={{fontSize:"5rem", padding:"2rem"}}/>
                        <GithubFilled style={{fontSize:"5rem", padding:"2rem"}}/>
                        <BehanceOutlined style={{fontSize:"5rem", padding:"2rem"}}/>
                    </Row>
                    <Row style={{placeContent:"center", marginBottom:"0"}}>
                        <p><span><CopyrightCircleOutlined/></span> 2020 Prada Ayu Nurani</p>
                    </Row>
                </div>
                <BackTop>
                    <div style={style}><ArrowUpOutlined/></div>
                </BackTop>
            </div>
            <Modal
                visible={showModal}
                onOk={() => setShowModal(false)}
                onCancel={()=>setShowModal(false)}
                footer={null}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Fragment>
    )
}
export default Home;