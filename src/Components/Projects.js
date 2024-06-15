import React, { useState, useRef, useEffect } from "react";
import { FaTag } from "react-icons/fa";

import Bg from "../Assets/Images/bg.png"


const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    
    {
      name: "Personal Website",
      title: "Web Development",
      image: Bg,
      description:
        "Created own personal website for showing resume. Merged Ceeve and Kard platform from Styleshout.",
      modal_image:
        Bg,
      tag: "WEBDESIGN, JAVASCRIPT, CSS, HTML",
    },
   
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !event.target.closest(".details-button")
      ) {
        closeModal();
      }
    };

    const handleScroll = () => {
      if (modalOpen) {
        closeModal();
      }
    };

    if (modalOpen) {
      window.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [modalOpen]);

  return (
    <div className="bg-[#EBEEEE] flex flex-col justify-center items-center pb-28">
      <div className="tracking-spacewide font-semibold text-[#F06000] text-xl mt-10 font-open_sans">
        Projects
      </div>
      <div className="font-bold lg:text-4xl md:text-3xl text-2xl mt-5 mb-10 font-open_sans_bold">
        Check out my creations.
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              className="h-[270px] w-[270px]"
              alt={project.name}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
              <div className="absolute top-2 left-2 text-white font-bold ml-3 mt-3 font-open_sans">
                {project.name}
              </div>
              <div className="absolute top-2 left-2 text-white mt-10 text-custom-s ml-3 font-open_sans font-thin tracking-wide">
                {project.title}
              </div>
              <div className="text-white text-4xl">+</div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 z-40">
          <div
            ref={modalRef}
            className="bg-white lg:w-[620px] w-[85%] md:w-[70%] lg:h-[100%] h-[90%] overflow-auto"
          >
            <img
              src={selectedProject.modal_image}
              className="h-[400px] w-[800px] mx-auto"
              alt={selectedProject.name}
            />
            <h2 className="text-custom-sm tracking-wider font-bold mt-5 ml-10 mr-10 font-open_sans_bold">
              {selectedProject.name}
            </h2>
            <p className="mt-4 ml-10 mr-10 mb-5 text-grey font-open_sans">
              {selectedProject.description}
            </p>
            <div className="flex flex-row mt-2 ml-10 mr-10 mb-5 text-grey">
              <FaTag className="text-[15px] mt-1" />
              <p className="ml-3 tracking-widest text-xs font-open_sans_light">
                {selectedProject.tag}
              </p>
            </div>
          </div>
          <div className="bg-[#111111] lg:w-[620px] w-[85%] md:w-[70%] h-[60px] flex gap-4 font-bold tracking-widest">
            <button onClick={closeModal} className="text-white pt-2 pl-5">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
