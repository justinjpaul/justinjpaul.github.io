import FormatDate from "../../shared/FormatDate";
import { Sheet, Typography } from "@mui/joy";
import { headerColor } from "../../../constants/shared";

export default function ChessPopup({ dataPoint, props, link }) {
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
      <Typography variant="plain" level="title-md" sx={{ color: "inherit" }}>
        {link ? (
          <a href={dataPoint.link} target="_blank" rel="noreferrer">
            <b>{`${dataPoint.event}`}</b>
          </a>
        ) : (
          <b>{`${dataPoint.event}`}</b>
        )}
      </Typography>
      <Typography level="body-sm">
        <i>{FormatDate(dataPoint.date)}</i>
      </Typography>
      {dataPoint["pre-rating"] !== undefined &&
        dataPoint["post-rating"] !== undefined && (
          <Typography level="body-sm">
            {`${dataPoint["pre-rating"]} => ${dataPoint["post-rating"]}`}
          </Typography>
        )}
      <Typography level="body-sm">
        Placed {ordinal_suffix_of(dataPoint.final_rank)} out of{" "}
        {dataPoint.participants} players
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
