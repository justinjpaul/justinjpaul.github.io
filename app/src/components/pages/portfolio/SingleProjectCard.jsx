import IconMappings from "./ProjectIcons";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";

export default function SingleProjectCard({ props, setModalFunction }) {
  return (
    <Card
      variant="plain"
      orientation="vertical"
      sx={{
        "&:hover": {
          boxShadow: "lg",
          borderColor: "hard.outlinedHoverBorder",
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
