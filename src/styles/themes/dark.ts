import { createTheme, ThemeOptions } from "@mui/material";
import { orange } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: { main: "#9288E0", contrastText: "#fff" },
    secondary: { main: "#EA7C69" },
    grey: {
      "900": "#1F1D2B",
      "800": "#393C49",
      "700": "#252836",
      "600": "#2D303E",
      "100": "#ABBBC2",
      "50": "#FAFAFA",
    },
    background: {
      paper: '#303134',
      default: '#202124',
    },
  },
});
