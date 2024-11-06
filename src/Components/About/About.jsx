import React from "react";
import AboutImg from "../../assets/home1.png";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="text-center mb-8 w-full">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
      </div>

      <div className="md:flex flex-row items-center">
        {/* Image Section */}
        <img
          className="md:h-80 md:w-80 mr-12 md:-ml-12" 
          src={AboutImg} 
          alt="About img" 
        />

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <ul>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <p className="text-left text-lg md:text-xl leading-tight">
                  Detail-oriented Software Engineering student with ambitions in website development and virtual
                  reality. I possess strong organizational and multitasking skills, a quick learning ability, and 
                  a passion for technology. Eager to leverage my expertise in both fields to tackle innovative 
                  challenges and advance my career.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
