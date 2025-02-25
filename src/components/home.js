import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/solid"; // Heroicons
import { Dialog, Transition } from "@headlessui/react"; // Headless UI for Modals
import { motion } from "framer-motion"; // Replacing react-reveal
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import art from "../assets/images/art.svg";
import webdev from "../assets/images/webdev.svg";
import "../assets/style/home.scss";

const Home = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const slides = [
        {
            title: "Sayembara",
            description: "Sayembara is a platform that brings together clients and graphic designers.",
            image: require("../assets/images/symbr mockup.jpg"),
            project: "/sayembara",
        },
        {
            title: "Netflix Movie Review",
            description: "Explore and read movie reviews, provide ratings, and leave reviews.",
            image: require("../assets/images/netflix-mr-mockup.jpg"),
            project: "/netflix-movie-review",
        }
    ];

    const slides2 = [
        { image: require("../assets/images/hiccup.png") },
        { image: require("../assets/images/matilda.png") },
        { image: require("../assets/images/hwayugi.png") },
    ];

    return (
        <Fragment>
            {/* Navigation */}
            <div className="put-middle">
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsDrawerOpen(true)} className="text-lg font-semibold">
                        MENU
                    </button>
                </div>

                {/* Drawer (Mobile Navigation) */}
                <Transition show={isDrawerOpen} as={Fragment}>
                    <Dialog onClose={() => setIsDrawerOpen(false)} className="fixed inset-0 z-50">
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                        <div className="fixed top-0 right-0 w-64 bg-white shadow-lg p-6">
                            <button onClick={() => setIsDrawerOpen(false)} className="absolute top-4 right-4">
                                <XMarkIcon className="w-6 h-6 text-gray-700" />
                            </button>
                            <nav className="flex flex-col space-y-4 mt-8">
                                <a href="#home" className="text-lg font-semibold">Home</a>
                                <a href="#about" className="text-lg font-semibold">About</a>
                                <a href="#works" className="text-lg font-semibold">Works</a>
                                <a href="#contact" className="text-lg font-semibold">Contact</a>
                            </nav>
                        </div>
                    </Dialog>
                </Transition>

                {/* Hero Section */}
                <div id="home" className="home-wrapper text-center">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <h3 className="text-4xl font-bold">HELLO, I'M ANI.</h3>
                        <p className="mt-4 text-lg">I'm a junior front-end web developer with a background in Chinese Studies. I love drawing, traveling, plants, and cats.</p>
                        <a href="https://drive.google.com/file/d/13MkvuyWFpxxsW27SmLbvBUZeqRUGr1Xy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg">Download CV</button>
                        </a>
                    </motion.div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="https://www.instagram.com/meowdynasty" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/prada-ayu-nurani-ani-3a7830121/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://www.github.com/pradaayu" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://www.behance.net/pradaayu" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/behance.svg" alt="Behance" className="w-6 h-6" />
                    </a>
                </div>

                {/* My Works Section */}
                <div id="works" className="works-wrapper text-center mt-12">
                    <h2 className="text-3xl font-bold">MY WORKS</h2>
                    <div className="flex flex-col md:flex-row mt-6">
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-xl font-semibold">Web</h3>
                            <p className="mt-2">I design and code websites.</p>
                            <img src={webdev} className="w-full cursor-pointer" alt="Web Development" onClick={() => setShowModal1(true)} />
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-xl font-semibold">Artworks</h3>
                            <p className="mt-2">Collection of artwork illustration.</p>
                            <img src={art} className="w-full cursor-pointer" alt="Artworks" onClick={() => setShowModal2(true)} />
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <a href="#" className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800">
                    <ArrowUpIcon className="w-6 h-6" />
                </a>
            </div>

            {/* Modal for Web Projects */}
            <Transition show={showModal1} as={Fragment}>
                <Dialog onClose={() => setShowModal1(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                            <img src={slide.image} alt="slide" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </Dialog>
            </Transition>
        </Fragment>
    );
};

export default Home;
