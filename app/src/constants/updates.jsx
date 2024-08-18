import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PedalBikeIcon from "@mui/icons-material/PedalBike";

export const updateIcons = {
  chess: {
    alt: "♟️",
    src: "chess",
    srcImg: <FontAwesomeIcon icon={faChessKnight} />,
  },
  michigan: {
    src: "https://umich.edu/favicon.ico",
    alt: "〽️",
  },
  cs: {
    cred: (
      <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">
        Coding icons created by juicy_fish - Flaticon
      </a>
    ),
    srcImg: <img src="./pics/cs.png" alt="CS" width={30} height={30}></img>,
    alt: "CS",
  },
  bike: {
    srcImg: <PedalBikeIcon />,
    alt: "🚲",
  },
};

export const updates = [
  {
    date_year: 2019,
    date_month: "Oct",
    date_day: 14,
    category: "chess",
    description: (
      <>
        First&nbsp;
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
    date_year: 2021,
    date_month: "Jan",
    date_day: 29,
    category: "michigan",
    description: <>Accepted to Michigan!</>,
  },
  {
    date_year: 2021,
    date_month: "Dec",
    date_day: 31,
    category: "michigan",
    description: (
      <>
        Dean's Honor&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2022/07/Fall-2021-DHL-Website-Amended-07.11.22.pdf"
        >
          List
        </a>
        &nbsp;(1)
      </>
    ),
  },
  {
    date_year: 2022,
    date_month: "Mar",
    date_day: 20,
    category: "michigan",
    description: (
      <>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://honors.umich.edu/awards.php#branstromprize:~:text=back%20to%20top-,William%20J.%20Branstrom%20Freshman%20Prize,-First%2Dterm%20freshmen"
        >
          William J. Branstrom Freshman Prize
        </a>
      </>
    ),
  },
  {
    date_year: 2022,
    date_month: "Apr",
    date_day: 30,
    category: "michigan",
    description: (
      <>
        Dean's Honor&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2022/06/WN_2022_DHL_Website_06.07.22.pdf"
        >
          List
        </a>
        &nbsp;(2)
      </>
    ),
  },
  {
    date_year: 2022,
    date_month: "May",
    date_day: 30,
    category: "chess",
    description: (
      <>
        Second&nbsp;
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
    date_year: 2022,
    date_month: "May",
    date_day: 31,
    category: "cs",
    description: (
      <>
        First day of my CS/DS internship at&nbsp;
        <a rel="noreferrer" target="_blank" href="https://www.dewberry.com/">
          Dewberry!
        </a>
      </>
    ),
  },
  {
    date_year: 2022,
    date_month: "Dec",
    date_day: 31,
    category: "michigan",
    description: (
      <>
        Dean's Honor&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2023/04/FALL_2022_DHL_Website_Amended-04.18.23.pdf"
        >
          List
        </a>
        &nbsp;(3)
      </>
    ),
  },

  {
    date_year: 2023,
    date_month: "Jan",
    date_day: 1,
    category: "michigan",
    description: (
      <>
        Started as a machine learning student researcher for MDP (sponsored
        by&nbsp;
        <a rel="noreferrer" target="blank" href="https://www.proquest.com/">
          ProQuest
        </a>
        ) to predict academic research growth
      </>
    ),
  },
  {
    date_year: 2023,
    date_month: "Mar",
    date_day: 19,
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
    date_year: 2023,
    date_month: "Apr",
    date_day: 30,
    category: "michigan",
    description: (
      <>
        Dean's Honor&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2023/11/WN-2023_DHL-Website_Amended_10.31.23.pdf"
        >
          List
        </a>
        &nbsp;(4)
      </>
    ),
  },
  {
    date_year: 2023,
    date_month: "May",
    date_day: 1,
    category: "cs",
    description: (
      <>
        Returned for my second internship at&nbsp;
        <a rel="noreferrer" target="blank" href="https://www.dewberry.com/">
          Dewberry!
        </a>
      </>
    ),
  },
  {
    date_year: 2023,
    date_month: "Nov",
    date_day: 19,
    category: "cs",
    description: (
      <>
        Won best cloud implementation at MHacks 16. Devpost&nbsp;
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
  {
    date_year: 2023,
    date_month: "Dec",
    date_day: 31,
    category: "michigan",
    description: (
      <>
        Dean's Honor&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2024/03/FALL_2023_DHL_Website_Amended_03.01.24.pdf"
        >
          List
        </a>
        &nbsp;(5)
      </>
    ),
  },
  {
    date_year: 2024,
    date_month: "Mar",
    date_day: 6,
    category: "michigan",
    description: <>Accepted into SUGS (accelerated master's program) in CS</>,
  },
  {
    date_year: 2024,
    date_month: "Mar",
    date_day: 12,
    category: "bike",
    description: <>Crossed 500 lifetime miles biking!</>,
  },
  {
    date_year: 2024,
    date_month: "Mar",
    date_day: 24,
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
    date_year: 2024,
    date_month: "Apr",
    date_day: 24,
    category: "michigan",
    description: (
      <>
        Dean's Honor&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://studentawards.engin.umich.edu/wp-content/uploads/sites/17/2024/05/FALL_2023_DHL_Website_Amended_05.02.24.pdf"
        >
          List
        </a>
        &nbsp;(6)
      </>
    ),
  },
  {
    date_year: 2024,
    date_month: "May",
    date_day: 14,
    category: "cs",
    description: (
      <>
        First day of my Machine Learning Engineering Internship at&nbsp;
        <a href="https://remitly.com" target="_blank" rel="noreferrer">
          Remitly
        </a>
        &nbsp;on the fraud detection team!
      </>
    ),
  },
  {
    date_year: 2024,
    date_month: "Jun",
    date_day: 1,
    category: "bike",
    description: <>Biked 36.3 mile loop around Lake Washington!</>,
  },
  {
    date_year: 2024,
    date_month: "Aug",
    date_day: 14,
    category: "chess",
    description: <>Third (and final) IM Norm</>,
  },
].reverse();
