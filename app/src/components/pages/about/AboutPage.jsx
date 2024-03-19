import AboutCarousel from "./AboutCarousel";
import Intro from "./Intro";
import Grid from "@mui/joy/Grid";

export default function AboutPage() {
  return (
    <Grid container spacing={4} sx={{ flexGrow: 1 }}>
      <Grid lg={5} md={5.5} sm={12} xs={12}>
        <AboutCarousel />
      </Grid>

      <Grid lg={7} md={6.5} sm={12} xs={12}>
        <Intro />
      </Grid>
    </Grid>
  );
}
