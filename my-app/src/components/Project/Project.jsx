import Card from "@mui/material/Card";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardContent } from "@mui/material";
import Anchor from "../Anchor";
import Box from "@mui/material/Box";

function Project(props) {
    return (
        <Card >
            <Anchor href={props.link}>
                <CardHeader title={props.name} />
            </Anchor>
            <Box sx={{ display: "flex" }}>

            <CardMedia
                component="img"
                image={props.image}
                alt={"Image of " + props.name + " project"}
                sx={{width: "60%"}}
                />

                <CardContent>
                    <Typography variant="h6">About</Typography>
                    <Typography variant="body1">{props.description}</Typography>
                    <Typography variant="h6" sx={{marginTop: 1}}>Technologies</Typography>
                    <Typography variant="body1">{props.tech}</Typography>
                </CardContent>

            </Box>
            <Box sx={{display: "flex", flexDirection: "row-reverse"}}>

                <CardActions>
                    {props.code && <Button size="large">Code</Button>}
                    {props.link && <Button size="large">View</Button>}
                </CardActions>
            </Box>
        </Card>
    );
}

export default Project;
