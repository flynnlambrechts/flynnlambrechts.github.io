import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Home from "./Home";

import ThemeModeController from "../wrappers/Theme";
import Projects from "./Projects";
import Skills from "./Skills";


function PageList() {
    return (
        <ThemeModeController>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}>
                <Navbar />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/Todouni" />
                            {/* <Route path='/list' element={<ListView />} /> */}
                        </Routes>
                    <Footer />
                    </Main>
            </Box>
        </ThemeModeController>
    );
}

export default PageList;
