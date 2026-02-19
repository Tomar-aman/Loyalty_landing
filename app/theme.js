import { green, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const baselightTheme = createTheme({
  direction: "ltr",

  status: {
    danger: "orange[500]",
  },

  palette: {
    primary: {
      main: "#D8D8D8",
      light: "#D8D8D8",
      dark: "#D8D8D8",
    },

    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb",
    },
  },

  // CUSTOM HEADING VARIENT TYPOGRAPHY
  typography: {
    h1: {
      fontSize: "44px",
      fontWeight: "700",
      background: "linear-gradient(360deg, #4DA4C7 0%, #77C3E2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      "@media (max-width: 600px)": {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      background: "linear-gradient(105deg, #0000FF 0%, #BB33FF 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      "@media (max-width: 600px)": {
        fontSize: "26px",
      },
    },
    h3: {
      fontSize: "18px",
      textTransform: "capitalize",
      fontWeight: "600",
      color: "#020817",
    },
    h4: {
      fontSize: "20px",
      textTransform: "capitalize",
      fontWeight: "700",
      color: "#020817",
      "@media (max-width: 600px)": {
        fontSize: "16px",
      },
    },
    h5: {
      fontSize: "30px",
      textTransform: "capitalize",
      color: "#0000FF",
      fontWeight: "700",
      "@media (max-width: 600px)": {
        fontSize: "20px",
      },
    },
    h6: {
      fontSize: "16px",
      textTransform: "capitalize",
      color: "#FAFAFF",
      fontWeight: "400",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
  },
  // CUSTOM HEADING VARIENT TYPOGRAPHY

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
  },
});

export { baselightTheme };
