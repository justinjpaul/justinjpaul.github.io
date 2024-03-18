export const headerColor = "#659db8";
export const linkUnvisited = "#4393e4";
export const linkVisited = "--mui-palette-secondary";

export const commonTheme = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#f0f5f8",
          100: "#e0ebf1",
          200: "#c1d8e3",
          300: "#a3c4d4",
          400: "#84b1c6",
          500: "#659db8",
          600: "#5b8da6",
          700: "#517e93",
          800: "#3d5e6e",
          900: "#1e2f37",
        },
      },
    },
  },
  components: {
    JoyTypography: {
      styleOverrides: {
        root: {
          a: { textDecoration: "none", fontWeight: "bold" },
          "a:link": { color: linkUnvisited },
          "a:visited": {
            color: linkVisited,
          },
          "a:hover": {
            textDecoration: "underline",
          },
          "a:active": {
            color: "red",
          },
        },
      },
    },
  },
};
