import React from 'react';
import Tool from "./Tool";
import NumberField from '../NumberField';
import { Box } from "@mui/material";

function Converter (props) {
    let [value, setValue] = React.useState(0);

    return (<Tool name="Base Converter">
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
        <NumberField fullWidth value={value} setValue={setValue} label="decimal"/>
        <NumberField fullWidth base={16} value={value} setValue={setValue} label="hexadecimal"/>
        <NumberField fullWidth base={2} value={value} setValue={setValue} label="binary"/>
        <NumberField fullWidth base={8} value={value} setValue={setValue} label="octal"/>
        </Box>
    </Tool>);	
}

export default Converter;
