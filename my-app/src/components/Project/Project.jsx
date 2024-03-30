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
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Anchor from "../Anchor";
import Box from "@mui/material/Box";

const Technologies = (props) => {
    return (
        <>
            <List sx={{}}>
                {props.tech.map((t) => (
                    <ListItem sx={{ margin: 0, padding: 0 }}>
                        <ListItemIcon>
                            <NavigateNextIcon />
                        </ListItemIcon>
                        <ListItemText sx={{}}>{t}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

function Project(props) {
    return (
        <Card>
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
                        <Typography variant="body1">
                            <Technologies tech={props.tech} />
                        </Typography>
                    </CardContent>
                </Grid>
                <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <CardActions>
                        {props.code && (
                            <Anchor href={props.code}>
                                <Button size="large">Code</Button>
                            </Anchor>
                        )}
                        {props.link && (
                            <Anchor href={props.link}>
                                <Button size="large">View</Button>
                            </Anchor>
                        )}
                    </CardActions>
                </Box>
            </Grid>
        </Card>
    );
}

export default Project;
