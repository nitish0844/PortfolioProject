import React from "react";
import { FaAngleUp } from "react-icons/fa6";

const TopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={scrollToTop}
      className="bg-[#525252] rounded-full p-3 transition duration-300 hover:bg-[#0F9095]"
    >
      <FaAngleUp className="text-[#fff] text-3xl cursor-pointer" />
    </div>
  );
};

export default TopArrow;
