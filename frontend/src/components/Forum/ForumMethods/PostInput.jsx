// PostInput.jsx
import React, { useState } from "react";
import { Input, Textarea, Button, Icon, Stack } from "@chakra-ui/react";
import { BsChatDots, BsFillPlusCircleFill } from "react-icons/bs";
import Cookies from "js-cookie";
import axios from "axios";

import { useParams } from "react-router-dom";

function PostInput({ isFormOpen, setFormOpen, refreshPosts, setRefreshPosts }) {
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");

  const url = window.location.href;
  const parts = url.split("/");
  const lessonnum = parts[parts.length - 1];
  const lessonNumber = parseInt(lessonnum, 10);

  const handleButtonClick = () => {
    setFormOpen(true);
    console.log(setRefreshPosts);
  };

  const handlePostButtonClick = async () => {
    setFormOpen(false);
    await createPost(valueTitle, valueContent);
    setValueTitle("");
    setValueContent("");
  };

  const handleBackButtonClick = async () => {
    setFormOpen(false);
    setValueTitle("");
    setValueContent("");
  };

  const handleTitleChange = (event) => {
    setValueTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setValueContent(event.target.value);
  };

  const createPost = async (title, content) => {
    const cookieValue = Cookies.get("token");

    try {
      const response = await axios.post(
        `http://localhost:3001/lessons/${lessonNumber}/posts`,
        {
          token: cookieValue,
          post: { title, content },
        }
      );
      setRefreshPosts(true);
      setTimeout(() => {
        setRefreshPosts(false);
        console.log("reser");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
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
          data-cy = "create-new-post-button"
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
              data-cy='post-title-input'
              textColor="black"
              width="460px"
              variant="flushed"
              borderColor="grey"
              placeholder="Title"
              value={valueTitle}
              onChange={handleTitleChange}
            />
            <Textarea
              data-cy='post-content-input'
              resize="none"
              textColor="black"
              width="460px"
              variant="unstyled"
              placeholder="Enter your post content here..."
              value={valueContent}
              onChange={handleContentChange}
            />
          </Stack>
          <Stack direction="column">
            <Button
              width="50px"
              height="30px"
              variant="ghost"
              bg="#ed2e38"
              textColor="#FFFFFF"
              _hover={{ bg: "#7c191c" }}
              fontSize="18px"
              style={{ zIndex: 999 }}
              onClick={handleBackButtonClick}
            >
              Back
            </Button>
            <Button
              width="50px"
              height="92px"
              variant="ghost"
              bg="#ed2e38"
              textColor="#FFFFFF"
              _hover={{ bg: "#7c191c" }}
              fontSize="18px"
              style={{ zIndex: 999 }}
              onClick={handlePostButtonClick}
              isDisabled={!valueTitle || !valueContent}
              data-cy = "post-button"
            >
              Post
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default PostInput;
