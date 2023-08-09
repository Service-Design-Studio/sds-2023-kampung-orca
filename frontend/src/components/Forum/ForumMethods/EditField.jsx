import React, { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEditableControls } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

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
  Text,
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
  const toast = useToast();
  const [inputValue, setInputValue] = useState(defaultValue);
  const [initialInputValue, setInitialInputValue] = useState(defaultValue);
  const isTextareaEmpty = inputValue.trim().length === 0;
  const editableRef = useRef(); //

  const url = window.location.href;
  const parts = url.split("/");
  const lessonnum = parts[parts.length - 1];
  const lessonNumber = parseInt(lessonnum, 10);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditClick = () => {
    setInitialInputValue(inputValue);
  };

  const handleCancelClick = () => {
    setInputValue(initialInputValue);
    toast({
      title: "Changes cancelled!",
      description: "Your changes have been cancelled.",
      status: "success",
      duration: 3000,
      isClosable: true,
      colorScheme: "red",
    });
  };

  const handleSubmitClick = () => {
    setInitialInputValue(inputValue);
    toast({
      title: "Changes saved!",
      description: "You have successfully made changes.",
      status: "success",
      duration: 3000,
      isClosable: true,
      colorScheme: "red",
    });
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
      await axios.patch(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}`,
        {
          token: cookieValue,
          content: updatedData,
        }
      );

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
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}/comments/${commentId}`,
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
  function EditableControls({ inputValue = "" }) {
    const isTextareaEmpty = inputValue.trim().length === 0;
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
          isDisabled={isTextareaEmpty}
          {...getSubmitButtonProps({ onClick: handleSubmitClick })}
        >
          <BsCheckLg size="20px" data-cy="confirm-edit-post" />
        </Button>
        <Button
          bg="#FFFFFF"
          width="60px"
          shadow="lg"
          {...getCancelButtonProps({ onClick: handleCancelClick })}
        >
          <BsXLg />
        </Button>
      </ButtonGroup>
    ) : (
      <ButtonGroup justifyContent="right" direction="column">
        <Button
          bg="#FFFFFF"
          width="60px"
          shadow="lg"
          {...getEditButtonProps({ onClick: handleEditClick })}
        >
          <BsFillPencilFill data-cy="edit-post-button" />
        </Button>
        {type === "post" && (
          <DeleteButton onDelete={() => deletePost(postId)} />
        )}
        {type === "comment" && (
          <DeleteButton
            data-cy="comment-delete-button"
            onDelete={() => handleCommentDelete(postId, commentId)}
          />
        )}
      </ButtonGroup>
    );
  }

  return (
    <Editable
      textAlign="left"
      fontSize="md"
      mb={4}
      color="#555"
      isPreviewFocusable={true}
      value={inputValue}
      onChange={(value) => setInputValue(value)}
      onSubmit={handleUpdate}
    >
      <Stack
        justify="space-between"
        direction="column"
        align="flex-start"
        position="relative"
      >
        <EditablePreview
          textAlign="justify"
          maxW={type === "post" ? "480px" : "470px"}
        />
        <EditableTextarea
          data-cy="edit-content-text-area"
          minH={type === "post" ? "200px" : "80px"}
          width="100%"
        />

        <Flex direction="row" justify="flex-end" width="100%">
          <Stack direction="row" position="absolute" bottom="-35px" right="0px">
            <EditableControls inputValue={inputValue} />
          </Stack>
        </Flex>
      </Stack>
    </Editable>
  );
}

export default EditField;
