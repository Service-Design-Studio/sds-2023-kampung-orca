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
        `http://localhost:3001/lessons/${lessonNumber}/posts/${postId}/comments`,
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
        <Stack width="100%" direction="column" align="flex-end">
          <Textarea
            bg="#FFFFFF"
            resize="none"
            fontSize="sm"
            width="100%"
            shadow="md"
            height="10px"
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
            height="30px"
            fontSize="14px"
            width="90px"
            shadow="lg"
            onClick={handleButtonClick}
            isDisabled={!valueContent}
          >
            Comment
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
