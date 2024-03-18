import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/joy/IconButton";

import { useColorScheme as useJoyColorScheme } from "@mui/joy/styles";
import { useColorScheme as useMaterialColorScheme } from "@mui/material/styles";

export default function ColorSchemeToggle() {
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton></IconButton>;
  }
  return (
    <IconButton
      onClick={() => {
        setMaterialMode(mode === "dark" ? "light" : "dark");
        setJoyMode(mode === "dark" ? "light" : "dark");
      }}
      sx={{ color: "background.popup" }}
    >
      {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
