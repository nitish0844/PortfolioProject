import React from "react";
import { FaChevronDown } from "react-icons/fa";

const BottomArrowButton = ({ scrollToAbout }) => {
  return (
    <div
      onClick={scrollToAbout}
      className="bg-[#ffff] rounded-full p-3 transition duration-300 hover:bg-[#0F9095]"
    >
      <FaChevronDown className="text-black text-2xl cursor-pointer" />
    </div>
  );
};

export default BottomArrowButton;
