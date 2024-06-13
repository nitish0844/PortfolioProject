import React, { useRef } from "react";
import HeaderData from "../Components/HeaderData";
import About from "../Components/About";
import NavBar from "../Components/NavBar";
import HeadImage from "../Assets/Images/wallpaper.jpg";
import ActivityBgImage from "../Assets/Images/bg.jpg";
import Activity from "../Components/Activity";
import Contact from "../Components/Contact";
import TopArrow from "../Components/TopArrow";
import Footer from "../Components/Footer";
import BottomArrowButton from "../Components/BottomArrowButton";
// import Resume from "../Components/Resume";
import Projects from "../Components/Projects";
import Statistics from "../Components/Statistics";

const MainScreen = () => {
  const aboutRef = useRef(null);
  const activityRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const staticticRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToActivity = () => {
    if (activityRef.current) {
      activityRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    if (resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToStatictics = () => {
    if (staticticRef.current) {
      staticticRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${HeadImage})`,
        }}
        className="h-screen bg-cover bg-no-repeat bg-center"
      >
        <NavBar
          scrollToAbout={scrollToAbout}
          scrollToTop={scrollToTop}
          scrollToActivity={scrollToActivity}
          scrollToContact={scrollToContact}
          scrollToResume={scrollToResume}
          scrollToProjects={scrollToProjects}
          scrollToStatictics={scrollToStatictics}
        />
        <HeaderData />

        <div className="absolute bottom-5 left-[45%] md:left-[50%]">
          <BottomArrowButton scrollToAbout={scrollToAbout} />
        </div>
      </div>

      {/* About */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Resume */}
      {/* <div ref={resumeRef}>
        <Resume />
      </div> */}

      {/* Projects */}
      <div ref={projectRef}>
        <Projects />
      </div>

      {/* <Activity /> */}
      <div
        ref={activityRef}
        style={{
          backgroundImage: `url(${ActivityBgImage})`,
        }}
        className="relative bg-cover bg-no-repeat bg-center"
      >
        <Activity />
      </div>

      {/* Statistics */}
      <div ref={staticticRef}>
        <Statistics />
      </div>

      <div className="relative">
        {/* Contact */}
        <div ref={contactRef}>
          <Contact />
        </div>

        <div className="absolute md:bottom-[140px] lg:bottom-[140px] bottom-[180px] left-[43%] md:left-[50%]">
          <TopArrow />
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
