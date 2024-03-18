import {
  mapColorBronze,
  mapColorDefault,
  mapColorGold,
  mapColorSilver,
} from "../../constants/chess";

export async function getData(props) {
  const promise = await fetch(props.url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  let response = await promise.json();

  if (response.length > 1 && "ranking" in response[0]) {
    response = response.sort((a, b) => {
      return b.ranking - a.ranking;
    });
  }
  await props.setData(response);
}

export function formatDate(timeString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateParts = timeString.split("-");
  const year = dateParts[0];
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);

  const date = new Date(year, month, day);
  const formattedDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
}

export function colorSelector(placement, defaultColor = mapColorDefault) {
  if (placement === 1) {
    return mapColorGold;
  }
  if (placement === 2) {
    return mapColorSilver;
  }
  if (placement === 3) {
    return mapColorBronze;
  }
  return defaultColor;
}

// hash router doesn't support normal fragmentation ex. #idName
// explored using text or jquery, but makes it very messy
