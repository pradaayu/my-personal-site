import React from "react"
import {Row,} from "antd"
import {NavLink, HashRouter} from "react-router-dom"
// import {MenuOutlined} from "@ant-design/icons"
// import home from "./home"
// import about from "./about"
// import works from "./works"

const Header = () => {

    // const menu = (
    // <Menu>
    //     <Menu.Item key="0">
    //         <a href="./home" >HOME</a>
    //     </Menu.Item>
    //     <Menu.Item key="1">
    //         <a href="./about">ABOUT</a>
    //     </Menu.Item>
    //     <Menu.Item key="3">
    //         <a href={works}>WORKS</a>
    //     </Menu.Item>
    //     <Menu.Item key="4">CONTACT</Menu.Item>
    // </Menu>
    // );

    return(
        <HashRouter>
            <div>
                <Row style={{placeContent:"flex-end"}}>
                    {/* <Dropdown overlay={menu} trigger={['click']} onClick={e => e.preventDefault()}>
                        <MenuOutlined style={{color:"#5e7361", fontSize:"2rem", padding:"1rem"}}/>
                    </Dropdown> */}
                    <p style={{padding:"1rem"}}><NavLink to="/">Home</NavLink></p>
                    <p style={{padding:"1rem"}}><NavLink to="/about">About</NavLink></p>
                    <p style={{padding:"1rem"}}><NavLink to="/works">Works</NavLink></p>
                    <p style={{padding:"1rem"}}>Contact</p>
                </Row>
            </div>
        </HashRouter>
    )
}
export default Header;