import React from "react";
import {Link} from "react-router-dom"
import {Row, Col} from "antd"
import {ArrowDownOutlined} from "@ant-design/icons"
import "../assets/style/webapp.scss"

const Sayembara = () => {
    const style = { background: '#0092ff', padding: '8px 0' };
    return(
        <div className="webapp-wrapper">
            <div className="webapp-head-wrapper">
                <Row style={{placeContent:"flex-end"}}>
                    <Link to="/"><p>HOME</p></Link>
                </Row>
                
                <Row style={{placeContent:"center"}}>
                    <h3 className="greeting">SAYEMBARA</h3>
                </Row>
                <a style={{marginTop:"10%"}} href="#sayembara-desc"><ArrowDownOutlined style={{fontSize:"6rem", color:"#5e7361", marginTop:"10%"}} /></a>
                <Row style={{placeContent:"flex-end", padding:"1rem"}}>
                    <p>Netflix movie review </p>
                    <Link to="/netflix-movie-review"><p style={{marginLeft:".5rem"}}> {'>'} </p></Link>
                </Row>
            </div>
            <div id="sayembara-desc" className="webapp-desc">
                {/* <Row>
                    <Col span={"12"}>
                        <h1>SAYEMBARA</h1>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col flex={"50%"}>
                        <p>
                            Sayembara is a platform that brings together clients and graphic designers.
                            With this Webapp, two types of user can interact and benefit from each other:
                            provider can create design contests and choose their ideal design,
                            while participant can participate in the contest and get reward if 
                            their work is chosen as the winner.
                        </p>
                    </Col>
                </Row> */}
                <div className="enQBMk hHIFHN" style={{opacity: "1", transform: "translateY(0px)"}}>
                    <div className="Intro__Container-dz0jgw-0 cHsHHK">
                        <h1 className="Intro__IntroTitle-dz0jgw-1 jVDMgO">SAYEMBARA</h1>
                        <p className="Intro__IntroDescription-dz0jgw-2 ihmbTr">
                            Sayembara is a study project designed to bring together graphic designers and clients. With this Webapp, 
                            users can create graphic design contest (as a provider) or participant in a contest (as a participant).<br/>
                            <br/>It thus allows participants to benefit from an additional source of income by 
                            winning the contest, and allows providers to benefit by saving budgets to hire designers.<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#5e7361", padding:"5%"}}>
                 <img src={require("../assets/images/symbr.png")} alt="" style={{width:"100%"}} />
            </div>
        </div>
    )
}

export default Sayembara;