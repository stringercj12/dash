import { Box, Theme, ThemeOptions, ThemeProvider } from "@mui/material";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DarkTheme, LightTheme } from "../styles/themes";

enum ITheme {
  light = "light",
  dark = "dark",
}

interface IThemeContextProps {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextProps);

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"dark" | "light">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme: any = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useAppTheme() {
  return useContext(ThemeContext);
}
