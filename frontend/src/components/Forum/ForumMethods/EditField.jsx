import React, { useEffect, useState } from "react";
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

function EditField({ defaultValue }) {
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

  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setInputValue(updatedValue);
  };

  const handleUpdate = () => {
    // Perform the necessary logic with the updated input value
    console.log("Updated input value:", inputValue);
  };

  return (
    <Editable
      textAlign="center"
      fontSize="2xl"
      isPreviewFocusable={false}
      defaultValue={defaultValue}
      onChange={handleInputChange}
      onSubmit={handleUpdate}
    >
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  );
}

export default EditField;
