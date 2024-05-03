import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Projects from "./Projects";
import Skills from "./Skills";
import Box from "@mui/material/Box";




// const Typewriter = ({ text, delay }) => {
//     const [currentText, setCurrentText] = useState("");
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         if (currentIndex < text.length) {
//             const timeout = setTimeout(() => {
//                 setCurrentText((prevText) => prevText + text[currentIndex]);
//                 setCurrentIndex((prevIndex) => prevIndex + 1);
//             }, delay);

//             return () => clearTimeout(timeout);
//         }
//     }, [currentIndex, delay, text]);

//     return <span>{currentText}</span>;
// };

const Typewriter = ({ lines, delay }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
  
    useEffect(() => {
      if (lineIndex < lines.length) {
        if (currentIndex < lines[lineIndex].length) {
          const timeout = setTimeout(() => {
            setCurrentText((prevText) => prevText + lines[lineIndex][currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, delay);
  
          return () => clearTimeout(timeout);
        } else if (lineIndex !== lines.length - 1) {
          setTimeout(() => {
            setCurrentText("");
            setCurrentIndex(0);
            setLineIndex((prevLineIndex) => prevLineIndex + 1);
          }, 2000);
        }
      }
    }, [currentIndex, delay, lineIndex, lines]);
  
    return <span>{currentText}</span>;
  };

function Home(props) {
    const prints = [
        "print(intro)",
        "std::cout << intro << std::endl;",
        "System.out.println(intro);",
        "echo \"$intro\"",
        "println!(\"{}\", intro);",
        "console.log(intro);",
        "printf(\"%s\\n\", intro);"
    ]

    return (
        <>

            <Container
                maxWidth="unset"
                sx={{
                    flexGrow: 1,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    
                }}>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        width: "100%",
                        height: "90%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            textAlign: "right",
                            width: "60%",
                        }}>
                        <Typography variant="h6">Hi,</Typography>
                        <Typography variant="h3">I'm Flynn</Typography>
                        <Typography variant="h6">
                            &nbsp;
                            <Typewriter
                                lines={ [ "> " + prints[Math.round((Math.random() * 10)) % prints.length ], "A Mechatronic Engineering and Computer Science Student"]}
                                delay={100}
                            />
                        </Typography>
                    </Box>
                </Box>
                <Box>Scroll For More...</Box>
            </Container>
            <div>
        </div>
            <Projects />
            <Skills />
        </>
    );
}

export default Home;
