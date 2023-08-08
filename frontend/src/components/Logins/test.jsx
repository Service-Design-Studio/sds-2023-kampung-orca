import React from "react";
import { Box, Text, Stack, Button, Heading, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { PiBookBookmarkBold, PiScalesBold, PiHandsPrayingBold, PiChatsCircleBold } from "react-icons/pi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import "./NavigationButton.css"; // Import the CSS file



function NavigationButton({ data, to, topic_id, children, hideButton }) {
  console.log("Received topic_id:", topic_id);
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  const imageSrcMap = {
    "00001": PiBookBookmarkBold,
    "00002": MdOutlineHistoryEdu,
    "00003": PiScalesBold,
    "00004": PiChatsCircleBold,
    "00005": PiHandsPrayingBold,
  };

 

  const title = {
    "00001": "Introduction",
    "00002": "History of Religion",
    "00003": "Ethics and Morals",
    "00004": "Communications",
    "00005": "Practices",
  };

  const imageSrc = imageSrcMap[topic_id];
  console.log("Image source for topic_id:", topic_id, "is", imageSrc);

  const buttonStyle = {
    display: hideButton ? "none" : "block",
    width: "200px",
    height: "30px",
  };

  return (
    <Stack direction="column" align="center">
      <Button 
          height={{
            base: "100px",
            lg: "150px",
            xl: "200px",
            "2xl": "200px",
          }}
          width={{
            base: "100px",
            lg: "150px",
            xl: "200px",
            "2xl": "200px",
          }}
          onClick={handleClick} data-cy={data} bg="#FFFFFF" shadow="lg">
        <Stack direction="column" align="center">       
          <Icon
            as={imageSrc}
            boxSize={{
              base: "80px",
              lg: "80px",
              xl: "130px",
              "2xl": "130px",
            }}
          />
          </Stack> 
      </Button>
      <Heading textAlign="center" mt="5px" fontSize={{
            base: "14px",
            lg: "18px",
            xl: "20px",
            "2xl": "20px",
          }}
          fontStyle="italic"
      >

      {title[topic_id]}
    </Heading>
    </Stack>
    );
  }
  
  export default NavigationButton;