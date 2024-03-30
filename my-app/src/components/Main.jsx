import React from "react";
import { Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function Main(props) {
    const style = {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    };
    const theme = useTheme();
    return (

        <main style={style}>
            <Container
                maxWidth="unset"
                sx={{
                    padding: 0,
                    paddingBottom: 2,
                    backgroundImage: theme.palette.mode === "dark" ? "linear-gradient(to bottom right, rgb(3, 11, 18), rgb(23, 31, 38))" : "",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                }}>
                {props.children}
            </Container>
        </main>
    );
}

export default Main;
