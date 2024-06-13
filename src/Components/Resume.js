import React from "react";
import { MdWork } from "react-icons/md";

const Resume = () => {
  const experiences = [
    {
      role: "Software Engineer",
      date: "March 2022 - Present",
      company: "Amazon",
      description:
        "Team member at Amazon Health & Wellness Halo Device CVML team. Won first place in healthtech hackathon with software prototype to highlight user's milestones and achievement to drive customer engagement.",
      url: "https://www.amazon.com/b?node=16333372011",
    },
    {
      role: "Software Engineer",
      date: "June 2020 - March 2022",
      company: "Invitae",
      description:
        "Owned fundamental company data transfer pipeline transferring genomic data from lab to compute clusters. Built automation system for troubleshooting sequencing results from variant confirmation process. Created complex and interactive web visualization tool for clinical interpretation based on React framework and Plotly visual tools.",
      url: "https://www.invitae.com/",
    },
    {
      role: "Bioinformatics Intern",
      date: "June 2019 - September 2019",
      company: "Genentech",
      description:
        "Worked in proteomics department under R&D. Created web data analysis & visualization for MS based proteomics using python pyramid server & typescript client. Ran high throughput computation analysis through Spotfire, R, and SQL queries. Was selected for Genentech Leader Intern Exchange program (gLINX) and mentored by senior VP executive.",
    },
    {
      role: "Software Engineer",
      date: "August 2018 - September 2018",
      company: "Streami Inc.",
      description:
        "Worked in blockchain company. Performed network performance test between AWS centers located in Asia. Created GOPAX API monitoring tool that would test GOPAX API, create error digest, then would send email alert. Studied zcash transaction after Overwinter Hardfolk.",
      url: "https://www.streami.io",
    },
    {
      role: "Research Intern",
      date: "June 2018 - August 2018",
      company: "Google's Code for Summer 2018",
      description:
        "Updated python package called DNAplotlib, a project under National Resource for Network Biology. Integrated pySBOL2 which supports hierarchical and complex interaction visualization of synthetic biocircuits. Rendered Synthetic Biology Open Language (SBOL) visual standard glyph in python. More details in<a href='/projects' class='text-blue'> projects</a>.",
    },
    {
      role: "Founder/App developer",
      date: "March 2018 - June 2018",
      company: "DoctorMi",
      description:
        "Developed iOS app called DoctorMi that visualizes user health diagnosis data based on breath analysis. Supports features such as daily health data check, real time breath analysis, looking at other health data, and sharing health data by email. Originally a final project for the class CS193P. More details in <a href='/projects' class='text-blue'>projects</a>.",
    },
    {
      role: "Founder/Front-end Developer",
      date: "March 2017 - October 2017",
      company: "Startup Dotsaway Inc.",
      description:
        "Built user chat system based on Django channel package and websockets. Created print itinerary page for the outdoor trekking route using javascript, css, and html programming. Developed web pages to enhance user experience, reached out to Stanford student orgs for user testing. More details in <a href='/projects' class='text-blue'>projects</a>.",
    },
  ];

  const BackgroundEducation = [
    {
      role: "Master's Degree",
      date: "September 2017 - March 2021",
      company: "Stanford University",
      description: `Majored in computer science, specialized in Artificial Intelligence. Honors thesis on "A Computational Model to Identify Genetic Differences in ALDH2 From Human Exhaled Breath"`,
    },
    {
      role: "Bachelor's Degree",
      date: "September 2016 - June 2020",
      company: "Stanford University",
      description:
        "Founded the club Stanford Transhumanist Association. Former webmaster for Sigma Psi Zeta, former club director for Stanford Biology Open Maker Environment.",
    },
    {
      role: "High School",
      date: "March 2010 - March 2016",
      company: "Cheongshim International Academy",
      description:
        "Graduated with Egregia Cum Laude. Received merit based scholarship twice. Won Second Prize in Intel International Science Fair. Recognized as the top ten student researcher. Founded charity fund raising club Jo Quak Bo, volunteered school librarian duty for six years.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="text-[#F06000] tracking-spacewider text-custom-xlg font-bold font-sans">
          Resume
        </div>
        <div className="text-5xl font-bold_700 tracking-normal mt-5">
          More of my credentials.
        </div>
        <div className="text-custom-xxlg text-grey mt-5 font-lora_regular">
          Here are my work experiences and education.
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 mb-10 text-3xl font-bold text-[#F06000] font-open_sans">
        Work Experience
      </div>
      <div className="relative right-[140px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full" />
        {experiences.map((experience, index) => (
          <div key={index} className="flex justify-center items-start mb-10">
            <div className="w-1/3 flex flex-col items-end pr-5">
              <div className="text-right">
                <div className="font-bold text-lg">{experience.role}</div>
                <div className="text-gray-500">{experience.date}</div>
              </div>
            </div>
            <div className="w-[3%] flex justify-center relative">
              <MdWork className="text-white text-4xl z-10 p-1 bg-black rounded-full" />
            </div>
            <div className="w-1/3 pl-5">
              <div className="text-left">
                <div className="font-bold text-lg underline">
                  {experience.url ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </div>
                <div className="text-gray-500">{experience.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 mb-10 text-3xl font-bold text-[#F06000] font-open_sans">
        Background Education
      </div>
      <div className="relative right-[140px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full" />
        {BackgroundEducation.map((experience, index) => (
          <div key={index} className="flex justify-center items-start mb-10">
            <div className="w-1/3 flex flex-col items-end pr-5">
              <div className="text-right">
                <div className="font-bold text-lg">{experience.role}</div>
                <div className="text-gray-500">{experience.date}</div>
              </div>
            </div>
            <div className="w-[3%] flex justify-center relative">
              <MdWork className="text-white text-4xl z-10 p-1 bg-black rounded-full" />
            </div>
            <div className="w-1/3 pl-5">
              <div className="text-left">
                <div className="font-bold text-lg underline">
                  {experience.url ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </div>
                <div className="text-gray-500">{experience.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
