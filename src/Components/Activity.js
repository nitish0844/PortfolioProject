import React from "react";

const Activity = () => {
  const activities = [
    {
      title: "Founder/Co-President",
      location: "Stanford Transhumanist Association",
      date: "March 2018 - Present",
      description:
        "Organized executive board members & meeting. Designed STA discussion event posters. Took record of STA meeting & discussion. Recruited Stanford students into club members.",
    },
    {
      title: "Webmaster",
      location: "Omicron Charter, Sigma Psi Zeta",
      date: "January 2018 - Present",
      link: "https://stanfordsyz.weebly.com/",
      linkName: "Sigma Psi Zeta",
      description:
        "Ran homepage for the biggest Asian interest sorority in campus. Publicized the organization's activity, redesigned user interface that doubled website traffic.",
    },
    {
      title: "Student Associate",
      location: "Lane Library, Stanford Medical Center",
      date: "March 2018 - Present",
      description:
        "Helped manage 10000+ books through returning, lending, and shelving books. Assisted library users at the front desk. Participated in library user statistics through Google Docs.",
    },
    {
      title: "Community Director",
      location: "Biology Interdisplinary Open Maker Environment, Stanford",
      date: "March 2003",
      link: "https://stanfordbiome.org/",
      linkName: "BIOME",
      description:
        "Fostered bioengineering community on campus through designing club tshirt. Organized the first Stanford Bioengineering Hackathon supported by Genspace, Opentrons, FBI, and other biotech companies",
    },
    {
      title: "Center player",
      location: "Stanford Intramural Women Basketball Team",
      date: "September 2016 - March 2017",
      description:
        "Participated in rigorous basketball training twice every week. Played in varsity basketball team during high school.",
    },
  ];

  return (
    <div className="relative h-full flex items-center justify-center pb-10">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-2xl font-semibold text-[#F06000] text-center">
          Activities
        </div>

        <div className="text-white text-center text-4xl font-bold mt-3">
          My positions during undergraduate.
        </div>

        <div className="text-[#BFBFBF] text-center text-lg font-bold mt-5">
          Summary of my leadership & extracurricular activities
        </div>

        {activities.map((activity) => (
          <div key={activity.title} className="mt-16">
            <div className="text-2xl font-semibold text-[#F06000] text-center">
              {activity.title}
            </div>

            <div className="text-[#6E7881] text-center text-lg font-medium mt-5">
              <span className="italic font-normal">{activity.location}</span> •{" "}
              {activity.date}
            </div>

            <div className="text-white text-center text-base font-normal mt-8">
              {activity.description.split(". ").map((sentence, index) => (
                <span key={index}>
                  {sentence}.
                  <br />
                </span>
              ))}
            </div>

            {activity.link && (
              <div className="text-blue-400 text-center text-base font-normal mt-4">
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {activity.linkName}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
