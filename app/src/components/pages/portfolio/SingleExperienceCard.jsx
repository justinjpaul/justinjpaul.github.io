import { List, ListItem, Typography } from "@mui/joy";
import BasicCard from "./BasicCard";

export default function SingleExperienceCard(props) {
  const cardProps = {
    variant: "plain",
  };

  const experienceProps = { ...props, cardProps };
  return (
    <BasicCard
      {...{
        ...experienceProps,
        name: experienceProps["role"],
        role: experienceProps["name"],
      }}
    >
      <List marker="circle">
        {props.bullets.map((bullet, ind) => (
          <ListItem key={`experience-bullet-${props.name}-${ind}`}>
            <Typography level="body-sm">{bullet}</Typography>
          </ListItem>
        ))}
      </List>
    </BasicCard>
  );
}
