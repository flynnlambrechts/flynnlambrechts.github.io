import React from 'react';
import { Container, Typography } from "@mui/material";


function Section (props) {

    return (<Container
        id={props.name}
        sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: "100px", fontWeight: 1000 }}
    >
    <Typography variant="h4" sx={{marginBottom: 1}}>{props.name}</Typography>
    {props.children}
    </Container>);	
}

export default Section;
