import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { PrimaryButton} from "../buttons/Buttons";

const FadeIn = () => {
    const [showText, setShowText] = useState(true);
    const animation = useSpring({
        opacity: showText ? 1 : 0,
        transform: showText ? `translateY(0)` : `translateY(-30%)`,
    });
    return (
        <div>
            <PrimaryButton modifiers={'small'} onClick={() => setShowText(!showText)}>Toggle Animation</PrimaryButton>
            <animated.p style={animation}>Animate me on click!</animated.p>
        </div>
    );
};

export default FadeIn;
