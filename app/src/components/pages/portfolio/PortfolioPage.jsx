import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Typography,
  accordionClasses,
} from "@mui/joy";
import Experiences from "./Experiences";
import Projects from "./Projects";

// import GitHubCalendar from 'react-github-calendar'

// function GitDisplay() {
//     return (
//         <>
//             <h1>GitHub Profile</h1>
//             <GitHubCalendar username="justinjpaul"/>
//         </>
//     )
// }

const portfolioSections = [
  { name: "Experience", defaultExpanded: false, comp: <Experiences /> },
  {
    name: "Projects",
    defaultExpanded: true,
    comp: <Projects />,
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* <GitDisplay /> */}
      <AccordionGroup
        disableDivider
        sx={{
          [`& .${accordionClasses.root}`]: {
            marginTop: "0.5rem",
            transition: "0.2s ease",
            '& button:not([aria-expanded="true"])': {
              transition: "0.2s ease",
              paddingBottom: "0.625rem",
            },
            "& button:hover": {
              bgColor: "transparent",
              color: "red",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: "background.level1",
            borderRadius: "md",
            borderBottom: "1px solid",
            borderColor: "background.level2",
          },
          '& [aria-expanded="true"]': {},
          paddingLeft: "0px",
        }}
      >
        {portfolioSections.map((section, ind) => (
          <Accordion
            key={`portflio-section-${ind}`}
            defaultExpanded={section.defaultExpanded}
            disabled={section.disabled}
          >
            <AccordionSummary>
              <Typography level="h1" id={section.name}>
                {section.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{section.comp}</AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </>
  );
}
