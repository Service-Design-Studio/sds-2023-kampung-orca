import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Flex,
  Button,
  Icon,
  ButtonGroup,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function SubmitAlert({ isOpen, onClose, onSubmit }) {
  const toast = useToast();
  const cancelRef = React.useRef();

  const handleSubmit = () => {
    onSubmit();
    onClose();

    toast({
      title: "Answer submitted!",
      description: "Your answer has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
      colorScheme: "red",
    });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Submit
            </AlertDialogHeader>

            <AlertDialogBody
              data-cy="exercise-submit-alert"
            >
              {
                "Do you want to submit your answer? You cannot change your response after it has been submitted!"
              }
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCancel} data-cy="exercise-submit-alert-cancel-button">
                Cancel
              </Button>
              <Button colorScheme="red" ml={3} onClick={handleSubmit} data-cy="exercise-submit-alert-button">
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default SubmitAlert;
