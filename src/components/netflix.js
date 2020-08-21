import React from "react"
import {Link} from "react-router-dom"
import {Row, Col} from "antd"
import {ArrowLeftOutlined} from "@ant-design/icons"
import {ArrowDownOutlined} from "@ant-design/icons"
import "../assets/style/webapp.scss"

const MovieReview = () => {
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
                        <h3 className="greeting">MOVIE REVIEW</h3>
                    </Col>
                    <Col flex="5%">
                        <Link to="/sayembara"> <p className="greeting"> {'>'} </p> </Link>
                    </Col>
                </Row>
                <a href="#sayembara-desc"><ArrowDownOutlined/></a>
            </div>
            <div id="movie-review-desc">
                <h1>Netflix Movie Review</h1>
                <p style={{paddingLeft:"25%", paddingRight:"25%"}}>
                    Netflix movie review was made during the time I first learn using ReactJS.
                    This webapp is a movie database intended for user to see each movie's trailer and synopsis
                    as well as leave review as a member. It is fully integrated with API.
                </p>
            </div>
            <div>
                 <img src={require("../assets/images/netflix.png")} alt="" style={{width:"100%"}} />
            </div>
        </div>
    )
}

export default MovieReview;