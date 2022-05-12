import {
  Search,
  AccountCircle,
  Menu,
  Mail,
  Notifications,
  More,
  Inbox,
  SearchSharp,
  Close,
} from "@mui/icons-material";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Drawer,
  Stack,
  Checkbox,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  TextField,
  InputAdornment,
  Input,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isSearchCollpase, setIsSearchCollpase] = useState(false);

  function handleOpenNavMenu() {
    setOpenDrawer(!openDrawer);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>

          <Box
            sx={{ flexGrow: 1, mx: 2, alignItems: "center", display: "flex" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="is collpase search"
              sx={{ mr: 2 }}
              onClick={() => setIsSearchCollpase(!isSearchCollpase)}
            >
              {isSearchCollpase ? <Close /> : <Search />}
            </IconButton>

            <Collapse
              orientation="horizontal"
              in={isSearchCollpase}
              collapsedSize={0}
              
            >
              <TextField
                id="input-with-sx"
                label="Procurar por"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  color: "grey.50",
                  borderColor: "grey.50",
                }}
              />
            </Collapse>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={"menuId"}
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={"mobileMenuId"}
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <More />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            asdsadasd
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={"mobileMenuId"}
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <More />
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h1" sx={{ color: "base.50" }}>
                  Off
                </Typography>
                <Checkbox
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography variant="h1" sx={{ color: "base.50" }}>
                  On
                </Typography>
              </Stack>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
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
    </Box>
  );
}
