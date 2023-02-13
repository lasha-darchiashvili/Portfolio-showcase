import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import gitlogo from "../assets/gitlogo2.svg";

const IconsList = () => {
  return (
    <div className="flex justify-center w-fit items-center pt-[2em] gap-[1em]">
      <a href="http://www.facebook.com/lasha-darchiashvili.3" target="_blank">
        <img
          src={facebook}
          alt=""
          className="w-[3em] hover:scale-[1.5] transition duration-300 cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/lasha-darchiashvili" target="_blank">
        <img
          src={linkedin}
          alt=""
          className="w-[3em] hover:scale-[1.5] transition duration-300 cursor-pointer"
        />
      </a>
      <a href="https://www.instagram.com/lasha.darchiashvili/" target="_blank">
        <img
          src={instagram}
          alt=""
          className="w-[3em] hover:scale-[1.5] transition duration-300 cursor-pointer"
        />
      </a>
      <a href="https://github.com/lasha-darchiashvili" target="_blank">
        <img
          src={gitlogo}
          alt=""
          className="w-[3em] hover:scale-[1.5] transition duration-300 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default IconsList;
