import { experiences } from "../../../constants/experiences";
import SingleExperienceCard from "./SingleExperienceCard";

export default function Experiences() {
  return (
    <>
      {experiences.map((exp, i) => {
        return (
          <div id={`experience-${exp.unique}`} key={`experience-${i}`}>
            <SingleExperienceCard {...exp} /> <br />
          </div>
        );
      })}
    </>
  );
}
