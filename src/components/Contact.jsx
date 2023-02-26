import React from "react";
import IconsList from "./IconsList";

const Contact = () => {
  return (
    <footer
      className="flex flex-col items-center  md:pb-[20em] xs:pb-[10em] mob:pb-[10em] relative"
      id="contact"
    >
      <div className="flex flex-col items-center md:mb-[6em] xs:mb-[3em] mob:mb-[3em]">
        <p className="font-semibold text-[3.6em] mob:text-[2.4em] text-white ">
          Contact
        </p>
        <div className=" bg-green w-[75%] h-[0.5em] mx-0 my-[1em]"></div>
      </div>
      <p className="mb-4 font-semibold text-[2em] mob:text-[1.4em] mob:text-[2.4em] text-green">
        Want to work together? Let me know!
      </p>
      <form
        className="sm:w-[500px] mob:w-[80vw] xs:w-[400px]"
        action="https://formsubmit.co/feebae8e76caca0451f636709b37db9a"
        method="POST"
      >
        <div className="mb-4">
          <input
            className="text-[1.6em] shadow appearance-none  rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-inputGray"
            id="username"
            type="text"
            placeholder="Username"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className=" text-[1.6em]  shadow appearance-none  rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-inputGray"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className=" text-[1.6em]  shadow appearance-none bg-inputGray rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="6"
            name="textarea"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mt-[2em]">
          <button
            onSubmit={(e) => e.preventDefault()}
            className="border border-solid rounded-md border-green text-green text-[2.4em] hover:bg-green hover:text-graybg transition-all duration-500 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>

      <div className="flex flex-col absolute absolute bottom-0 mb-[2em]">
        <p className="text-[1.4em] text-textgray">
          Website created by Lasha Darchiashvili
        </p>
        <div className="flex justify-center  ">
          <IconsList />
        </div>
      </div>
    </footer>
  );
};

export default Contact;
