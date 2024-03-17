import Avatar from "@mui/joy/Avatar";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { updateIcons } from "../../../constants/updates";

export default function UpdateEntry({ update }) {
  return (
    <ListItem>
      <ListItemDecorator sx={{ verticalAlign: "top" }}>
        <Avatar
          variant="outlined"
          src={updateIcons[update.category].src}
          alt={updateIcons[update.category].alt}
        >
          {updateIcons[update.category].srcImg}
        </Avatar>
      </ListItemDecorator>
      <ListItemContent sx={{ textAlign: "left" }}>
        <Typography level="title-sm">{update.description}</Typography>
        <Typography level="body-sm">
          {update.date_month} {update.date_day}
        </Typography>
      </ListItemContent>
    </ListItem>
  );
}
