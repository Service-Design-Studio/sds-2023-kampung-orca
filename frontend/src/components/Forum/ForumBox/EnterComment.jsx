import React from "react";
import { Stack, Heading, Button, Avatar, Textarea } from "@chakra-ui/react";
import Cookies from "js-cookie";
import axios from "axios";

export const EnterComment = ({ image, name }) => {
  const [valueContent, setValueContent] = React.useState("");
  const handleContentChange = (event) => setValueContent(event.target.value);

  const handleButtonClick = () => {
    CreateComment(valueContent);
  };

  const CreateComment = async (con) => {
    const cookieValue = Cookies.get("token");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/1/posts/2/comments`,
        {
          token: cookieValue,
          comment: { content: con },
        }
      );
      console.log(response);
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
              textColor="#000000"
              placeholder="Write your comment here..."
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
