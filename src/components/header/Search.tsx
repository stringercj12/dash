import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  TextField,
  InputLabel,
  DialogActions,
  Button,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";

export function Search() {
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  function handleOpenSearch() {
    setOpenSearch(!openSearch);
  }

  function handleSearch() {
    handleOpenSearch;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, mx: 2, alignItems: "center", display: "flex" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="is collpase search"
          sx={{ mr: 2 }}
          onClick={handleOpenSearch}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Dialog open={openSearch} onClose={handleOpenSearch}>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Buscar Unidade, Morador, Funcionário ou Veículo
          </DialogContentText>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <TextField
              autoFocus
              id="name"
              label="Procurar por"
              type="email"
              variant="standard"
              fullWidth
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Grupo
            </InputLabel>
            {/* <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={groupSelected}
              onChange={handleChangeGroup}
              label="Grupo"
              multiple
              variant="standard"
              renderValue={(selected) => selected.join(", ")}
              // MenuProps={MenuProps}
            >
              {groups.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  <Checkbox checked={groupSelected.indexOf(item) > -1} />
                  <ListItemText primary={item.name} />
                </MenuItem>
              ))}
            </Select> */}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenSearch}>Cancelar</Button>
          <Button variant="contained" onClick={handleSearch}>
            Buscar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
