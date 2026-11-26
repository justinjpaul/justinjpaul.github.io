import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Carousel from "react-material-ui-carousel";
import { slides } from "../../../constants/about";
import { headerColor } from "../../../constants/shared";

export default function AboutCarousel() {
  return (
    <Carousel
      interval={8 * 1000}
      activeIndicatorIconButtonProps={{
        style: {
          color: headerColor,
        },
      }}
    >
      {slides.map(({ path, caption, alt }) => (
        <Box component="figure" key={path} sx={{ m: 0 }}>
          <AspectRatio ratio="4/3" objectFit="contain">
              <img src={path} alt={alt} loading="lazy" />
          </AspectRatio>
          <Typography
            component="figcaption"
            level="body-sm"
            sx={{ mt: 1, textAlign: "center" }}
          >
            {caption}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
}
