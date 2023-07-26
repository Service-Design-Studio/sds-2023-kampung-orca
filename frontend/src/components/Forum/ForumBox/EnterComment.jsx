import React from "react";
import { Stack, Heading, Button, Avatar, Textarea } from "@chakra-ui/react";
import Cookies from "js-cookie";
import axios from "axios";

import { useParams } from "react-router-dom";

export const EnterComment = ({ image, name, postId, fetchComments }) => {
  const [valueContent, setValueContent] = React.useState("");
  const handleContentChange = (event) => setValueContent(event.target.value);

  const url = window.location.href;
  const parts = url.split("/");
  const lessonnum = parts[parts.length - 1];
  const lessonNumber = parseInt(lessonnum, 10);

  const handleButtonClick = () => {
    CreateComment(valueContent, postId);
    console.log(postId);
  };

  const CreateComment = async (con, id) => {
    const cookieValue = Cookies.get("token");
    const postId = id;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}/comments`,
        {
          token: cookieValue,
          comment: { content: con },
        }
      );
      console.log(response);
      setValueContent("");
      await fetchComments(postId);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  return (
    <>
      <Stack width="100%" direction="row" justify="center" align="center">
        <Avatar shadow="md" size="md" src={image}></Avatar>
        <Textarea
          bg="#FFFFFF"
          resize="none"
          fontSize="sm"
          width="100%"
          shadow="md"
          placeholder="Write your comment here..."
          color="#555"
          value={valueContent}
          onChange={handleContentChange}
        />
        <Button
          size="lg"
          bg="#ed2e38"
          textColor="#FFFFFF"
          _hover={{ bg: "#7c191c" }}
          height="80px"
          fontSize="14px"
          width="20px"
          shadow="lg"
          onClick={handleButtonClick}
        >
          Post
        </Button>
      </Stack>
    </>
  );
};
