import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const HeaderData = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-[50vh] w-full"
      style={{
        filter: "contrast(1.4) brightness(1)",
      }}
    >
      <div className="text-white font-bold text-center lg:text-8xl md:text-8xl text-6xl">
        Anvi Kalidindi
      </div>

      <div className="text-white text-center md:text-2xl lg:text-xl text-lg mt-5">
        Software Engineer
      </div>

      <div className="flex space-x-6 mt-10">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-white text-3xl hover:text-[#0F9095] transition duration-300" />
        </a>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-3xl hover:text-[#0F9095] transition duration-300" />
        </a>
        <a href="mailto:akpixie867@gmail.com">
          <IoMdMail className="text-white text-3xl hover:text-[#0F9095] transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default HeaderData;
