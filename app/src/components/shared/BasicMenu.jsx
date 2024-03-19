import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useColorScheme } from "@mui/joy";
import { useState } from "react";
import { headerColor, pages } from "../../constants/shared";

const darkBg = "#121212";
const lightBg = "#fff";

export default function BasicMenu({ currentPage }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode } = useColorScheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{ color: "background.popup", padding: "4px" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ padding: "none" }}
      >
        {pages.map((page) => (
          <Link
            href={`/#/${page.path}`}
            key={`menu-${page.name}`}
            display="flex"
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                backgroundColor: mode === "dark" ? darkBg : lightBg,
                textDecoration:
                  currentPage === page.path
                    ? "underline !important"
                    : "none !important",
                color: headerColor,
              }}
              key={`nav-button-${page.name}`}
            >
              {page.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
