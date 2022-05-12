import { createTheme, ThemeOptions } from "@mui/material";
import { orange, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    grey: {
      "900": "#1F1D2B",
      "800": "#393C49",
      "700": "#252836",
      "600": "#2D303E",
      "100": "#ABBBC2",
      "50": "#FAFAFA",
    },
    background: {
      paper: "#ffffff",
      default: "#f7f6f3",
    },
  },
});
