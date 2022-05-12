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

  const handleSignIn = async (formData: FormEvent) => {
    formData.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("dashboard");
    }, 2000);
  };

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
              />
              {/* {!!email && <FormHelperText> {email}</FormHelperText>} */}
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                size="small"
                fullWidth
                autoFocus
                margin="normal"
              />
            </div>
          </Stack>

          <FormGroup
            row
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            />

            <Box component="span" sx={{ mb: 0 }}>
              <Link href="#" variant="body2">
                Forgot password?
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
              "Sign in"
            )}
          </Button>

          {/* <LoadingButton
            loading={false}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </LoadingButton> */}

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Home;
