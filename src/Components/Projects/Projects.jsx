import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Cartoon City"
          main="Cartoon City, created with Unreal Engine, is a vibrant, stylized urban environment featuring colorful buildings, whimsical designs, and interactive elements that bring the animated world to life."
        />
        <ProjectCard
          title="GTA Clone"
          main="A GTA clone in Unity is an open-world action game that replicates the exploration, missions, and dynamic interactions of the Grand Theft Auto series."
        />
        <ProjectCard
          title="IGI clone"
          main="An IGI clone made using Unity is a first-person tactical shooter game featuring strategic gameplay, immersive environments, and advanced AI, built on Unity's powerful game engine."
        />
        <ProjectCard
          title="Online Examination System"
          main="An Online Examination System built using Java and SQL allows for secure, automated test creation, management, and result processing through a web-based platform."
        />
        <ProjectCard
          title="Medimate Healthcare Platform"
          main="Medimate is a healthcare platform built with the MERN stack, offering seamless patient management, appointment scheduling, and medical record tracking."
        />
        <ProjectCard
          title="Spotify Clone"
          main="A Spotify clone built with HTML, CSS, and JavaScript that replicates the music streaming platform's user interface and basic functionalities."
        />
      </div>
    </div>
  );
};

export default Projects;
