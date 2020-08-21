import React, {Fragment, useState} from "react";
import {Row, Col, Button, BackTop, Drawer, Modal, Carousel} from "antd";
import {Link} from "react-router-dom"
import {InstagramOutlined, LinkedinOutlined, GithubFilled, BehanceOutlined, ArrowUpOutlined, CopyrightCircleOutlined} from "@ant-design/icons"
import art from "../assets/images/art.svg"
import webdev from "../assets/images/webdev.svg"
import "../assets/style/home.scss"
// import winners from "../assets/images/winners.svg"
import symbr from "../assets/images/symbr.png"
import hiccup from "../assets/images/hiccup.png"
import LW from "../assets/images/LW.png"
import hwayugi from "../assets/images/hwayugi.png"
import jasmine from "../assets/images/jasmine.png"

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


    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
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
                    <h2 onClick={showDrawer} className="menu">
                        MENU
                    </h2>
                    <Drawer
                        placement="right"
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                    >
                        <p style={{padding:"1rem"}}><a href="#home">Home</a></p>
                        <p style={{padding:"1rem"}}><a href="#about">About</a></p>
                        <p style={{padding:"1rem"}}><a href="#works">Works</a></p>
                        <p style={{padding:"1rem"}}><a href="#contact">Contact</a></p>
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
                        <a href="https://www.instagram.com/meowdynasty" rel="noopener noreferrer" target="_blank">
                            <InstagramOutlined className="socmed-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/prada-ayu-nurani-ani-3a7830121/" rel="noopener noreferrer" target="_blank">
                            <LinkedinOutlined className="socmed-icon"/>
                        </a>
                        <a href="https://www.github.com/pradaayu" rel="noopener noreferrer" target="_blank">
                            <GithubFilled className="socmed-icon"/>
                        </a>
                        <a href="https://www.behance.net/pradaayu" rel="noopener noreferrer" target="_blank">
                            <BehanceOutlined className="socmed-icon"/>
                        </a>
                    </Row>
                </div>
                 <div id="about" className="about-wrapper">
                    <Row className="content-wrapper">
                        <Col flex="50%" style={{paddingRight:"5%"}}>
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
                                <p className="skill-item">Web Design</p> 
                                <p className="skill-item">HTML/CSS/JS</p> 
                                <p className="skill-item">ReactJS</p> 
                                <p className="skill-item">SASS</p> 
                                <p className="skill-item">Redux</p> 
                            </Row>
                            <Row style={{placeContent:"center"}}>
                                <p className="skill-item">Git</p> 
                                <p className="skill-item">Figma</p>
                                <p className="skill-item">Adobe Photoshop</p> 
                                <p className="skill-item">Paint Tool SAI</p> 
                                <p className="skill-item">Hand sketching</p> 
                                <p className="skill-item">Watercolor</p> 
                            </Row>
                            <h3 className="subtitle" style={{marginTop:"1rem"}}>Languages</h3>
                            <p>Bahasa Indonesia (native)</p>
                            <p>English (advanced)</p>
                            <p>Chinese Mandarin (intermediate)</p>
                        </Col>
                        <Col flex="25%" className="col-left">
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
                        <Col flex="25%" className="col-right" >
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
                    <Row className="works-content-wrapper">
                        <Col flex="50%">
                            <h2>Web</h2>
                            <p>I design and code websites.</p>
                            <div className="illustration-img">
                                <img src={webdev} style={{width:"100%", cursor:"pointer"}} alt="dev" onClick={() => setShowModal1(true)}/>
                            </div>
                        </Col>
                        <Col flex="50%" className="illustration-wrapper">
                            <h2>Artworks</h2>
                            <p>Collection of artwork illustration.</p>
                            <div className="illustration-img">
                                <img src={art} style={{width:"100%", cursor:"pointer"}} alt="LW" onClick={() => setShowModal2(true)} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="contact" className="contact-wrapper">
                    <h2 className="title">FIND ME</h2>
                    <Row className="contact-logo-wrapper">
                        <a href="https://www.instagram.com/meowdynasty" rel="noopener noreferrer" target="_blank">
                            <InstagramOutlined className="contact-logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/prada-ayu-nurani-ani-3a7830121/" rel="noopener noreferrer" target="_blank">
                            <LinkedinOutlined className="contact-logo"/>
                        </a>
                        <a href="https://www.github.com/pradaayu" rel="noopener noreferrer" target="_blank">
                            <GithubFilled className="contact-logo"/>
                        </a>
                        <a href="https://www.behance.net/pradaayu" rel="noopener noreferrer" target="_blank">
                            <BehanceOutlined className="contact-logo"/>
                        </a>
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
                className= "modal-web"
                visible={showModal1}
                onOk={() => setShowModal1(false)}
                onCancel={()=>setShowModal1(false)}
                footer={null}
                width='100%'
            >
                <Carousel>
                    <div>
                        <img src={symbr} alt="" style={{width:"100%"}} />
                        <Link to="/sayembara"><Button>View Project</Button></Link>
                    </div>
                    <div>

                    </div>
                </Carousel>
            </Modal>
            <Modal
                className= "modal-web"
                visible={showModal2}
                onOk={() => setShowModal2(false)}
                onCancel={()=>setShowModal2(false)}
                footer={null}
                width='100%'
            >
                <Carousel style={{height:"70%"}}>
                    <div className="carousel-card-1">
                        <img src={hiccup} alt="" style={{width:"100%"}} />
                    </div>
                    <div className="carousel-card-2">
                        <img src={LW} alt="" style={{width:"100%"}} />
                    </div>
                    <div className="carousel-card-3">
                        <img src={hwayugi} alt="" style={{width:"100%"}} />
                    </div>
                    <div className="carousel-card-4">
                        <img src={jasmine} alt="" style={{width:"100%"}} />
                    </div>
                </Carousel>
                <a><Button>More Artworks</Button></a>
            </Modal>
        </Fragment>
    )
}
export default Home;