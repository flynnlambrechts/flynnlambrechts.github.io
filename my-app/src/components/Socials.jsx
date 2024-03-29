import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

import {
    faGithub,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Socials (props) {
    const theme = useTheme();

    const socials = [
        {
          title: 'LinkedIn',
          icon: faLinkedin,
          href: 'https://www.linkedin.com/in/flynn-lambrechts/'
        },
        {
          title: 'Github',
          icon: faGithub,
          href: 'https://github.com/flynnlambrechts'
        },
      ];
    console.log(theme);
    const styles = {
        display: "flex", 
        alignItems: "center",
        gap: 2,
        height: "100%"
    }
    return (<Box sx={styles}>
            {socials.map((s) => (
              <a href={s.href} target="__blank" key={s.title}>
                <FontAwesomeIcon icon={s.icon} style={{color: theme.palette.primary.contrastText, height: 35}} />
              </a>
            ))}
    </Box>);	
}

export default Socials;
