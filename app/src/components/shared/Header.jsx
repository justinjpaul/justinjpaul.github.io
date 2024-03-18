import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { headerColor } from "../../constants/shared";

const pages = ["", "chess", "portfolio", "updates"];

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function Header(currentPage) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: headerColor, marginBottom: "2rem" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/#/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
              backgroundColor: "(0,0,0,.5)",
            }}
          >
            &nbsp;About
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    <Link href={`/#/${page}`}>
                      {page === "" ? "About" : toTitleCase(page)}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.slice(1).map((page) => (
              <Button
                component="a"
                href={`/#/${page}`}
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                disabled={page === currentPage}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              component="a"
              href="mailto:justpaul@umich.edu"
              target="_blank"
              rel="noreferrer"
              // color="default"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/jpaul24/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/justinjpaul"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>

            <ColorSchemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
