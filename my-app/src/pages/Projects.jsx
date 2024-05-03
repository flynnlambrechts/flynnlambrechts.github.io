import React from "react";
import Project from "../components/Project/Project";

import todouni from "../assets/projects/todouni.png";
import shiftreminder from "../assets/projects/shiftreminder.png";
import bssrbot from "../assets/projects/BssrBot.png";
import cselink from "../assets/projects/cselink.png";
import jobsboard from "../assets/projects/jobsboard.png";
import Section from "../components/Section";

function Projects(props) {
    const projects = [
        {
            name: "Todo Uni",
            image: todouni,
            date: "2024",
            description:
                "Responsive web app created to manage University tasks due to dissatisfaction with current systems. Allows users to observe their progress throughout the term and 'gamify' their productivity.",
            tech: ["React", "JavaScript", "HTML", "CSS", "MUI", "Github Pages"],
            link: "https://flynnlambrechts.github.io/Todouni/",
            code: "https://github.com/flynnlambrechts/Todouni",
        },
        {
            name: "Jobsboard",
            image: jobsboard,
            description:
                "As Project Director of 'Jobsboard' at UNSW Software Development Society (DevSoc) I led a team of 7 responsible for maintenance and improvement of the platform.",
            tech: ["React", "TypeScript", "HTML", "Next JS", "CSS", "Postgres", "Yarn"],
            link: "https://jobsboard.csesoc.unsw.edu.au/",
            code: "https://github.com/devsoc-unsw/jobsboard",
        },

        {
            name: "Basser Bot (BssrBot)",
            image: bssrbot,
            description:
                "A facebook messenger chat bot. I created this project with no coding experience. It is a backend project that provides the facebook messenger api with information based on user requests for current meal service at UNSW Dining Hall. Upon my completion of my time at Basser College, the project had over 890 users and hundreds of daily users.",
            link: "https://www.facebook.com/BssrBot1",
            tech: ["Python", "Heroku", "Postgres", "Flask", "Messenger"],
            code: "https://github.com/flynnlambrechts/bssrbot3",
        },
        {
            name: "cselink",
            image: cselink,
            code: "https://github.com/flynnlambrechts/cselink",
            description:
                "A command line tool for UNSW CSE Students. This enables local development with ease of access to cse programs like 'autotest' and 'give'. Providing users with access to the comfort of their own programming environment and the ability to work offline and sync later.",
            tech: ["Shell"],
        },
        {
            name: "Shift Reminder",
            description:
                "Program that uses the Google Sheets API to scrape casual work shifts from roster, and then the Google Calendar API to create calender events with the details of these shifts. After completion adds shifts to a log book.",
            image: shiftreminder,
            code: "https://github.com/flynnlambrechts/Shift-Reminder",
            tech: ["Python", "Replit", "Google Sheets", "Google Calendar"],
        },
    ];
    return (
        <>
            <Section name="Projects">
                {projects.map((proj) => (
                    <Project {...proj} />
                ))}
            </Section>
        </>
    );
}

export default Projects;
