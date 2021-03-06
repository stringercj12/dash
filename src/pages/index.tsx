import { FormEvent, useState } from "react";
import {
  Paper,
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  Link,
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAppTheme } from "../contexts/ThemeContext";
// import { LoadingButton } from "@mui/lab";

type FormData = {
  email: string;
  password: string;
  remember?: boolean;
};

const Home: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSignIn = async (formData: FormEvent) => {
    formData.preventDefault();
    if (email === "" || password === "") {
      setSnackbar({
        open: true,
        message: "E-mail e senha obrigatórios",
      });
      return;
    }

    console.log(email, password, remember);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("dashboard");
    }, 2000);
  };

  function handleClose() {
    setSnackbar({ open: false, message: "" });
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Paper
        sx={{
          p: 2,
          width: 400,
        }}
      >
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbar.message}
        />
        <form onSubmit={handleSignIn}>
          <Typography component="h4" variant="h4" align="center" mb="2">
            Login
          </Typography>
          <Stack spacing="4">
            <div>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                size="small"
                fullWidth
                autoComplete="email"
                autoFocus
                margin="normal"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </Stack>

          <FormGroup
            row
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  value={remember}
                  onChange={(event) => setRemember(Boolean(event.target.value))}
                />
              }
              label="Relembrar conta"
            />

            <Box component="span" sx={{ mb: 0 }}>
              <Link href="/forgot" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Box>
          </FormGroup>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? (
              <CircularProgress
                size={20}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              "Entrar"
            )}
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Link href="/register" variant="body2">
              Não tem uma conta? Inscrever-se
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Home;
