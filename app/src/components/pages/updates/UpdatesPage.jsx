import Header from "../../shared/Header";
import "./updates.css";

const emojiMap = {
  chess: "♟️",
  michigan: (
    <img
      className="update-text"
      width="auto"
      height="auto"
      alt="〽️"
      src="https://umich.edu/favicon.ico"
    ></img>
  ),
  cs: "🧑‍💻",
};

const updates = [
  {
    date: "Oct 14, 2019",
    category: "chess",
    description: (
      <>
        First{" "}
        <a
          href="https://ratings.fide.com/title_norms.phtml?details=1&id=2086581&title=IM"
          rel="noreferrer"
          target="_blank"
        >
          IM Norm
        </a>
      </>
    ),
  },
  {
    date: "Jan 29, 2021",
    category: "michigan",
    description: <>Accepted to Michigan!</>,
  },
  {
    date: "Dec 31, 2022",
    category: "michigan",
    description: (
      <>
        Dean's Honor{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2022/07/Fall-2021-DHL-Website-Amended-07.11.22.pdf"
        >
          List
        </a>{" "}
        - Fall
      </>
    ),
  },
  {
    date: "Mar 20, 2022",
    category: "michigan",
    description: (
      <>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://honors.umich.edu/awards.php#branstromprize:~:text=back%20to%20top-,William%20J.%20Branstrom%20Freshman%20Prize,-First%2Dterm%20freshmen"
        >
          Branstrom Freshman Prize
        </a>
      </>
    ),
  },
  {
    date: "Apr 30, 2022",
    category: "michigan",
    description: (
      <>
        Dean's Honor{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2022/06/WN_2022_DHL_Website_06.07.22.pdf"
        >
          List
        </a>{" "}
        - Winter
      </>
    ),
  },
  {
    date: "May 30, 2022",
    category: "chess",
    description: (
      <>
        Second{" "}
        <a
          href="https://ratings.fide.com/title_norms.phtml?details=1&id=2086581&title=IM"
          rel="noreferrer"
          target="_blank"
        >
          IM Norm
        </a>
      </>
    ),
  },
  {
    date: "May 31, 2022",
    category: "cs",
    description: (
      <>
        First day of my CS/DS internship at{" "}
        <a rel="noreferrer" target="blank" href="https://www.dewberry.com/">
          Dewberry!
        </a>
      </>
    ),
  },
  {
    date: "Dec 31, 2022",
    category: "michigan",
    description: (
      <>
        Dean's Honor{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2023/04/FALL_2022_DHL_Website_Amended-04.18.23.pdf"
        >
          List
        </a>{" "}
        - Fall
      </>
    ),
  },

  {
    date: "Jan 1, 2023",
    category: "michigan",
    description: (
      <>
        Started as a machine learning student researcher for MDP (sponsored by{" "}
        <a rel="noreferrer" target="blank" href="https://www.proquest.com/">
          ProQuest
        </a>
        ) to predict academic research success
      </>
    ),
  },
  {
    date: "Mar 19, 2023",
    category: "michigan",
    description: (
      <>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://honors.umich.edu/awards.php#angells"
        >
          James B. Angell Scholar
        </a>
      </>
    ),
  },
  {
    date: "Apr 30, 2022",
    category: "michigan",
    description: (
      <>
        Dean's Honor{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2023/11/WN-2023_DHL-Website_Amended_10.31.23.pdf"
        >
          List
        </a>{" "}
        - Winter
      </>
    ),
  },
  {
    date: "May 1, 2023",
    category: "cs",
    description: (
      <>
        Returned for my second internship at{" "}
        <a rel="noreferrer" target="blank" href="https://www.dewberry.com/">
          Dewberry!
        </a>
      </>
    ),
  },
  {
    date: "Nov 19, 2023",
    category: "cs",
    description: (
      <>
        Won best cloud implementation at MHacks 16. Devpost{" "}
        <a
          rel="noreferrer"
          target="blank"
          href="https://devpost.com/software/gisthub"
        >
          here!
        </a>
      </>
    ),
  },
].reverse();

export default function UpdatesPage() {
  const page = "updates";

  return (
    <>
      <Header page={page} />
      <div className="update-container main-body" height="90%">
        {updates.map((update, index) => {
          return (
            <>
              <span className="update first" key={`update-date-${index}`}>
                {`${update.date}`}
              </span>
              <span className="update" key={`update-emoji-${index}`}>
                {emojiMap[update.category]}
              </span>
              <span className="update" key={`update-description-${index}`}>
                {update.description}
              </span>
            </>
          );
        })}
      </div>
    </>
  );
}
