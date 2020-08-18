import React, {Fragment} from "react";
import {Row, Col, Button} from "antd";
import Header from "./header"
import {InstagramOutlined, LinkedinOutlined, GithubFilled, BehanceOutlined} from "@ant-design/icons"
// import photo from "../assets/images/ani.jpg";
import foliage from "../assets/images/jungle foliage.png"
import "../assets/style/home.scss"

const Home = () => {
    return (
        <Fragment>
            <div className="put-middle">
                 <Header/>
                <div className="content-wrapper">
                     <Col flex="auto">   
                        {/* <h3 className="alfa">Hi,</h3> */}
                        <h3 className="greeting">HELLO, I'M ANI.</h3>
                        <p className="synopsis">I'm a junior front-end web developer with background in Chinese Studies. I love drawing, traveling, plants, and cats.</p>
                
                        {/* <p className="synopsis">
                            I've always been drawn to language, design, and illustration. 
                            I learned Mandarin during my years in university and had been on a short adventure living abroad in Taiwan and Mainland China.
                            Now I am learning to code so I can build my vision.
                        </p> */}
                        <Button>Download CV</Button>
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
            </div>
        </Fragment>
    )
}
export default Home;