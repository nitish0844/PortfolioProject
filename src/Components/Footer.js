import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] md:h-40 lg:h-40 h-52 flex justify-center items-center">
      <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center space-x-4">
        <p className="text-white text-center text-sm">Edit by Sunwoo Kang </p>
        <p className="text-white text-center text-sm">
          © 2022. All Rights Reserved.
        </p>
        <p className="text-white text-center text-sm">Design by Styleshout</p>
      </div>
    </div>
  );
};

export default Footer;
