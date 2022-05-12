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

const Forgot: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const [email, setEmail] = useState("");

  const handleSignIn = async (formData: FormEvent) => {
    formData.preventDefault();

    if (email === "") {
      setSnackbar({
        open: true,
        message: "E-mail obrigatório",
      });
      return;
    }

    console.log(email);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("dashboard");
    }, 2000);
  };

  function handleClose() {
    setSnackbar({
      open: false,
      message: "",
    });
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
            Esqueci a senha
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
          </Stack>

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
              "Enviar"
            )}
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Link href="/" variant="body2">
              Voltar
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Forgot;
