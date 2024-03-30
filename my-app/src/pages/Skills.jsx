import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import clogo from "../assets/logos/c.png";
import cpplogo from "../assets/logos/cpp.png";
import rustlogo from "../assets/logos/rust.png";
import pythonlogo from "../assets/logos/python.png";
import reactlogo from "../assets/logos/react.png";
import javalogo from "../assets/logos/java.png";
import javascriptlogo from "../assets/logos/javascript.png";
import mipslogo from "../assets/logos/mips.png";
import csslogo from "../assets/logos/css.png";
import gitlogo from "../assets/logos/git.png";
import htmllogo from "../assets/logos/html.png";
import veriloglogo from "../assets/logos/verilog.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';

import LanguageLogo from "../components/LanguageLogo";

import { Container } from "@mui/material";
import Section from "../components/Section";
function Skills(props) {
    const theme = useTheme();

    const skills = [
        {
            name: "React",
            logo: reactlogo,
            projects: [
                "This Website!",
                "Todouni Project",
                "Jobsboard Project",
                "96 in 'Web Front-End Programming",
            ],
        },
        {
            name: "Javascript/Typescript",
            logo: javascriptlogo,
            projects: [
                "This Website!",
                "Todouni Project",
                "Jobsboard Project",
                "96 in 'Web Front-End Programming",
            ],
        },
        {
            name: "Rust",
            logo: rustlogo,
            lighten: true,
            projects: ["Created interpreter for Logo code"],
        },
        {
            name: "Python",
            logo: pythonlogo,
            projects: ["Bssrbot", "Shift Reminder"],
        },
        {
            name: "Java",
            logo: javalogo,
            projects: ["94 mark and 9th out of 525 in Object Oriented Design"],
        },
        {
            name: "C++",
            logo: cpplogo,
            projects: ["PLC Controller", "Teleoperated weeder robot"],
        },
        {
            name: "C",
            logo: clogo,
            projects: [
                "Computer System Fundamentals Tutor",
                "95 in Computer System Fundamentals",
            ],
        },
    ];

    return (
        <Section name="Skills">

                {skills.map((skill) => (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ width: "110px", display: "flex", justifyContent: "center" }}>
                            <LanguageLogo
                                alt={skill.name}
                                src={skill.logo}
                                sx={{ width: 50 }}
                                filter= {(theme.palette.mode === "dark" && skill.lighten) ? "invert(1)" : ""}
                                />
                        </Box>
                        <Box>
                            <Typography variant="h5">{skill.name}</Typography>
                            <Typography>
                                Experience:&nbsp;
                                {skill.projects.join(", ")}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Section>
            );
        }
        
export default Skills;
