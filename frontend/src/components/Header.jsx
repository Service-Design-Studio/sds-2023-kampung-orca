import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Icon } from "@chakra-ui/react";
import { GoChevronLeft } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export const Header = ({
  path,
  buttontext,
  showLogout,
  showBack,
}) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/";
    onClose();
    // toast({
    //   title: "Logged out!",
    //   description: "You are now logged out of your account.",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true,
    //   colorScheme: "red",
    // });
  };

  const handleCancel = () => {
    onClose();
  };

  return (

  <Stack //header stack with back button
    paddingX="30px"
    paddingTop="30px"
    paddingBottom="30px"
    direction="row"
    justify="space-between"
    align="center"
    overflow="show"
    width="100vw"
    height="90px"
    maxWidth="100%"
    background="#ed2e38"
  >
    <Stack direction="row"  justify="space-between" width="100%">
    {showBack && (
    <Link to={path}>
        <Button
          style={{ zIndex: 999 }}
          size="lg"
          shadow="lg"
          bg="#FFFFFF"
          textColor="#000000"
          _hover={{ bg: "#d8d9e3" }}
          height="48px"
          leftIcon={<Icon as={GoChevronLeft} />}
        >
          {buttontext}
        </Button>
      </Link>
    )}

      
    </Stack>
    <Stack>{showLogout && (
          <Button
            style={{ zIndex: 999 }}
            onClick={onOpen}
            ml="10px"
            size="lg"
            shadow="lg"
            bg="#FFFFFF"
            textColor="#000000"
            _hover={{ bg: "#d8d9e3" }}
            height="48px"
            rightIcon={<Icon as={RxExit} />}
          >
            Logout
          </Button>
        
      )}
      </Stack>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log out?
            </AlertDialogHeader>

            <AlertDialogBody>
              {"Do you wish to log out of your account?"}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

   
  </Stack>
)};
