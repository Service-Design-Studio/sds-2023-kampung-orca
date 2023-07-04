import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button } from "@chakra-ui/react";

const CoverLogin = () => (
  <Stack
    direction="column"
    justify="center"
    align="center"
    spacing="0"
    width="1007px"
    height="205px"
    color="#000"
    textAlign="center"
  >
    <Text
      fontSize="96px"
      fontFamily="Outfit"
      fontWeight="700"
      lineHeight="normal"
    >
      Welcome to Interfaith
    </Text>
    <Link to ={'/Home'}>
      <Button
        fontSize="64px"
        fontFamily="Outfit"
        fontWeight="700"
        lineHeight="normal"
        color="rgba(0, 0, 0, 0.5)"
        mt="4"
      >
        Login
      </Button>
    </Link>
    <Link to ={'/login'}>
      <Button
        fontSize="64px"
        fontFamily="Outfit"
        fontWeight="700"
        lineHeight="normal"
        color="rgba(0, 0, 0, 0.5)"
        mt="4"
      >
        Learn more
      </Button>
    </Link>
  </Stack>
);
export default CoverLogin;