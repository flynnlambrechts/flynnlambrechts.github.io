import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import clogo from "../assets/logos/c.png"
import cpplogo from "../assets/logos/cpp.png"
import rustlogo from "../assets/logos/rust.png"
import pythonlogo from "../assets/logos/python.png"
import reactlogo from "../assets/logos/react.png"
import javalogo from "../assets/logos/java.png"
import javascriptlogo from "../assets/logos/javascript.png"
import mipslogo from "../assets/logos/mips.png"
import csslogo from "../assets/logos/css.png"
import gitlogo from "../assets/logos/git.png"
import htmllogo from "../assets/logos/html.png"
import veriloglogo from "../assets/logos/verilog.png"
import Typography from '@mui/material/Typography';

import LanguageLogo from '../components/LanguageLogo';

import { Container } from '@mui/material';
function Skills (props) {

    return (<Container>
        <Typography variant="h4">Skills</Typography>
        <LanguageLogo alt="c" src={clogo}/>
        <LanguageLogo alt="c++" src={cpplogo}/>
        <LanguageLogo alt="rust" src={rustlogo}/>
        <LanguageLogo alt="python" src={pythonlogo}/>
        <LanguageLogo alt="react" src={reactlogo}/>
        <LanguageLogo alt="java" src={javalogo}/>
        <LanguageLogo alt="javascript" src={javascriptlogo}/>
        <LanguageLogo alt="mips" src={mipslogo}/>
        <LanguageLogo alt="css" src={csslogo}/>
        <LanguageLogo alt="git" src={gitlogo}/>
        <LanguageLogo alt="html" src={htmllogo}/>
        <LanguageLogo alt="verilog" src={veriloglogo}/>
        <FontAwesomeIcon style={{height: "1000"}} icon="fa-brands fa-rust" />
    </Container>);	
}

export default Skills;
