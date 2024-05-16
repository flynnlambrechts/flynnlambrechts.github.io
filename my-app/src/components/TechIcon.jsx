import React from "react";

const icons_details = {
    MUI: { name: "MUI", color: "0081CB", logo_color: "FFFFFF", logo: "mui" },
    "Google Calendar": {
        name: "google_calendar_api",
        color: "4285F4",
        logo: "googlecalendar",
    },
    HTML: {
        name: "HTML",
        color: "E34F26",
        logo: "html5",
    },
    Java: {
        name: "Java",
        color: "ED8B00",
        logo: "openjdk",
    },
    C: { name: "C", color: "00599C", logo_color: "FFFFFF", logo: "c" },
    "C++": { name: "C++", color: "00599C", logo_color: "FFFFFF", logo: "c++" },
    CSS: { name: "CSS", color: "1572B6", logo_color: "FFFFFF", logo: "css3" },
    JavaScript: {
        name: "JavaScript",
        color: "323330",
        logo_color: "F7DF1E",
        logo: "javascript",
    },
    LaTex: {
        name: "LaTex",
        color: "008080",
        logo: "latex",
    },
    Markdown: {
        name: "Markdown",
        color: "000000",
        logo: "markdown",
    },
    OCaml: {
        name: "OCaml",
        color: "E98407",
        logo: "ocaml",
    },
    Python: {
        name: "Python",
        color: "3670A0",
        logo_color: "FFDD54",
        logo: "python",
    },
    Rust: { name: "Rust", color: "000000", logo_color: "FFFFFF", logo: "rust" },
    Shell: {
        name: "Shell",
        color: "121011",
        logo: "gnu-bash",
    },
    TypeScript: {
        name: "TypeScript",
        color: "007ACC",
        logo: "typescript",
    },
    ESLint: {
        name: "ESLint",
        color: "4B3263",
        logo: "eslint",
    },
    Gradle: {
        name: "Gradle",
        color: "02303A",
        logo: "Gradle",
    },
    GitHub: {
        name: "GitHub",
        color: "121011",
        logo: "github",
    },
    Postgres: {
        name: "Postgres",
        color: "316192",
        logo: "postgresql",
    },
    Heroku: {
        name: "Heroku",
        color: "430098",
        logo: "heroku",
    },
    Replit: {
        name: "Replit",
        color: "DD1200",
        logo: "Replit",
    },
    NPM: { name: "NPM", color: "CB3837", logo_color: "FFFFFF", logo: "npm" },
    "Next JS": {
        name: "Next JS",
        color: "000000",
        logo: "next.js",
    },
    Flask: { name: "Flask", color: "000", logo_color: "FFFFFF", logo: "flask" },
    React: {
        name: "React",
        color: "20232A",
        logo_color: "61DAFB",
        logo: "react",
    },
    "React Router": {
        name: "React Router",
        color: "CA4245",
        logo: "react-router",
    },
    Yarn: { name: "Yarn", color: "2C8EBB", logo_color: "FFFFFF", logo: "yarn" },
    "Github Pages": {
        name: "Github Pages",
        color: "121013",
        logo: "github",
    },
    Messenger: {
        name: "Messenger",
        color: "00B2FF",
        logo: "messenger",
    },
    "Google Sheets": {
        name: "Google Sheets API",
        color: "34A853",
        logo: "googlesheets",
    },
    "Next JS": {
        name: "Next JS",
        color: "000000",
        logo: "nextdotjs",
    },
};

function TechIcon(props) {
    // https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
    // https://simpleicons.org/
    const getUrl = (details) =>
        `https://img.shields.io/badge/${details.name}-%23${
            details.color
        }.svg?style=for-the-badge&logo=${details.logo}&logoColor=%23${
            details.logo_color || "FFFFFF"
        }`;

    return (
        <>
            <img src={getUrl(icons_details[props.name])} alt={props.name} />
        </>
    );
}

export default TechIcon;
