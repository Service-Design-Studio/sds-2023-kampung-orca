import React, { useState } from "react";
import Chat from "../../Chatbox/Chat";
import { Link } from "react-router-dom";
import BoxPost from "./BoxPost";
import { BsChatDots, BsFillPlusCircleFill } from "react-icons/bs";
import {
  Input,
  Textarea,
  Button,
  Slide,
  Container,
  Flex,
  Icon,
  Box,
  CloseButton,
  Text,
  Card,
  Stack,
  Heading,
  Avatar,
} from "@chakra-ui/react";

function ForumBoxPost() {
  const [activePostId, setActivePostId] = useState(null);

  const handlePostClick = (postId) => {
    setActivePostId(postId);
  };

  return (
    <>
      <BoxPost
        id={1}
        isActive={activePostId === 1}
        onClick={() => handlePostClick(1)}
      />
    </>
  );
}

export default ForumBoxPost;
