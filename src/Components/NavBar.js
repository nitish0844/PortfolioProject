/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = ({
  scrollToAbout,
  scrollToTop,
  scrollToActivity,
  scrollToContact,
  scrollToResume,
  scrollToProjects,
  scrollToStatictics,
}) => {
  return (
    <nav className="bg-transparent py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center lg:gap-12 md:gap-9 gap-8 justify-center lg:p-2 md:p-2 p-4">
            <a
              onClick={scrollToTop}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              HOME
            </a>
            <a
              onClick={scrollToAbout}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              ABOUT
            </a>
            {/* <a
              onClick={scrollToResume}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              RESUME
            </a> */}
            <a
              onClick={scrollToProjects}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              PROJECTS
            </a>
            <a
              onClick={scrollToActivity}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              ACTIVITIES
            </a>
            {/* <a
              onClick={scrollToStatictics}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              STATISTICS
            </a> */}
            <a
              onClick={scrollToContact}
              className="text-white text-xs font-bold hover:text-gray-300 cursor-pointer letter-spacing-wide"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-white mt-5" />
    </nav>
  );
};

export default NavBar;
