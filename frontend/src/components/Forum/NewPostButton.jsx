import React, { useState } from "react";
import Chat from "../Chatbox/Chat";
import { Link } from "react-router-dom";
import ForumBoxPost from "./ForumBoxPost";
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
import Cookies from 'js-cookie';
import axios from 'axios';

function NewPostButton() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [activePostId, setActivePostId] = useState(null);

  

  

  const handleButtonClick = () => {
    setFormOpen(true);
  };

  const handlePostButtonClick = () => {
    CreatePost();
    setFormOpen(false);
  };

  const CreatePost = async () => {
    const cookieValue = Cookies.get('token');
    console.log(cookieValue);
    try {
      const response = await axios.post('http://localhost:3003/lessons/1/posts', {
        token: cookieValue,
        post: { title: "New UI", content: "New Me" }
      });
      console.log(response);
    } catch (error) {
      
        console.log("Error occurred:", error);
      
    }
  };
  

  const handlePostClick = (postId) => {
    setActivePostId(postId);
  };

  return (
    <>
      <Stack
        height={isFormOpen ? "430px" : "520px"}
        mb="20px"
        padding="10px"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.1)`,
          },
          "&::-webkit-scrollbar-thumb": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `rgba(237, 46, 56, 1)`,
          },
        }}
      >
        <ForumBoxPost />
      </Stack>

      <Stack width="600px" justify="center" align="center">
        {!isFormOpen ? (
          <Button
            shadow="md"
            variant="outline"
            width="180px"
            size="md"
            bg="#ed2e38"
            textColor="#FFFFFF"
            _hover={{ bg: "#7c191c" }}
            leftIcon={<Icon as={BsFillPlusCircleFill} />}
            onClick={handleButtonClick}
          >
            Create New Post
          </Button>
        ) : (
          <Stack
            direction="row"
            align="flex-start"
            justify="flex-start"
            mr="30px"
          >
            <Stack
              bg="#FFFFFF"
              borderRadius="5px"
              border="1px solid grey"
              paddingX="20px"
            >
              <Input
                textColor="black"
                width="460px"
                variant="flushed"
                borderColor="grey"
                placeholder="Title"
              />
              <Textarea
                resize="none"
                textColor="black"
                width="460px"
                variant="unstyled"
                placeholder="Enter your post content here..."
              />
            </Stack>
            <Button
              width="50px"
              height="130px"
              variant="ghost"
              bg="#ed2e38"
              textColor="#FFFFFF"
              _hover={{ bg: "#7c191c" }}
              fontSize="18px"
              style={{ zIndex: 999 }}
              onClick={handlePostButtonClick}
            >
              Post
            </Button>
          </Stack>
        )}
      </Stack>
    </>
  );
}

export default NewPostButton;
