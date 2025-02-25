import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import "../assets/style/webapp.scss";

const Sayembara = () => {
    const [visible, setVisible] = useState(false);
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
        <div className="webapp-wrapper">
            {/* Navigation */}
            <div className="webapp-head-wrapper">
                <div className="home-wrapper" style={{ textAlign: "right" }}>
                    <Link to="/">
                        <h2 className="home">HOME</h2>
                    </Link>
                </div>

                {/* Header */}
                <div style={{ textAlign: "center" }}>
                    <motion.h3 
                        className="greeting greeting-symbr"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        SAYEMBARA
                    </motion.h3>

                    {/* Project Links */}
                    <motion.div 
                        className="project-link"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a href="http://sayembara-ga6.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <p>Live Website</p>
                        </a>
                        <p>|</p>
                        <a href="https://gitlab.com/glints-academy-6/team-e/front-end" target="_blank" rel="noopener noreferrer">
                            <p>Repo</p>
                        </a>
                        <p>|</p>
                        <p onClick={() => setVisible(true)}>Demo Video</p>
                    </motion.div>
                </div>
                <div>
                    {/* Smooth Scroll without react-scroll */}
                    <button onClick={() => scrollToSection("sayembara-desc")}>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <ArrowDownIcon className="h-16 w-16 text-green-700 mt-10" />
                        </motion.div>
                    </button>
                </div>

                {/* Next Project Link */}
                <div className="next-project" style={{ textAlign: "right" }}>
                    <Link to="/netflix-movie-review">
                        <p>Netflix Movie Review</p>
                    </Link>
                    <Link to="/netflix-movie-review">
                        <ArrowRightIcon className="h-6 w-6 inline-block ml-2" />
                    </Link>
                </div>
            </div>

            {/* Project Description */}
            <motion.div 
                id="sayembara-desc" 
                className="webapp-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="Intro__Container">
                    <h1 className="Intro__IntroTitle">SAYEMBARA</h1>
                    <p className="Intro__IntroDescription">
                        Sayembara is a study project designed to bring together graphic designers and clients. Users can create graphic design contests as providers or participate in contests as designers. <br /><br />
                        Participants can earn money by winning contests, while providers save budgets on hiring designers.
                    </p>
                </div>
            </motion.div>

            {/* Images */}
            <div style={{ backgroundColor: "#5e7361" }}>
                <div className="project-img-wrapper">
                    <div className="project-img project-img-top">
                        <img src={require("../assets/images/sayembara-LP.jpg")} alt="full view" style={{ width: "100%" }} />
                    </div>
                    <div className="project-img project-img-bottom">
                        <img className="img-top" src={require("../assets/images/symbr-contest.jpg")} alt="contests" style={{ width: "100%" }} />
                        <img src={require("../assets/images/symbr-submission.jpg")} alt="submissions" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>

            {/* Back to Home */}
            <div className="backhome-wrapper">
                <Link to="/">
                    <p style={{ fontSize: "3rem" }}>
                        Back to home <ArrowRightIcon className="h-8 w-8 inline-block" />
                    </p>
                </Link>
            </div>

            {/* Back to Top Button */}
            <motion.div 
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.1 }}
            >
                <ArrowUpIcon className="h-10 w-10 text-white bg-green-700 p-2 rounded-full" />
            </motion.div>

            {/* Modal for Video */}
            {visible && (
                <div className="modal-web">
                    <div className="modal-content">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            className="iframe" 
                            title="symbr" 
                            src="https://www.youtube.com/embed/xCECMFUDp70" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                        <button className="close-modal" onClick={() => setVisible(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sayembara;
