import React from "react";

const Activity = () => {
  const activities = [
    {
      title: "PSU Center for Entrepreneurship",
      location: "Workshop Volunteer",
      date: "(9th-11th)",
      description:
        "Facilitated the JavaScript tutorial workshops during STEM day events which aimed to introduce a group of 14-15 students to the fundamentals of JavaScript programming, which required about 2 hours in total per session.",
    },
    {
      title: "Women in Science Name of Blog",
      location: "Contributor",
      date: "(9th-11th)",
      description: `
 Dedicated my blog posts to amplifying the voices of women in science.
Conducted interviews with accomplished female scientists and engaged in insightful discussions to write engaging narratives about their experiences.
 Leveraged my writing to shed light on the experiences, achievements, and contributions of these women to their respective fields, inspiring readers to pursue careers in STEM.
`,
    },
  ];

  return (
    <div className="relative h-full flex items-center justify-center pb-10">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-2xl font-semibold text-[#F06000] text-center">
          Activities
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
