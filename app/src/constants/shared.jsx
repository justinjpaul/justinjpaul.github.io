export const headerColor = "#659db8";
export const linkUnvisited = "#03a9f4";
export const linkVisited = "--mui-palette-secondary";

export const commonTheme = {
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
