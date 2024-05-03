import React from 'react';
import { Box, Container, Typography } from "@mui/material";


function Section (props) {

    return (<Container
        id={props.name}
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1, marginTop: "100px", fontWeight: 1000 }}
    >
    <Box sx={{marginBottom: 1}}>
        <Typography variant="h4" >{props.name}</Typography>
        <Typography>{props.description}</Typography>
    </Box>
    {props.children}
    </Container>);	
}

export default Section;
