import React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Footer() {
    const theme = useTheme();

    return (
        <Container
            sx={{
                mb: 1,
                marginTop: 2
            }}>
            You have reached the bottom of this page...
        </Container>
    );
}

export default Footer;
