import {
  AccountCircle,
  Menu,
  Mail,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Collapse,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { purple } from "@mui/material/colors";
import { Logo } from "./Logo";
import { SidebarButton } from "./SidebarButton";
import { Search } from "./Search";
import { Profile } from "./Profile";
import { Notifications } from "./Notifications";
import { Messages } from "./Messages";

const groups = [
  { id: 1, name: "Bloco 1" },
  { id: 2, name: "Bloco 2" },
  { id: 3, name: "Bloco 3" },
];

interface GroupProps {
  id: number;
  name: string;
}

export function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [groupSelected, setGroupSelected] = useState<GroupProps[]>([]);

  function handleOpenNavMenu() {
    setOpenDrawer(!openDrawer);
  }

  const handleChangeGroup = (event: SelectChangeEvent<GroupProps>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    // setGroupSelected( value === "string" ? value.split(",") : value);
  };

  return (
    <AppBar position="static">
      <Container sx={{ flexGrow: 1 }} maxWidth>
        <Toolbar>
          <SidebarButton />

          <Logo />

          <Search />

          <Box>
            <Messages />

            <Notifications />

            <Profile />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
