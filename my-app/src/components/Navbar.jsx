import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NightModeToggle from "./NightModeToggle";
import Socials from "./Socials";
import { Link } from "react-router-dom";

function Navbar(props) {
    const pages = ["Projects", "Skills", "Tools"];
    return (
            <AppBar
                position="fixed"
                sx={{
                    padding: 1,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    backgroundColor: "default",
                }}>
                    <Toolbar sx={{ display: "flex", gap: 4 }} width="100px">
                        <Socials />
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "unset" }}>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ flexGrow: 1 }}>
                                Flynn Lambrechts
                            </Typography>
                        </Link>
                    </Toolbar>

                <Box sx={{ display: "flex", gap: 3 }}>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        {pages.map((page) => (
                            <Link
                                to={"/" + page.toLowerCase()}
                                style={{
                                    textDecoration: "none",
                                    color: "unset",
                                }}>
                                <Typography
                                    variant="h6"
                                    key={page}
                                    textAlign="center">
                                    {page}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                    <NightModeToggle />
                </Box>
            </AppBar>
    );
}

export default Navbar;
