import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = React.createContext({ toggleDarkMode: () => {} });

function ThemeModeController(props) {
    const [mode, setMode] = React.useState("dark");

    const colorMode = React.useMemo(
        () => ({
            toggleDarkMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#0099CC",
                    },
                    secondary: {
                        main: "#CB1532",
                    },
                    // background: {
                    //     "paper": "#121212",
                    //     "default": "#121212"
                    // }
                },
                typography: {
                    fontFamily: [
                        "League Mono",
                        "Cascadia Code",
                        "-apple-system",
                        "BlinkMacSystemFont",
                        '"Segoe UI"',
                        "Roboto",
                        '"Helvetica Neue"',
                        "Arial",
                        "sans-serif",
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(","),
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ colorMode, theme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeModeController;
