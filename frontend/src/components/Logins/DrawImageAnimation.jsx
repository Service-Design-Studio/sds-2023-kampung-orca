import React from "react";
import { Box } from "@chakra-ui/react";
import "./DrawImageAnimation.css";

const DrawImageAnimation = () => {
  return (
    <Box
      className="draw-image-animation"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          'url("https://www.clipartmax.com/png/middle/124-1246762_financial-lateracy-exhibition-malay-kampung-house-sketch.png")',
        backgroundSize: "cover",
        opacity: 0.5, // Set opacity to 50%
        zIndex: -1, // Send the image to the back
        animation: "drawImageAnimation 5s linear forwards",
      }}
    ></Box>
  );
};

export default DrawImageAnimation;
