import React from "react";


const About = () => {
    return(
        <div className="main-wrapper">
            <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">About Me</h2>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p>Glints Academy</p>
                    <p>
                        <span className="font-semibold">NON-DEGREE</span> <br />
                        Chinese Language Center of National Chengchi University <br />
                        Intensive class on Mandarin.
                    </p>
                    <p>Universitas Indonesia</p>
                    <h3 className="text-xl font-semibold mt-4">Experience</h3>
                    <p className="font-semibold">Management Trainee</p>
                    <p>PT Haidilao Indonesia Restaurants</p>
                    <h3 className="text-xl font-semibold mt-4">Languages</h3>
                    <p>Bahasa Indonesia (native)</p>
                    <p>English (advanced)</p>
                    <p>Chinese Mandarin (intermediate)</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold">Skills</h3>
                    <h3 className="text-xl font-semibold mt-4">Interests</h3>
                </div>
            </div>
        </div>
    )
}

export default About;