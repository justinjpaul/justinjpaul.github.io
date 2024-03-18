import IconMappings from "./ProjectIcons";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";

const defaultCardProps = {
  variant: "soft",
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
        <Typography level="title-sm">{props.role}</Typography>

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
                <Chip variant="plain" startDecorator={IconMappings[x]} disabled>
                  {x}
                </Chip>
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
