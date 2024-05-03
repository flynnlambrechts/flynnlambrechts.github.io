import Card from "@mui/material/Card";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

import {
    CardContent,
} from "@mui/material";
import Anchor from "../Anchor";
import Box from "@mui/material/Box";
import TechIcon from "../TechIcon";

const Technologies = (props) => {
    return (
        <Box sx={{display: "flex", flexWrap: "wrap", gap: 1}}>
            {props.tech.map((t) => (
                <TechIcon name={t} />
            ))}
        </Box>
    );
};

function Project(props) {
    return (
        <Card sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Grid container spacing={1}>
                <Grid xs={12}>
                    <Anchor href={props.link}>
                        <CardHeader title={props.name} />
                    </Anchor>
                </Grid>

                <Grid sm={12} md={7} sx={{display: "flex", justifyContent: "center"}}>
                    <CardMedia
                        component="img"
                        image={props.image}
                        alt={"Image of " + props.name + " project"}
                        sx={{
                            objectFit: "contain",
                            width: "100%",
                            borderRadius: 5,
                            boxShadow: 4,
                        }}
                    />
                </Grid>
                <Grid sm={12} md={4}>
                    <CardContent>
                        <Typography variant="h6">About</Typography>
                        <Typography variant="body1">
                            {props.description}
                        </Typography>
                        <Typography variant="h6" sx={{ marginTop: 1 }}>
                            Technologies
                        </Typography>
                        <Technologies tech={props.tech} />
                        <Typography variant="body1">
                            
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12}>

                <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <CardActions>
                        {props.code && (
                            <Anchor href={props.code}>
                                <Button variant="outlined" size="large">Code</Button>
                            </Anchor>
                        )}
                        {props.link && (
                            <Anchor href={props.link}>
                                <Button variant="outlined"  size="large">View</Button>
                            </Anchor>)
                        }
                    </CardActions>
                </Box>
                        </Grid>
                    
            </Grid>
        </Card>
    );
}

export default Project;
