import React from 'react';
import { Box } from '@mui/material';

function LanguageLogo (props) {

    return (<Box component="img" sx={{height: 100, filter: props.filter }} src={props.src} alt={props.alt}>

    </Box>)
}

export default LanguageLogo;
