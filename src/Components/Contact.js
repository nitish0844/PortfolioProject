import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#151515] flex flex-col justify-center items-center md:pb-10 lg:pb-10 pb-20 md:h-[80vh] lg:h-[80vh] h-[100vh] relative">
      <div className="md:text-2xl lg:text-2xl text-lg font-semibold text-[#F06000] text-center mt-10">
        Contact
      </div>

      <div className="text-white text-center lg:text-4xl md:text-4xl text-3xl md:w-[80%] lg:w-[80%] w-80 font-bold mt-2">
        I'd Love To Connect With You.
      </div>

      <div className="text-white text-center md:text-lg lg:text-lg text-base mt-4">
        Let me get to know more about you.
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row md:space-x-64 space-x-0 md:mt-10 lg:mt-10 mt-2">
        <div className="flex flex-col justify-start items-center">
          <FaLocationArrow className="text-white lg:text-4xl md:text-3xl text-xl mt-10" />
          <div className="text-[#F06000] lg:text-xl md:text-xl text-base font-bold mt-3">
            Where to find me
          </div>

          <div className="text-white md:text-base lg:text-base text-sm mt-3 w-32 text-center">
            531 Lasuen Mall Stanford, CA 94305 US
          </div>
        </div>

        <div className="flex flex-col justify-start items-center">
          <IoIosMail className="text-white lg:text-4xl md:text-3xl text-2xl mt-10" />
          <div className="text-[#F06000] lg:text-xl md:text-xl text-base font-bold mt-3">
            Email Me At
          </div>

          <div className="text-white md:text-base lg:text-base text-sm mt-3 text-center">
            sunnybd97@gmail.com
          </div>
        </div>

        <div className="flex flex-col justify-start items-center">
          <FaLinkedinIn className="text-white lg:text-4xl md:text-3xl text-xl mt-10" />
          <div className="text-[#F06000] lg:text-xl md:text-xl text-base font-bold mt-3">
            Let's Connect
          </div>

          <div className="text-blue-400 md:text-base lg:text-base text-sm mt-3 text-center">
            <a
              href="https://www.linkedin.com/in/sunnybd97/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
