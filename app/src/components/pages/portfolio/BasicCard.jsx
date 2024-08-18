import LinkIcon from "@mui/icons-material/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import IconMappings from "./ProjectIcons";

const defaultCardProps = {
  variant: "plain",
  orientation: "vertical",
  sx: {
    "&:hover": {
      boxShadow: "lg",
      borderColor: "hard.outlinedHoverBorder",
      cursor: "pointer",
    },
    justifyContent: "space-between",
    width: "100%",
  },
};
export default function BasicCard(props) {
  return (
    <Card
      {...(props.cardProps !== undefined ? props.cardProps : defaultCardProps)}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        }
      }}
    >
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid>
            <Typography level="title-lg">{props.name}</Typography>
          </Grid>
          <Grid>
            <Typography level="title-sm">
              <i>{props.date}</i>
            </Typography>
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography level="title-sm">{props.role}</Typography>
          {props.location && (
            <Typography level="title-sm">{props.location}</Typography>
          )}
        </div>

        <Divider />
        {props.children}
        <Grid container spacing={1}>
          {props.links &&
            props.links.map((x, ind) => (
              <Grid key={`links-${ind}-${x}`}>
                <Typography startDecorator={<LinkIcon />}>
                  <a href={x.url} target="_blank" rel="noreferrer">
                    {x.name}
                  </a>
                </Typography>
              </Grid>
            ))}
        </Grid>
      </CardContent>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Grid container spacing={0.5}>
          {props.skills &&
            props.skills.map((x, ind) => (
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
