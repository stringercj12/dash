import {
  ContentCut,
  ContentCopy,
  ContentPaste,
  Cloud,
  AccountCircle,
  Logout,
  Person,
} from "@mui/icons-material";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Menu,
  IconButton,
} from "@mui/material";
import { useState, MouseEvent } from "react";

export function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        onClick={handleClick}
        color="inherit"
        aria-controls="account-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            <ListItemText>Meu perfil</ListItemText>
          </MenuItem>
         
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sair</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
