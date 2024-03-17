import Typography from "@mui/joy/Typography";
import Header from "../../shared/Header";

export default function NotFoundPage() {
  const page = "notfound";

  return (
    <>
      <Header page={page} />
      <div className="main-body">
        <Typography level="h2">
          Page not found. Check out my pages by clicking on the buttons on the
          nav bar at the top :)
        </Typography>
      </div>
    </>
  );
}
