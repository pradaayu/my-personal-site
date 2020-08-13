import React from "react"
import {Breadcrumb, Row} from "antd"

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
            <Row style={{placeContent:"space-evenly"}}>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        About
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Works
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Resume</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        </div>
    )
}
export default Header;