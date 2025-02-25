import React from "react"
import {NavLink, HashRouter} from "react-router-dom"

const Header = () => {
    return(
        <HashRouter>
            <div>
                <div style={{display:"flex",placeContent:"flex-end"}}>
                    {/* <Dropdown overlay={menu} trigger={['click']} onClick={e => e.preventDefault()}>
                        <MenuOutlined style={{color:"#5e7361", fontSize:"2rem", padding:"1rem"}}/>
                    </Dropdown> */}
                    <p style={{padding:"1rem"}}><NavLink to="/">Home</NavLink></p>
                    <p style={{padding:"1rem"}}><NavLink to="/about">About</NavLink></p>
                    <p style={{padding:"1rem"}}><NavLink to="/works">Works</NavLink></p>
                    <p style={{padding:"1rem"}}>Contact</p>
                </div>
            </div>
        </HashRouter>
    )
}
export default Header;