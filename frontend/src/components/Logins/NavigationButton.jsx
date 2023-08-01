import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./NavigationButton.css";
import image1 from "../../assets/css/imgs/image1.png";
import image2 from "../../assets/css/imgs/image2.avif";
import image3 from "../../assets/css/imgs/image3.png";
import image4 from "../../assets/css/imgs/image4.png";
import image5 from "../../assets/css/imgs/image5.avif";

function NavigationButton({ data, to, topic_id, children, hideButton }) {
  console.log("Received topic_id:", topic_id);
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  const imageSrcMap = {
    "00001":
      image1,
    "00002":
      image2,
    "00003":
      image3,
    "00004":
      image4,
    "00005":
      image5,
  };

  const title = {
    "00001": "Chapter 1 Introduction",
    "00002": "Chapter 2 History of Religion",
    "00003": "Chapter 3 Ethics and Morals",
    "00004": "Chapter 4 Communications",
    "00005": "Chapter 5 Practices",
  };

  const imageSrc = imageSrcMap[topic_id];
  console.log("Image source for topic_id:", topic_id, "is", imageSrc);

  const buttonStyle = {
    display: topic_id ? "block" : "none", // Show the button only if topic_id exists
    width: "200px",
    height: "30px",
  };

  return (
    <div onClick={handleClick} style={buttonStyle} data-cy={data}>
      {topic_id && ( // Check if topic_id exists before rendering content
        <div className="square-container">
          <img
            src={imageSrc}
            alt={`Chapter ${topic_id}`}
            className="square-image"
          />
          <Text fontSize="lg" fontWeight="bold" fontFamily="Roboto">
            {title[topic_id]}
          </Text>
        </div>
      )}
      {children}
    </div>
  );
}

export default NavigationButton;
