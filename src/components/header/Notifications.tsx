import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { IconButton, Badge } from "@mui/material";

export function Notifications() {
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={18} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
}
