import React from "react";
import { Container, Typography } from "@mui/material";
import Project from "../components/Project/Project";

import todouni from "../assets/projects/todouni.png";
import shiftreminder from "../assets/projects/shiftreminder.png";
import bssrbot from "../assets/projects/BssrBot.png";
import cselink from "../assets/projects/cselink.png";
import jobsboard from "../assets/projects/jobsboard.png";

function Projects(props) {
    const projects = [
        {
            name: "Todo Uni",
            image: todouni,
            description:
                "Responsive web app created to manage University tasks due dissatisfaction with current systems. Allows users to observe their progress throughout the term and 'gamify' their productivity.",
            tech: "React, Javascript, HTML, CSS",
            link: "https://flynnlambrechts.github.io/Todouni/",
            code: "https://github.com/flynnlambrechts/Todouni",
        },
        {
            name: "Jobsboard",
            image: jobsboard,
            description: "A",
            tech: "React, Typescript, HTML, Express, CSS",
            link: "https://jobsboard.csesoc.unsw.edu.au/",
            code: "https://github.com/devsoc-unsw/jobsboard",
        },

        {
            name: "Basser Bot (BssrBot)",
            image: bssrbot,
            description:
                "A facebook messenger chat bot. I created this project with no coding experience. It is a backend project that provides the facebook messenger api with information based on user requests for current meal service at UNSW Dining Hall. Upon my completion of my time at Basser College, the project had over 890 users and hundreds of daily users.",
            link: "https://www.facebook.com/BssrBot1",
            tech: "Python, Heroku Cloud Hosting, Facebook Messenger API",
            code: "https://github.com/flynnlambrechts/bssrbot3",
        },
        {
            name: "cselink",
            image: cselink,
            code: "https://github.com/flynnlambrechts/cselink",
            description:
                "A command line tool for UNSW CSE Students. This enables local development with ease of access to cse programs like 'autotest' and 'give'. Providing users with access to the comfort of their own programming environment and the ability to work offline and sync later.",
            tech: "Shell Scripting, Bash, rsync, ssh",
        },
        {
            name: "Shift Reminder",
            description:
                "Program that uses the Google sheets API to scrape casual work shifts from roster, and then the Google Calendar API to create calender events with the details of these shifts. After completion adds shifts to a log book.",
            image: shiftreminder,
            code: "https://github.com/flynnlambrechts/Shift-Reminder",
            tech: "Python, Google Calendar API, Google Sheets API",
        },
    ];
    return (
        <>
            <Container
                id="projects"
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h4">Projects</Typography>
                {projects.map((proj) => (
                    <Project {...proj} />
                ))}
            </Container>
        </>
    );
}

export default Projects;
