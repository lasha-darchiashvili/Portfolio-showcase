import React from "react";
import gitlogo from "../assets/gitlogo2.svg";
import linkbtn from "../assets/linkbtn.svg";
import portfolioProjectImg from "../assets/portfolioProject.png";
import { motion } from "framer-motion";

const Project = ({
  projectImg,
  projectHeader,
  projectname,
  projectDescription,
  projectSkills,
  projectLinks,
  imgOrder,
}) => {
  console.log(projectImg, "sd");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex">
        <div
          className={`w-[50em] hidden md:block ${
            imgOrder === 2 ? "order-1" : ""
          }`}
        >
          <img src={projectImg} alt="" className="w-[50em]" />
        </div>
        <div className="bg-graybgDarker w-[50em] md:h-auto h-[27.2em] shadow-4xl xs:w-[47em] mob:w-[80vw]">
          <div
            className={`h-[33%] flex flex-col gap-[2em]  ${
              imgOrder === 2
                ? "xs:items-end xs:pr-[1em] mob:pl-[1em]"
                : "pl-[1em]"
            } `}
          >
            <p className="text-green text-[2em] mob:text-[1.6em]">
              {projectHeader}
            </p>
            <p className="text-[2.4em] mob:text-[1.6em] text-white">
              {projectname}
            </p>
          </div>
          <div
            className={`bg-darkestblue flex items-center h-[34%] text-[1.6em] mob:text-[1em] text-textgray ${
              imgOrder === 2
                ? "xs:justify-end xs:pr-[1em] xs:text-right mob:pl-[1em]"
                : "pl-[1em]"
            } `}
          >
            {projectDescription}
          </div>
          <div
            className={`h-[33%] flex flex-col text-[1.6em] mob:text-[1.2em] justify-center text-textgray gap-[0.5em] ${
              imgOrder === 2
                ? "xs:items-end xs:pr-[1em] mob:pl-[1em]"
                : "pl-[1em]"
            }`}
          >
            <div className="flex gap-[1.2em]">
              {projectSkills.map((skill, index) => (
                <p>{skill}</p>
              ))}
            </div>
            <div className="flex gap-[1em] ">
              <a href={projectLinks.live} target="_blank">
                {" "}
                <img
                  src={linkbtn}
                  alt=""
                  className="w-[1.7em] hover:scale-[1.2] transition duration-300 cursor-pointer"
                />
              </a>

              <a href={projectLinks.github} target="_blank">
                <img
                  src={gitlogo}
                  alt=""
                  className="w-[1.7em] hover:scale-[1.2] transition duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
