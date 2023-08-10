import React from "react";
import { Box } from "@chakra-ui/react";
import kampungBg from "../../assets/img/kampung-background.png";

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
        backgroundImage: `url(${kampungBg})`,
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
