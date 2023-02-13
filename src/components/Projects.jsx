import React from "react";
import Project from "./Project";
import projectsData from "../Projectsdata";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className=" md:pt-[15em] sm:pt-[15em] xs:pt-[10em] mob:pt-[11em] xs:pt-[6em] mob:pt-[3em] flex flex-col items-center font-poppins md:pb-[20em] mob:pb-[8em] xs:pb-[10em] "
    >
      <div className="flex flex-col items-center md:mb-[6em] xs:mb-[6em] mob:mb-[3em]">
        <p className="font-semibold text-[3.6em] mob:text-[2.4em] text-green ">
          Projects
        </p>
        <div className=" bg-green w-[75%] h-[0.5em] mx-0 my-[1em]"></div>
      </div>

      <div className="flex flex-col gap-[5em] md:gap-[10em]">
        {projectsData.map((project, index) => (
          <Project
            projectHeader={project.header}
            projectname={project.name}
            projectDescription={project.description}
            projectSkills={project.skills}
            projectLinks={project.links}
            projectImg={project.img}
            imgOrder={project.imgOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
