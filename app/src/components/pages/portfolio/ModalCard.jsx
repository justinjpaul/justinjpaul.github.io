import IconMappings from "./ProjectIcons";

import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Grid from "@mui/joy/Grid";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";

export default function ModalCard({ props }) {
  console.log("props", props);

  return (
    <Card
      variant="plain"
      sx={(theme) => ({
        background: "transparent",
        outline: "none",
        flexDirection: "column",
        flexWrap: "wrap",
        resize: "vertical",
        // gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
        transition: "transform 0.3s, border 0.3s",
        "& > *": { minWidth: "clamp(300px, 80vw, 1200px" },
      })}
    >
      <Grid container spacing={1}>
        <Grid sx={{ display: "flex" }} md={12} lg={4}>
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
            <Grid container spacing={0.5}>
              {props.skills.map((x, ind) => (
                <Grid key={`skills-${ind}-${x}`}>
                  <Chip
                    sx={{ backgroundColor: "grey" }}
                    variant="soft"
                    startDecorator={IconMappings[x]}
                    disabled
                  >
                    {x}
                  </Chip>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Grid>

        <Grid
          flexDirection="column"
          sx={{
            justifyContent: "center",
            display: "flex",
            background: "transparent",
          }}
          xs={12}
          sm={12}
          md={12}
          lg={8}
        >
          {/* <Card variant="soft"> */}
          <AspectRatio
            objectFit="contain"
            xs={{ backgroundColor: "transparent" }}
          >
            <img
              src={props.img}
              srcSet={props.img}
              loading="lazy"
              alt={`proj-${props.name}`}
            />
          </AspectRatio>
          {/* </Card> */}
        </Grid>
      </Grid>
    </Card>
  );
}
