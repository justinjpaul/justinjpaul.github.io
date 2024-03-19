import { useState } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import { slides } from "../../../constants/about";
import CardCover from "@mui/joy/CardCover";
import AspectRatio from "@mui/joy/AspectRatio";
import { useMediaQuery } from "@mui/material";
import { headerColor } from "../../../constants/shared";
import Carousel from "react-material-ui-carousel";

export default function AboutCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Carousel
        onChange={handleStepChange}
        interval={8 * 1000}
        activeIndicatorIconButtonProps={{
          style: {
            color: headerColor,
          },
        }}
        navButtonsAlwaysInvisible
      >
        {slides.map((step, index) => (
          <div key={`${index}-${step.label}`}>
            <Box sx={{ position: "relative" }}>
              <AspectRatio ratio="4/3">
                <figure>
                  <img
                    src={step.path}
                    srcSet={step.path}
                    loading="lazy"
                    alt={step.alt}
                  />
                </figure>
              </AspectRatio>
              <CardCover
                className="gradient-cover"
                sx={{
                  "&:hover, &:focus-within": {
                    opacity: 1,
                  },
                  opacity: isSmallScreen ? 1 : 0,
                  transition: "0.1s ease-in",
                  background:
                    "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                }}
              >
                <div>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Typography
                      level={isSmallScreen ? "body-sm" : "h4"}
                      sx={{
                        color: "#fff",
                        textOverflow: "ellipsis",
                        //   overflow: "hidden",
                        display: "block",
                      }}
                    >
                      {slides[activeStep].caption}
                    </Typography>
                  </Box>
                </div>
              </CardCover>
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
