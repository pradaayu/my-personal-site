import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon, ArrowUpIcon, ArrowRightIcon } from "@heroicons/react/24/solid"; // Heroicons
import "../assets/style/webapp.scss";

const MovieReview = () => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Header */}
            <div className="w-full py-6">
                <Link to="/" className="text-2xl font-bold hover:underline">HOME</Link>
            </div>

            {/* Title & Links */}
            <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold">MOVIE REVIEW</h3>
                <div className="flex justify-center items-center gap-4 mt-2 text-lg font-medium">
                    <a href="https://netflix-moviereview.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Live Website
                    </a>
                    <span>|</span>
                    <a href="https://gitlab.com/ditcu-code/ga-movieapps" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Repo
                    </a>
                </div>
            </div>

            {/* Scroll Down Arrow */}
            <a href="#movie-review-desc" className="mt-10 cursor-pointer animate-bounce text-green-700">
                <ArrowDownIcon className="w-16 h-16" />
            </a>

            {/* Navigation to Previous Project */}
            <div className="w-full flex items-center justify-start mt-6 px-6">
                <Link to="/sayembara" className="flex items-center text-lg font-semibold hover:underline">
                    <span className="mr-2">&lt;</span> Sayembara
                </Link>
            </div>

            {/* Movie Review Description */}
            <div id="movie-review-desc" className="max-w-3xl mx-auto mt-12 text-left">
                <h1 className="text-4xl font-bold">Netflix Movie Review</h1>
                <p className="mt-4 text-lg leading-relaxed">
                    Netflix movie review was made during the time I first learned ReactJS. 
                    This web app is a movie database intended for users to see each movie's trailer and synopsis, 
                    as well as leave reviews as members. It is fully integrated with an API.
                </p>
            </div>

            {/* Image Gallery */}
            <div className="w-full bg-green-700 mt-12 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                    <img src={require("../assets/images/movie-review.jpg")} alt="contests" className="w-full rounded-lg shadow-lg" />
                    <div className="flex flex-col gap-4">
                        <img src={require("../assets/images/netflix-movrev.jpg")} alt="full view" className="w-full rounded-lg shadow-lg" />
                        <img src={require("../assets/images/movielist.jpg")} alt="submissions" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Back to Home */}
            <div className="w-full flex justify-center mt-12">
                <Link to="/" className="flex items-center text-2xl font-semibold hover:underline">
                    Back to home <ArrowRightIcon className="ml-2 w-6 h-6" />
                </Link>
            </div>

            {/* Back to Top Button */}
            <a href="#" className="fixed bottom-6 right-6 p-3 bg-green-700 text-white rounded-full shadow-lg cursor-pointer hover:bg-green-800">
                <ArrowUpIcon className="w-6 h-6" />
            </a>
        </div>
    );
};

export default MovieReview;
