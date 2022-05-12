import { Box, Button } from "@mui/material";
import { NextPage } from "next";
import { useAppTheme } from "../contexts/ThemeContext";

const Dashboard: NextPage = () => {
  const { toggleTheme } = useAppTheme();
  return (
    <Box>
      <h1>Dashboard</h1>
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={toggleTheme}
        >
          Toggle Theme{" "}
        </Button>
      </div>
    </Box>
  );
};

export default Dashboard;
