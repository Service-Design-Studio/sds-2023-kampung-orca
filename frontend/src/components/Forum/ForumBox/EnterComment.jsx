import React from "react";
import { Stack, Heading, Button, Avatar, Textarea } from "@chakra-ui/react";
import Cookies from "js-cookie";
import axios from "axios";

export const EnterComment = ({ image, name, postId, fetchComments }) => {
  const [valueContent, setValueContent] = React.useState("");
  const handleContentChange = (event) => setValueContent(event.target.value);

  const handleButtonClick = () => {
    CreateComment(valueContent, postId);
    console.log(postId);
  };

  const CreateComment = async (con, id) => {
    const cookieValue = Cookies.get("token");
    const postId = id;
    try {
      const response = await axios.post(
        `http://localhost:3001/lessons/1/posts/${postId}/comments`,
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
      <Stack direction="row">
        <Avatar size="md" src={image}></Avatar>
        <Stack pl="5px" direction="column" width="100%">
          <Heading size="s">{name} </Heading>
          <Stack direction="row" align="flex-end">
            <Textarea
              resize="none"
              fontSize="sm"
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
              height="28px"
              fontSize="14px"
              width="100px"
              shadow="md"
              onClick={handleButtonClick}
            >
              Comment
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
