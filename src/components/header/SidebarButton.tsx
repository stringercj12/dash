import { Inbox, Mail, Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export function SidebarButton() {
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleOpenNavMenu() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={handleOpenNavMenu}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleOpenNavMenu}
        color="primary"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleOpenNavMenu}
          onKeyDown={handleOpenNavMenu}
        >
          <Link href="#">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 2,
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/3.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </Box>
          </Link>

          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
