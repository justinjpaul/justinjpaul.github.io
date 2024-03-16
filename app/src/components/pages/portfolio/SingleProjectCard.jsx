import IconMappings from "./ProjectIcons";

import AspectRatio from "@mui/joy/AspectRatio";
// import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Launch from "@mui/icons-material/Launch";
import LinkIcon from "@mui/icons-material/Link";
// import FaceIcon from "@mui/icons-material/Face";
// import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";

// TODO: update projects.json with preferred and backup link... for now github repo is primary link
// TODO: update hover handling
// TODO: fix mobile view
// TODO: fix card look

export default function SingleProjectCard({ props, setModalFunction }) {
  return (
    <Card
      variant="plain"
      orientation="vertical"
      sx={{
        backgroundColor: "transparent",
        bordorColor: "black",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
          cursor: "pointer",
        },
        justifyContent: "space-between",
        width: "100%",
      }}
      onClick={setModalFunction}
    >
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid>
            <Typography level="title-lg">{props.name}</Typography>
          </Grid>
          <Grid>
            <Typography level="title-sm">{props.date}</Typography>
          </Grid>
        </Grid>
        <Typography level="title-sm">{props.role}</Typography>

        <Divider />
        <Typography level="body-md">{props.description}</Typography>
        <Grid container spacing={1}>
          {props.tags.map((x, ind) => (
            <Grid key={`links-${ind}-${x}`}>
              <Typography startDecorator={<LinkIcon />}>
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Grid container spacing={0.5}>
          {props.skills.map((x, ind) => (
            <Grid key={`skills-${ind}-${x}`}>
              <Chip variant="soft" startDecorator={IconMappings[x]} disabled>
                {x}
              </Chip>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
