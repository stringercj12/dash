import { Typography } from "@mui/material";

export function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      MUI
    </Typography>
  );
}
