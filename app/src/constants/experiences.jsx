export const experiences = [
  {
    role: "VP of Finance, 3x Project Leader",
    date: "Sep 2021 - April 2023",
    name: "Michigan Data Science Team",
    location: "Ann Arbor, MI",
    bullets: [
      "Raised over $5000 to finance and manage a 200+ club members",
      <>Led Movie Recommender, SEC Insider Trading, and Webscraping projects</>,
    ],
    skills: [
      "Python",
      "Data Engineering",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],
    unique: "mdst",
  },
  {
    role: "Computer/Data Science Intern",
    date: "May 2022 - Aug 2022",
    name: "Dewberry",
    location: "Fairfax, VA",
    bullets: [
      "Created V2R utilizing concurrent programming that cut down the runtime of existing tool from 24 hours to 8 minutes",
      "Developed a metadata file explorer system to streamline analysis of cluttered network drives",
    ],
    skills: ["Go", "Data Structures", "Concurrent Programming", "Docker"],
    unique: "dewberry22",
  },
  {
    role: "Software Engineering Development Intern",
    date: "May 2023 - Aug 2023",
    name: "Dewberry",
    location: "Fairfax, VA",
    bullets: [
      <>
        Further developed custom vector to raster interpolation routines (V2R)
        tool created in 2022 as an internal cloud computing service
      </>,
      <>
        Developed a cloud-based management system that accommodates automatic
        model generation, rounds of QA/QC using a microservices architecture
        consisting of a react frontend, Golang RESTful API, postgres database,
        and two tile servers
      </>,
      <>
        Collaborated with a team of four to increase modeling capabilities from
        a scale of 10's to 1000's, leading a work stream of two new hires
      </>,
    ],
    skills: [
      "ReactJS",
      "PostgreSQL",
      "Cloud Computing",
      "Microservices Architecture",
    ],
    unique: "dewberry23",
  },
  {
    role: "Machine Learning Student Researcher for ProQuest",
    date: "Jan 2023 - Dec 2023",
    name: "Multidisciplinary Design Program",
    location: "Ann Arbor, MI",
    bullets: [
      "Built an end-to-end system to train/test/validate machine learning models over ~10 TB data from academic publication datasets",
      "Applied proof-of-concept to identify research areas with promising growth potential",
    ],
    skills: ["Python", "Dask", "Big Data"],
    unique: "mdp",
  },
  {
    role: "Machine Learning Engineering Intern",
    date: "May 2024 - Aug 2024",
    name: "Remitly",
    location: "Seattle, WA",
    bullets: [
      "Led the design and execution of an experiment to assess model overfitting in transaction risk assessment after a fraud wave, identifying a region with increased customer friction",
      "Conducted an experiment to evaluate the impact of incorporating recent training data on overall model performance, revealing the importance of precise dataset curation",
      "Created a scalable model deployment and tracking workflow, facilitating the analysis of 100+ models across 3 research projects",
      "Assisted in building and maintaining a Spark-like machine learning framework for model training, testing, and deployment",
    ],
    skills: ["Python", "Machine Learning"],
    unique: "remitlyintern",
  },
].reverse();
