import React from "react";

const profileImage =
  "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg";

const About = () => {
  return (
    <div className="text-white bg-[#0F0F0F] flex flex-col justify-center items-center pb-10">
      <div className="text-xl font-semibold text-[#F06000] text-center mt-24">
        About
      </div>
      <div className="text-white text-center lg:text-3xl md:text-3xl text-2xl font-extrabold">
        Let me introduce myself.
      </div>

      {/* profile image and about */}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10 mt-10 lg:w-[50%] md:w-1/2 w-1/2 md:text-center text-center lg:text-left">
        <img
          src={profileImage}
          alt="hello"
          className="lg:w-32 lg:h-32 md:w-28 md:h-28 w-24 h-24 rounded-full border-2 border-[#F06000] mt-5"
        />
        <div className="text-[#888888] lg:text-lg md:text-base w-96 text-sm md:mt-5 lg:mt-5 mt-0">
          I'm an engineer seeking moonshot in the health / bio sector. I'm also
          Stanford class of 2020 B.S. in Biomedical Computation, and class of
          2021 M.S. in Computer Science AI specialization. My primary interests
          have been precision health, data flow, zero to one, and the list is
          still growing.
        </div>
      </div>

      {/* profileData and Skills */}
      <div className="flex lg:flex-row justify-center items-center gap-14 mt-10 md:flex-col flex-col">
        <div className="flex flex-col w-80">
          <div className="text-white text-2xl font-bold lg:text-left md:text-left text-center">
            PROFILE
          </div>
          <div className="mt-5 text-[#888888]">
            Currently I have a job, but am open to new software
            engineering/product owner/startup opportunities. If you think I'm a
            good fit, please contact me via sunnybd97@gmail.com.
          </div>
          <div className="text-[#333333] mt-5">
            FULLNAME: <br />
            <span className="text-[#888888]">Sunwoo Kang</span>
          </div>

          <div className="text-[#333333] mt-5">
            BIRTH DATE: <br />
            <span className="text-[#888888]">July 30, 1997</span>
          </div>

          <div className="text-[#333333] mt-5">
            EMAIL: <br />
            <span className="text-[#888888]">sunnybd97@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col w-80">
          <div className="text-white text-2xl font-bold lg:text-left md:text-left text-center">
            SKILLS
          </div>
          <div className="mt-5 text-[#888888]">
            I'm a cell-like independent teamworker, strong in research and
            coding. My areas of expertise are computer science, bioinformatics,
            and genetics. Below are highlights of my technical skills:
          </div>

          {/* Skills and Progress Bars */}
          <div className="mt-5">
            <div className="text-[#888888]">
              HTML
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="text-[#888888] mt-3">
              PYTHON
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="text-[#888888] mt-3">
              JAVASCRIPT
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="text-[#888888] mt-3">
              CSS
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hire me and download button */}
      <div className="flex lg:flex-row md:flex-col flex-col justify-center items-center gap-7 mt-20">
        <button className="bg-[#11ABB0] hover:bg-[#3D4145] transition duration-300 text-white h-12 md:w-64 w-[300px] rounded-sm font-bold">
          Hire Me
        </button>
        <button className="bg-[#11ABB0] hover:bg-[#3D4145] transition duration-300 text-white h-12 md:w-64 w-[300px] rounded-sm font-bold">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
