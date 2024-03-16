export const updateIcons = {
  chess: {
    alt: "♟️",
    src: "chess",
    srcImg: (
      // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-200 -200 800 800">
        <path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z" />
      </svg>
    ),
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
    // <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    srcImg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z" />
      </svg>
    ),
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
    date_year: 2022,
    date_month: "May",
    date_day: 31,
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
        Started as a machine learning student researcher for MDP (sponsored by{" "}
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
        Returned for my second internship at{" "}
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
    date_month: "May",
    date_day: 13,
    category: "cs",
    description: (
      <>
        First day of my MLE internship at{" "}
        <a href="https://remitly.com" target="_blank" rel="noreferrer">
          Remitly
        </a>{" "}
        on the fraud detection team!
      </>
    ),
  },
].reverse();
