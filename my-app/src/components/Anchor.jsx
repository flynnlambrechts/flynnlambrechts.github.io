import React, { useState } from "react";

function Anchor(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const style = {
        textDecoration: "inherit",
        color: "inherit",
        backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",

    };

    return (
        <a
            href={props.href}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            target="_blank"
            rel="noreferrer">
            <div>
                {isHover}
                </div>
            {props.children}
        </a>
    );
}

export default Anchor;
