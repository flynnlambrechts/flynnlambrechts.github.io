import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import Tool from "./Tool";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BinaryCounter(props) {
    let [bits, setBits] = React.useState(0);

    return (
        <Tool name="Binary Counter">
            <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">Value: {bits} </Typography>
                    <Typography variant="h6">
                        Hexadecimal: 0x{bits.toString(16)}{" "}
                    </Typography>
                    <Typography variant="h6">
                        Octal: 0{bits.toString(8)}{" "}
                    </Typography>
                    <Typography variant="h6">
                        Binary: {(bits >>> 0).toString(2)}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex",  justifyContent: "space-between"}}>
                        <Button variant="outlined" color="warning" onClick={() => setBits(0)}>Reset</Button>
                    <ButtonGroup>
                        <Button startIcon={<RemoveIcon />} onClick={() => setBits(bits - 1)}>
                            Decrement
                        </Button>
                        <Button startIcon={<AddIcon />} onClick={() => setBits(bits + 1)}>
                            Increment
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Tool>
    );
}

export default BinaryCounter;
