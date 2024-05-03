import React from 'react';
import { Box, Card, CardHeader } from "@mui/material";

function Tool (props) {

    return (<Box sx={{display: "flex", gap: 1, flexDirection: "column"}}>
        <Card sx={{padding: 2}} >
        <CardHeader title={props.name} />
        {/* <Typography variant="h5">{props.name}</Typography> */}
        {props.children}
        </Card>
    </Box>);	
}

export default Tool;
