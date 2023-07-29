import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Icon } from "@chakra-ui/react";
import { GoChevronLeft } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import ChatButton from "./Chatbox/Chatbutton";

export const Header = ({
  path,
  buttontext,
  secondpath,
  secondbuttontext,
  showSecondButton,
  showChat,
  showForum,
}) => (
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
    <Stack direction="row">
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

      {showSecondButton && (
        <Link to={secondpath}>
          <Button
            style={{ zIndex: 999 }}
            ml="10px"
            size="lg"
            shadow="lg"
            bg="#FFFFFF"
            textColor="#000000"
            _hover={{ bg: "#d8d9e3" }}
            height="48px"
          >
            {secondbuttontext}
          </Button>
        </Link>
      )}
    </Stack>

    <Stack direction="row">{showChat && <ChatButton />}</Stack>
  </Stack>
);
