import React from "react";
import {Link} from "react-router-dom";
// import { Link as Scrollink } from "react-scroll"
// import {ArrowRightOutlined, ArrowDownOutlined} from  "@ant-design/icons";
import "../assets/style/artworks.scss"

const Artworks = () => {
    return(
        <div className="artwork-wrapper">
            <div className="set-height-wrapper">
            <div className="flex justify-center p-4">
                {
                    <Link to="/">
                         <h2 className="text-2xl font-bold hover:underline">HOME</h2>
                    </Link>
                }
</div>

<div className="text-center p-6">
    <h1 className="text-4xl font-bold">Artwork & Studies</h1>
    <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
        A small collection of artworks, some of them are illustration requests.
        I have a manga-esque art style in general, but since I am still 
        experimenting with techniques, it may look like I never commit to 
        just one style. For traditional works, I mainly work with watercolor, 
        while for digital work, I use Paint Tool SAI and Adobe Photoshop.
    </p>
</div>
{/*
    <Scrollink 
        className="flex justify-center mt-6 cursor-pointer animate-bounce" 
        activeClass="active" spy={true} smooth={true} offset={-0} duration={1500} to="gallery"
    >
        <ArrowDownOutlined className="text-3xl" />
    </Scrollink>
*/}

<div id="gallery" className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-6">
    <img src={require("../assets/images/nonamanis.png")} alt="art" className="w-full max-w-sm rounded-lg shadow-lg" />
    <img src={require("../assets/images/luke copy.png")} alt="art" className="w-full max-w-sm rounded-lg shadow-lg" />
    <img src={require("../assets/images/LW.png")} alt="art" className="w-full max-w-xs rounded-lg shadow-lg" />
    <img src={require("../assets/images/matilda.png")} alt="art" className="w-full max-w-xs rounded-lg shadow-lg" />
    <img src={require("../assets/images/hwayugi.png")} alt="art" className="w-full max-w-sm rounded-lg shadow-lg" />
    <img src={require("../assets/images/hiccup.png")} alt="art" className="w-full max-w-md rounded-lg shadow-lg" />
    <img src={require("../assets/images/jasmine.png")} alt="art" className="w-full max-w-md rounded-lg shadow-lg" />
</div>

<div className="flex justify-center mt-8">
    {
    <Link to="/" className="flex items-center text-lg font-semibold hover:underline">
        Back to home
    </Link>
    }
</div>
            </div>
        </div>
    )
}

export default Artworks;