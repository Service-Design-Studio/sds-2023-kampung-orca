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
          'url("https://cdn.discordapp.com/attachments/1031134090688217130/1138418695589343272/80_kampung_fishing_village_singapore_malaysia_countryside_2ac2975a-3a1e-4985-b08a-cc4adb2e0581.png")',
        backgroundSize: "cover",
        opacity: 0.9, // Set opacity to 50%
        zIndex: -1, // Send the image to the back
        animation: "drawImageAnimation 5s linear forwards",
        filter: "grayscale(50%)",
        transform: "scaleX(-1)", 
      }}
    ></Box>
  );
};

export default DrawImageAnimation;
