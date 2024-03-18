export const projects = [
  {
    name: "Webscraping",
    ranking: 5,
    date: "(Winter '23)",
    role: "Project Leader",
    description:
      "An application that assists University of Michigan students in finding professors who lead labs in their areas of interest.",
    skills: ["Python", "R", "HTML/CSS", "Webscraping"],
    img: "./pics/webscraping_app2.png",
    links: [
      {
        name: "Repo",
        url: "https://github.com/MichiganDataScienceTeam/W23-Webscraping",
      },
      {
        name: "Article",
        url: "https://docs.google.com/document/d/1uVD5nvpA0lg9E8tE9khuEQDlwCwHKgrHGqtvzKe2JoA/",
      },
    ],
    unique: "webscrape",
  },
  {
    name: "SEC Insider Trading",
    ranking: 3,
    date: "(Fall '22)",
    role: "Project Leader",
    description:
      "A data analysis of SEC filings from Q1 of 2020 to predict instances of insider trading.",
    skills: ["Python", "Pandas", "NumPy"],
    img: "./pics/insider_trading.png",
    links: [
      {
        name: "Repo",
        url: "https://github.com/MichiganDataScienceTeam/insider-trading",
      },
    ],
    unique: "sec-insider",
  },
  {
    name: "Movie Recommender",
    ranking: 3,
    date: "(Winter '22)",
    role: "Project Leader",
    description:
      "Created a movie recommendation system that uses an interactive quiz to provide customized movie recommendations to users.",
    skills: ["Python", "Machine Learning", "KNN", "Matrix Factorization"],
    img: "./pics/movies_latent.png",
    links: [
      {
        name: "Repo",
        url: "https://github.com/MichiganDataScienceTeam/movie-recommendations",
      },
    ],
    unique: "movies",
  },
  {
    name: "Vector 2 Raster",
    ranking: 7,
    date: "(Summer '22)",
    role: "Computer/Data Science Intern",
    description:
      "Custom raster interpolation routines utilizing concurrent programming that cut down the existing tool from 24 hours to 8 minutes. The tool has command line functionality and is publicly available on GitHub.",
    skills: ["Go", "Data Structures", "Concurrent Programming"],
    img: "./pics/v2r.png",
    links: [
      {
        name: "Repo",
        url: "https://github.com/dewberry/v2r",
      },
    ],
    unique: "v2r",
  },
  {
    name: "GistHub",
    ranking: 10,
    date: "(Fall '23)",
    role: "Hacker",
    description:
      "An AI-powered colaborative note-taking app. We made this at MHacks 16 in just 24 hours, and won the best cloud implementation prize!",
    skills: ["MongoDB", "Google Cloud", "Flask", "React", "UM GPT"],
    img: "./pics/gisthub.jpg",
    links: [
      {
        name: "Repo",
        url: "https://github.com/justinjpaul/gisthub",
      },
      {
        name: "Devpost",
        url: "https://devpost.com/software/gisthub",
      },
    ],
    unique: "gisthub",
  },
].toSorted((a, b) => b.ranking - a.ranking);
