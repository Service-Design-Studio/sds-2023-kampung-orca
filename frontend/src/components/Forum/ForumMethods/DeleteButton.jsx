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
import { useDisclosure } from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";

function DeleteButton({ onDelete, ml }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleDelete = () => {
    onDelete();
    onClose();
    toast({
      title: "Deleted!",
      description: "Your post or comment has been successfully deleted.",
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
      <Button
        data-cy="post-delete-button"
        bg="#FFFFFF"
        shadow="md"
        onClick={onOpen}
        ml={ml}
        width="60px"
      >
        <Icon as={BsFillTrashFill} />
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete
            </AlertDialogHeader>

            <AlertDialogBody>
              {"Are you sure? Kampung Kaki will reply soon!"}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={handleCancel}
                data-cy="cancel-delete-button"
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={handleDelete}
                data-cy="confirm-delete-button"
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteButton;
