import ColorSchemeToggle from "./ColorSchemeToggle";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { headerColor, pages } from "../../constants/shared";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Sheet, Stack, IconButton } from "@mui/joy";
import BasicMenu from "./BasicMenu";

export default function Header({ currentPage }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Sheet
      sx={{
        height: "10vh",
        backgroundColor: headerColor,
        paddingX: "24px",
        display: "flex",
        marginBottom: "2rem",
        justifyContent: "space-between",
      }}
    >
      <Stack
        display="flex"
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isSmallScreen ? (
          <BasicMenu currentPage={currentPage} />
        ) : (
          <div className="navigation-buttons">
            {pages.map((page) => (
              <IconButton
                component="a"
                href={`/#/${page.path}`}
                sx={{
                  textDecoration:
                    currentPage === page.path ? "underline" : "none",
                  color: "background.popup",
                  paddingX: "16px",
                }}
                variant="plain"
                key={`nav-button-${page.name}`}
              >
                {page.name}
              </IconButton>
            ))}
          </div>
        )}
        <div className="links">
          <IconButton
            component="a"
            href="mailto:justpaul@umich.edu"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "background.popup" }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/jpaul24/"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "background.popup" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/justinjpaul"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "background.popup" }}
          >
            <GitHubIcon />
          </IconButton>

          <ColorSchemeToggle />
        </div>
      </Stack>
    </Sheet>
  );
}
