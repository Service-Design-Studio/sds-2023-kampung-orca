import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEditableControls } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import DeleteButton from "../ForumMethods/DeleteButton";
import {
  ButtonGroup,
  IconButton,
  Icon,
  Button,
  Flex,
  Editable,
  EditablePreview,
  EditableTextarea,
  Stack,
} from "@chakra-ui/react";
import { BsCheckLg, BsXLg, BsFillPencilFill } from "react-icons/bs";

function EditField({
  defaultValue,
  postId,
  commentId,
  fetchPosts,
  fetchComments,
  type,
  handleCommentDelete, // Receive handleCommentDelete as a prop
  deletePost, // Receive deletePost as a prop
}) {
  const [inputValue, setInputValue] = useState(defaultValue);


  const url = window.location.href;
  const parts = url.split("/");
  const lessonnum = parts[parts.length - 1];
  const lessonNumber = parseInt(lessonnum, 10);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUpdate = (newValue) => {
    // Perform the necessary logic with the updated input value
    if (type === "post") {
      updatePost(postId, newValue);
    } else {
      updateComment(postId, commentId, newValue);
    }

    console.log("Updated input value:", newValue);
  };

  const updatePost = async (postId, updatedData) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.patch(`http://localhost:3001/lessons/${lessonNumber}/posts/${postId}`, {
        token: cookieValue,
        content: updatedData,
      });

      await fetchPosts();
      //const temp = selectedPost;
      //setSelectedPost(null);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const updateComment = async (postId, commentId, updatedData) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.patch(
        `http://localhost:3001/lessons/${lessonNumber}/posts/${postId}/comments/${commentId}`,
        {
          token: cookieValue,
          content: updatedData,
        }
      );

      await fetchComments(postId);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="right" direction="column">
        <Button
          bg="#FFFFFF"
          width="60px"
          shadow="lg"
          {...getSubmitButtonProps()}
        >
          <BsCheckLg size="20px" />
        </Button>
        <Button
          bg="#FFFFFF"
          width="60px"
          shadow="lg"
          {...getCancelButtonProps()}
        >
          <BsXLg />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="right">
        <Button bg="#FFFFFF" width="60px" shadow="lg" {...getEditButtonProps()}>
          <BsFillPencilFill />
        </Button>
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="left"
      fontSize="md"
      mb={4}
      color="#555"
      isPreviewFocusable={false}
      defaultValue={defaultValue}
      //onChange={handleInputChange}
      onSubmit={handleUpdate}
    >
      <Stack
        justify="space-between"
        direction="column"
        align="flex-start"
        position="relative"
      >
        <EditablePreview textAlign="justify" />
        <EditableTextarea minH={type === "post" ? "200px" : "80px"} />

        <Flex direction="row" justify="flex-end" width="100%">
          <Stack
            direction="row"
            position="absolute"
            bottom="-35px"
            right="-10px"
          >
            <EditableControls />
            {type === "post" && (
              <DeleteButton onDelete={() => deletePost(postId)} />
            )}
            {type === "comment" && (
              <DeleteButton
                onDelete={() => handleCommentDelete(postId, commentId)}
              />
            )}
          </Stack>
        </Flex>
      </Stack>
    </Editable>
  );
}

export default EditField;
