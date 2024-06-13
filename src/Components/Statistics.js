import React from "react";
import { FaFile, FaTrophy, FaMagic, FaGlobeAsia, FaBook } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

const Statistics = () => {
  const tags = [
    {
      icon: FaFile,
      count: "200+",
      description: "Projects Completed",
    },
    {
      icon: FaTrophy,
      count: "10",
      description: "Awards Received",
    },
    {
      icon: FaMagic,
      count: "100+",
      description: "Crazy Ideas",
    },
    {
      icon: IoCodeSlashOutline,
      count: "1000+",
      description: "Hours Coding",
    },
    {
      icon: FaGlobeAsia,
      count: "930+",
      description: "Network",
    },
    {
      icon: FaBook,
      count: "1000+",
      description: "Books Read",
    },
  ];

  return (
    <div className="bg-[#11ABB0] flex flex-wrap justify-center items-center relative w-full py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
        {tags.map((tag, index) => {
          const IconComponent = tag.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-white relative"
            >
              <div className="rounded-full p-4 mb-4">
                <IconComponent className="text-[#000] text-4xl" />
              </div>
              <div className="text-3xl font-bold">{tag.count}</div>
              <div className="text-center mt-2 text-lg text-[#88D5D8] font-bold">
                {tag.description}
              </div>
              {index < tags.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-y-[-50%] h-40 border-r-2 border-[#2EB5BA]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
