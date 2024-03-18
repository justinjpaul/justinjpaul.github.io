import UpdateEntry from "./UpdateEntry";
import { List, ListDivider, Stack, Typography } from "@mui/joy";
import { updates } from "../../../constants/updates";

export default function UpdatesPage() {
  const yearIndicesObject = updates.reduce((acc, item, index) => {
    const year = item.date_year;
    if (!acc[year]) {
      acc[year] = []; // Initialize an array for the year if it doesn't exist
    }
    acc[year].push(index); // Push the index into the array for that year
    return acc;
  }, {});

  return (
    <Stack direction="column">
      {Object.keys(yearIndicesObject)
        .map((x) => Number(x))
        .sort((a, b) => b - a)
        .map((yr) => {
          return (
            <div key={`update year-${yr}`}>
              <Typography level="h1">{yr}</Typography>
              <List
                sx={{
                  "--ListItemDecorator-size": "56px",
                  alignitems: "left",
                }}
              >
                {yearIndicesObject[yr].map((update_ind, ind) => {
                  return (
                    <div key={`update-entry-yr${yr}-ind${update_ind}`}>
                      {ind !== 0 && <ListDivider inset="gutter" />}
                      <UpdateEntry update={updates[update_ind]} />
                    </div>
                  );
                })}
              </List>
              <br />
            </div>
          );
        })}
    </Stack>
  );
}
