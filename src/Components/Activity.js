import React from "react";

const Activity = () => {
  const activities = [
    {
      title: "Competitions",

      description: `Gresham Barlow Science Expo in Computer Science, Competitor, (9th-11th) 
Won 3rd place with my presentation on  for forest fire research [see below]
Northwest Science Expo, Competitor, (9th-11th) 
Won Pacific Northwest Scientist Award for forest fire research [see be;pw]
Gresham Barlow Science Expo in Medicine, Competitor, (9th-11th) 
Won 1st place overall for pancreatic cancer project
Northwest Science Expo in Medicine, Competitor, (9th-11th) 
Won 2nd place overall for pancreatic cancer project 
HOSA, Competitor, (9th-11th) 
Won 1st for my Research Poster on pancreatic cancer research 
Qualified for International Leadership Conference in Dallas, Texas
Name of Cybersecurity competition, Contestant, (grade) 
Formed Team Oregon with 5 friends
Hacked in the nationwide competition cyberpatriot, a competition designed for high school students to demonstrate their skills in computer hacking
Won 2nd in West Coast`,
    },
    {
      title: "Science Fair Research",

      description: `
Applying CNN-LSTM to Predict Forest Fires  	
 Integrated various Machine Learning algorithms to monitor the propagation of fires within forested regions. 
The fusion of Convolutional Neural Networks (CNN), Long Short-Term Memory networks (LSTM), and Sand-cat Swarm Optimization (SCSO) was used to develop this model.  
Notably, this approach exhibited superior efficacy when compared to conventional methods, marking a significant stride towards proactive fire management and prevention.

PanCan Stage Identifier: A Transfer Learning Based Multi- Tumor Classification Framework Approach For Pancreatic Tumor Stage and Substage Classification
In  pancreatic  cancer,  Staging  and  sub-staging  are essential for planning treatment. However, limited work concentrated on the analysis of CT images for pancreatic cancer; in addition, no works classified the sub-stages of PC from CT images. This project uses various machine learning algorithms to classify tumor stages &sub-stages, which are crucial for planning appropriate  treatment  plans.
The methodology involves machine learning, leveraging preprocessing of abdominal CT images, transfer learning for tumor classification, and pancreas segmentation through LSTUN segmentation
`,
    },

    {
      title: "Additional Computer Science Projects ",

      description: `

Created Shelter Connect & PedAppl Mobile Application which I have discussed below.

`,
    },
    {
      title: "Shelter Connect",

      description: `

Developed a fully functioning application that allows local users to view nearby shelters and what products they accept or need, Used javascript and XCode to create the app,
Some features included resource locator, AI integrated chat bot, and various health and crisis lines to help the homelessness society.

`,

      embedId: "dimlCS554RI",

      isEmbed: true,
    },

    {
      title: "PedAppl",

      description: `Developed a fully functioning application that allows users to report local street faults, Many faulty streets, sidewalks, broken traffic/pedestrian crossing lights that should be reported is now made a lot easier using PedAppl as requests can be sent to the local mayor directly. 
Programming using swift and XCode apple app developer.
`,

      embedId: "10z_x8WQgCQz7lhfCA8Phx02dgoLDRMA-",

      isEmbedGoogle: true,
    },

    {
      title: "Community Service",

      description: `Royal Family Kids Camp, Volunteer, 65+ hours, (10th-11th) 
Supported young children by volunteering as a full time camp counsler and assisting children in various outdoor activities such as rowing, swimming, ziplining, arts and crafts, etc… Through this organization for children in foster care
Cedar Sinai Park, Volunteer, 8+ hours, (9th-11th) 
Worked in this assisted living facility and supported residents by helping the residents move and managing games such as beach ball and bingo
Blanchet House, Volunteer, 10 hours, (9th-10th) 
Served food in downtown Portland for the homeless
Oregon Food Bank
`,
    },

    {
      title: " STEM Teaching and Writing",

      description: `Oregon Museum of Science and Technology (OMSI) Teen Science Alliance, Volunteer / Leader, (9th-11th)  - 
170+ hours
Teach kids at OMSI brief science lessons through demos like how sunscreen works. 
Created educational videos on topics including photosynthesis for kids to learn at OMSI
Demonstrated leadership and commitment not only worked in the physics lab but also taking on managerial responsibilities.
Bit by Bit Coding, Marketing Volunteer, (9th-11th) 
Created social media posts weekly/biweekly for a company dedicated to helping students learn more about coding languages
Helped renovate/launch Bit by Bit’s newest project, Form and Function, which is a branch of the company that teaches middle schoolers introductory coding/tech.
STEM Like a Girl Workshop Volunteer, 9th-10th	
Assisted at monthly STEM workshops as the design challenge mentor
Workshops consisted of teaching 1 hour javascript game creation through code.org
PSU Center for Entrepreneurship, Workshop Volunteer, (9th-11th) 
Facilitated the JavaScript tutorial workshops during STEM day events which aimed to introduce a group of 14-15 students to the fundamentals of JavaScript programming, which required about 2 hours in total per session.
Women in Science Blog, Contributor, (9th-11th) 
Dedicated my blog posts to amplifying the voices of women in science.
Conducted interviews with accomplished female scientists and engaged in insightful discussions to write engaging narratives about their experiences. 
Leveraged my writing to shed light on the experiences, achievements, and contributions of these women to their respective fields, inspiring readers to pursue careers in STEM.
TechGirlz Workshop, Volunteer, (9th-11th) 
Assisted with the instruction of 2 web design workshops and 1 “Intro to Coding” workshop through the TechGirlz organization
45 minute workshops 
UPchieve, Tutor, (9th-11th) 
Tutored students grades 5-8 in STEM subjects including biology, all levels of math until calculus
Tutored 7 Students weekly for 1 hour sessions
`,
    },

    {
      title: "Non profit Service",

      description: `
      
      Prime Promotion, Founder, (grades).
	▪	Got together with 3 friends and started an organization that has helped 20+ small businesses build their customer base via social media applications
	▪	helped small businesses expand their customer base by improving advertising via social media and other marketing platforms. 
	▪	Created over 20 social media pages (including customized posts) and 6 websites. 
	▪	Sample Organizations that were serviced. 
	▪	New Day Real Estate Solutions (website creation + instagram page). 
	▪	Unger's Farm Store (facebook creation, website revamp). 
	▪	Evans Farm (commercial promotion). 
	▪	La Porteña (instagram page). 
	▪	Deck Family Farm (facebook, instagram, website revamp). 
	▪	Forest Candy (instagram + whatsapp).
`,

      embedId: "1IWseZU126CDIWJDkPj2bicT0j5bQHuM6",

      isEmbedGoogle: true,
    },

    {
      title: "Internships",

      description: `Ziply Fibers, Intern, (10-11).

	•	Computer science intern under networking company.
	•	Worked 4 hours part time for 2 summers, and worked 2 hours weekly during school year.
	•	Performing simple data analysis tasks using tools such as Excel, Python, and R.
	•	Assisting with writing, debugging, and testing code under the supervision of more experienced developers.
	•	Helping to update and maintain websites, including content updates and basic front-end modifications.
International Institute of Information Technology, Intern (11).
	•	Interned part time 5 hours in the summer.
	•	Worked in imaging and segmentation branch, helped debug segmentation algorithms + test on various new datasets.
`,
    },

    {
      title: "Prime Promotion, Founder, (grades)",

      description: `
      
     Got together with 3 friends and started an organization that has helped 20+ small businesses build their customer base via social media applications
helped small businesses expand their customer base by improving advertising via social media and other marketing platforms. 
Created over 20 social media pages (including customized posts) and 6 websites
Sample Organizations that were serviced 
New Day Real Estate Solutions (website creation + instagram page)
Unger's Farm Store (facebook creation, website revamp)
Evans Farm (commercial promotion)
La Porteña (instagram page)
Deck Family Farm (facebook, instagram, website revamp)
Forest Candy (instagram + whatsapp)
`,

      embedId: "1IWseZU126CDIWJDkPj2bicT0j5bQHuM6",

      isEmbedGoogle: true,
    },
  ];

  return (
    <div className="relative h-full flex items-center justify-center pb-10">
      <div className="absolute inset-0  opacity-75"></div>
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="text-2xl font-semibold text-[#F06000] text-center">
          Activities
        </div>

        <div className="text-black text-center text-lg font-bold mt-5">
          Summary of my leadership & extracurricular activities
        </div>

        {activities.map((activity) => (
          <div key={activity.title} className="mt-16">
            <div className="text-2xl font-semibold text-[#F06000] text-center">
              {activity.title}
            </div>

            <div className="text-black text-left text-base font-normal mt-8 leading-[46px]">
              {activity.description.split(". ").map((sentence, index) => (
                <span key={index}>
                  {sentence}.
                  <br />
                </span>
              ))}
            </div>

            {activity?.isEmbed && (
              <div className="flex flex-row items-center justify-center mt-7">
                <iframe
                  src={`https://www.youtube.com/embed/${activity?.embedId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-[70vh] w-[90vw] md:h-[70vh] md:w-[75vw]"
                />
              </div>
            )}

            {activity?.isEmbedGoogle && (
              <div className="flex flex-row items-center justify-center mt-7">
                <iframe
                  src={`https://drive.google.com/file/d/${activity?.embedId}/preview`}
                  allow="autoplay"
                  className="h-[70vh] w-[90vw] md:h-[70vh] md:w-[75vw]"

                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
