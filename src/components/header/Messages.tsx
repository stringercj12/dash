import { Mail } from "@mui/icons-material";
import { IconButton, Badge } from "@mui/material";

export function Messages() {
  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
      </IconButton>
    </>
  );
}
