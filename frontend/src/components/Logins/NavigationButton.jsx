import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./NavigationButton.css";

function NavigationButton({ data, to, topic_id, children, hideButton }) {
  console.log("Received topic_id:", topic_id);
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  const imageSrcMap = {
    "00001":
      "https://cdn-icons-png.flaticon.com/512/29/29302.png?w=740&t=st=1689052858~exp=1689053458~hmac=7cf8faa9fd039c16be8dde7ef26fd2eddab71c077a80aac164e1528770a0046a",
    "00002":
      "https://img.freepik.com/free-vector/interreligious-dialogue-abstract-concept-vector-illustration-different-traditions-religious-symbol-members-interaction-orthodox-church-handshake-christian-pope-conference-abstract-metaphor_335657-6320.jpg?w=740&t=st=1689053151~exp=1689053751~hmac=2b5d09c24d62c6b11675fc3241281a0b05116a6f257962bc0f36675b9b985167",
    "00003":
      "https://cdn-icons-png.flaticon.com/512/86/86122.png?w=740&t=st=1689054584~exp=1689055184~hmac=89f6b6409da35c7d836206ef6d31ac64ad2aeb62e8561d6ca49587fbb70fc744",
    "00004":
      "https://cdn-icons-png.flaticon.com/512/43/43168.png?w=740&t=st=1689059837~exp=1689060437~hmac=cb3d0e305ad9f551c9616fc44193e14f22a7df3d743c3a6be21c9dd5c921a619",
    "00005":
      "https://img.freepik.com/free-vector/praying-hands-religion-holy-catholic-christian-spirituality-belief-hope_1284-41654.jpg?w=740&t=st=1689061208~exp=1689061808~hmac=f6349c0c9bbc6220e9fcb94971149f37143a8c75064b3bc3d5f8e96e6e408a42",
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
          <Text fontSize="lg" fontWeight="bold">
            {title[topic_id]}
          </Text>
        </div>
      )}
      {children}
    </div>
  );
}

export default NavigationButton;
