import React from "react"
import {Breadcrumb, Row} from "antd"
import {MenuOutlined} from "@ant-design/icons"

const Header = () => {
    return(
        <div>
            {/* <Breadcrumb>
                <Breadcrumb.Item>
                    <p>Home</p>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <p>About</p>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <p>Works</p>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <p>Resume</p>
                </Breadcrumb.Item>
            </Breadcrumb> */}
            <Row style={{placeContent:"flex-end"}}>
                {/* <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        About
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Works
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Resume</Breadcrumb.Item>
                </Breadcrumb> */}
                {/* <p>Prada Ayu Nurani</p>
                <p>|</p>
                <p>I like design and coding</p> */}
                <MenuOutlined style={{color:"#5e7361", fontSize:"2rem", padding:"1rem"}}/>
            </Row>
        </div>
    )
}
export default Header;