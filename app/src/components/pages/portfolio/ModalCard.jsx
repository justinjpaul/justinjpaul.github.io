import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import BasicCard from "./BasicCard";

export default function ModalCard(props) {
  const cardProps = {
    variant: "plain",

    sx: {
      background: "transparent",
      outline: "none",
      flexDirection: "column",
      flexWrap: "wrap",
      resize: "vertical",
      gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
      transition: "transform 0.3s, border 0.3s",
      "& > *": { minWidth: "clamp(300px, 80vw, 1200px" },
    },
  };

  const modalProps = { ...props, cardProps };
  return (
    <BasicCard {...modalProps}>
      <Sheet>
        <AspectRatio
          variant="plain"
          objectFit="contain"
          sx={{ backgroundColor: "transparent", background: "transparent" }}
        >
          <figure>
            <img
              style={{ backgroundColor: "transparent" }}
              className="modal-project-img"
              src={props.img}
              srcSet={props.img}
              loading="lazy"
              alt={`proj-${props.name}`}
            />
          </figure>
        </AspectRatio>
      </Sheet>
      <Typography level="body-md">{props.description}</Typography>
    </BasicCard>
  );
}
