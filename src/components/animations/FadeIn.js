import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

const FadeIn = () => {
    const [showText, setShowText] = useState(true);
    const animation = useSpring({
        opacity: showText ? 1 : 0,
        transform: showText ? `translateY(0)` : `translateY(-30%)`,
    });
    return (
        <div>
            <button onClick={() => setShowText(!showText)}>Toggle Animation</button>
            <animated.p style={animation}>Animate me on click!</animated.p>
        </div>
    );
};

export default FadeIn;
