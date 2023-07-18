import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEditableControls } from "@chakra-ui/react";
import {
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditablePreview,
  EditableInput,
  Input,
} from "@chakra-ui/react";
import {
  BsCheckSquareFill,
  BsFillXSquareFill,
  BsFillPencilFill,
} from "react-icons/bs";

function EditField({ defaultValue, postId, commentId, fetchPosts, fetchComments, type }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUpdate = (newValue) => {
    // Perform the necessary logic with the updated input value
    if(type === "post")
    {
      updatePost(postId, newValue);
    }
    else{
      updateComment(postId, commentId, newValue);
    }
    
    console.log("Updated input value:", newValue);
    
  };


  const updatePost = async (postId, updatedData) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.patch(`http://localhost:3001/lessons/1/posts/${postId}`, {
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
        `http://localhost:3001/lessons/1/posts/${postId}/comments/${commentId}`,
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
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<BsCheckSquareFill />} {...getSubmitButtonProps()} />
        <IconButton icon={<BsFillXSquareFill />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size="sm"
          icon={<BsFillPencilFill />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="left"
      fontSize="lg" fontStyle="italic" mb={4} color="#555"
      isPreviewFocusable={false}
      defaultValue={defaultValue}
      //onChange={handleInputChange}
      onSubmit={handleUpdate}
    >

    
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  );
}

export default EditField;
