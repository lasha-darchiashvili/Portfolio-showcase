import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import IconsList from "./IconsList";
import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Profile = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="flex justify-center items-center">
      <div className="text-white md:h-screen md:flex md:justify-center md:items-center  md:gap-[10em] font-poppins w-5/6">
        <div className="sm:w-[50em] mob:w-[80vw] order-1 mx-auto xs:mb-[4em] xs:mt-[3em] mob:mt-[2em]">
          <img src={profileImg} alt="" className="sm:w-[50em] mob:w-[80vw]" />
        </div>

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
          <div className="">
            <p className="text-[3.6em] mob:text-[2.4em]">
              Lasha{" "}
              <span className="xs:text-green xs:font-semibold">
                Darchiashvili
              </span>
            </p>
            <p className="text-[1.6em] md:w-[36vw] mt-[1em] mob:text-[1.2em]">
              Hello, I'm Front-end Developer from Tbilisi, Georgia. I have solid
              knowledge in the field with multiple personal projects built. I'm
              a good team-player. However, you can count on me as one man army
              if duty calls.
            </p>
            <div className="text-[2.4em] mob:text-[1.6em] flex w-fit mt-[1em]">
              <AnchorLink className="text-graybg cursor-pointer flex justify-center items-center bg-gradient-blue rounded-l-lg px-[0.6em] font-semibold py-[0.1em] text-center">
                Contact Me
              </AnchorLink>
              <AnchorLink className="bg-gradient-blue rounded-r-lg py-[0.1em] px-[0.1em] flex justify-center items-center cursor-pointer">
                <p className="bg-graybg px-[0.6em] py-[0.1em] text-center flex justify-center items-center rounded-lg">
                  Let's talk
                </p>
              </AnchorLink>
            </div>
            <IconsList />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
