import { Typography } from "@mui/joy";
import BasicCard from "./BasicCard";

export default function SingleProjectCard(props) {
  return (
    <BasicCard {...props}>
      <Typography level="body-md">{props.description}</Typography>
    </BasicCard>
  );
}
