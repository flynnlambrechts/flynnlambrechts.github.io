import React from 'react';
import BinaryCounter from '../components/Tools/BinaryCounter';
import Section from "../components/Section";
import Converter from '../components/Tools/Converter';

function Tools (props) {

    return (<Section name="Tools" description="Here I have created a few practical and teaching tools for myself, but you're welcome to use them...">
        <BinaryCounter />
        <Converter />
    </Section>);	
}

export default Tools;
