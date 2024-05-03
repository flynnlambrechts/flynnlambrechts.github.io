import React from "react";
import { TextField } from "@mui/material";

function NumberField(props) {
    const base = props.base ? props.base : 10;
    const allowedCharacters = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ].slice(0, base);

    function handleChange(e) {
        let newValue = e.target.value;
        newValue = newValue.replace(/^0x/, "");
        newValue = newValue.replace(/^0b/, "");
        const re = new RegExp("[^" + allowedCharacters.join() + "]", "g");
        newValue = newValue.replace(re, "");

        if (newValue !== "") {
            newValue = parseInt(newValue, base);
        }
        props.setValue(newValue);
    }

    let proper_value = props.value.toString(base);
    if (proper_value !== "") {
        if (base === 16) {
            proper_value = "0x" + proper_value;
        } else if (base === 2) {
            proper_value = ("0b" + proper_value
                .split("")
                .reverse()
                .join("")
                .replace(/([01]{4})/g, "$1 ")
                .split("")
                .reverse()
                .join("")).replace(/^0b /, "0b")
        }
    }
    return (
        <TextField {...props} value={proper_value} onChange={handleChange} />
    );
}

export default NumberField;
