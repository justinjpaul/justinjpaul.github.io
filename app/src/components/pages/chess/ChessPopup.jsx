import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Sheet, Stack, Typography } from "@mui/joy";
import { headerColor } from "../../../constants/shared";
import { formatDate } from "../../shared/utils";

const responsiveTitleStyle = {
  fontSize: "calc(13px+.5vw)",
  color: "inherit",
};
const responsiveBulletStyle = {
  fontSize: "calc(12px+.5vw)",
};

export default function ChessPopup({ dataPoint, props, link }) {
  const RatingChangeComponent = () => {
    if (
      dataPoint["pre-rating"] === undefined ||
      dataPoint["post-rating"] === undefined
    ) {
      return <></>;
    }
    const ratingChange = dataPoint["post-rating"] - dataPoint["pre-rating"];
    return (
      <Stack direction="row" alignItems="center">
        <Typography level="body-sm" sx={responsiveBulletStyle}>
          {dataPoint["pre-rating"]}&nbsp;
        </Typography>
        <Typography
          level="body-sm"
          sx={responsiveBulletStyle}
          color={
            ratingChange === 0
              ? "neutral"
              : ratingChange < 0
              ? "danger"
              : "success"
          }
        >
          {ratingChange === 0 ? (
            <TrendingFlatIcon />
          ) : ratingChange < 0 ? (
            <TrendingDownIcon />
          ) : (
            <TrendingUpIcon />
          )}
        </Typography>
        <Typography level="body-sm" sx={responsiveBulletStyle}>
          {dataPoint["post-rating"]}
        </Typography>
      </Stack>
    );
  };

  return (
    <Sheet
      sx={{
        color: headerColor,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        ...props,
      }}
    >
      <Typography variant="plain" sx={responsiveTitleStyle}>
        {link ? (
          <a href={dataPoint.link} target="_blank" rel="noreferrer">
            <b>{dataPoint.event}</b>
          </a>
        ) : (
          <b>{dataPoint.event}</b>
        )}
      </Typography>
      <Typography level="body-sm" sx={responsiveBulletStyle}>
        <i>{formatDate(dataPoint.date)}</i>
      </Typography>
      <RatingChangeComponent />
      <Typography level="body-sm" sx={responsiveBulletStyle}>
        Placed
        <Typography>
          &nbsp;<b>{ordinal_suffix_of(dataPoint.final_rank)}</b>&nbsp;
        </Typography>
        out of
        <Typography>
          &nbsp;<b>{dataPoint.participants}</b>&nbsp;
        </Typography>
        players
      </Typography>
    </Sheet>
  );
}

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}
