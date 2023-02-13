import React from "react";
import htmlIcon from "../assets/htmlfinal.png";
import cssIcon from "../assets/cssfinal.png";
import jsIcon from "../assets/jsfinal.png";
import reactIcon from "../assets/reactfinal2.png";
import { motion } from "framer-motion";
import sassIcon from "../assets/sassfinal.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="md:pt-[10em] sm:pt-[5em] xs:pt-[3em] mob:pt-[7em]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col items-center md:mt-[7em] sm:mt-[15em] xs:mt-[10em] mob:mt-[5em] ">
          <p className="font-semibold text-[3.6em] mob:text-[2.4em] text-green">
            My Skillset
          </p>
          <div className="sm:mt-[6em] xs:mt-[4em] mob:mt-[2em] ">
            <div className="bg-gradient-green w-full h-[0.1em] mx-0 my-[1em] md:mb-[6em] xs:mb-[3em] mob:mb-[1em]"></div>
            <div className="flex ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <img
                  src={htmlIcon}
                  alt="htmlIcon"
                  className="md:w-[15em] xs:w-[8em] mob:w-[5em]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {" "}
                <img
                  src={cssIcon}
                  alt="cssIcon"
                  className="md:w-[15em] xs:w-[8em] mob:w-[5em]"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {" "}
                <img
                  src={jsIcon}
                  alt="jsIcon"
                  className="md:w-[15em] xs:w-[8em] mob:w-[5em]"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <img
                  src={reactIcon}
                  alt="reactIcon"
                  className="md:w-[15em] xs:w-[8em] mob:w-[5em]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <img
                  src={sassIcon}
                  alt="sassIcon"
                  className="md:w-[15em] xs:w-[8em] mob:w-[5em]"
                />
              </motion.div>
            </div>
            <div className="bg-gradient-green w-full h-[0.1em] mx-0 my-[1em] md:mt-[6em] xs:mt-[3em] mob:mt-[1em]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
