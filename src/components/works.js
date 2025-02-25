import React from "react";
import LW from "../assets/images/LW.png";

const Works = () => {
    return (
        <div className="works-wrapper text-center">
            <h1 className="alfa text-4xl font-bold mb-6">My Works</h1>

            <div className="flex flex-col md:flex-row justify-center gap-10">
                {/* Code Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold">Code</h2>
                </div>

                {/* Illustration Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold">Illustration</h2>
                    <div className="illustration-img mt-4">
                        <img src={LW} className="w-full rounded-lg shadow-lg" alt="LW" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
