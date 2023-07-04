import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button } from "@chakra-ui/react";

const LoginPage = () => (
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
      Login to Interfaith
    </Text>
    <Stack
      direction="column"
      justify="center"
      align="center"
      spacing="4"
      width="721.066px"
      height="406px"
      borderRadius="10px"
      background="rgba(217, 217, 217, 0.90)"
      mt="4"
    >
      <Text
        fontSize="28px"
        fontFamily="Outfit"
        fontWeight="700"
        lineHeight="normal"
        color="#000"
      >
        How To Login
      </Text>
      <Text fontSize="16px" fontFamily="Outfit" lineHeight="normal">
        Enter your username in the top box.
      </Text>
      <Text fontSize="16px" fontFamily="Outfit" lineHeight="normal">
        Enter your password in the bottom box.
      </Text>
      <Text fontSize="16px" fontFamily="Outfit" lineHeight="normal">
        If you forgot your username or password, click on{" "}
        <Link to="/forgot">“Forgot your username or password?”</Link>
      </Text>
    </Stack>
    <Button
      as={Link}
      to="/signin-google"
      display="flex"
      width="606.477px"
      height="78px"
      flexDirection="column"
      justifyContent="center"
      flexShrink="0"
      color="#FFF"
      fontSize="48px"
      fontFamily="Outfit"
      fontWeight="700"
      lineHeight="normal"
      bg="blue.500"
      mt="4"
    >
      Sign in with Google
    </Button>
    <Button
      as={Link}
      to="/signin-facebook"
      display="flex"
      width="606.477px"
      height="78px"
      flexDirection="column"
      justifyContent="center"
      flexShrink="0"
      color="#FFF"
      fontSize="48px"
      fontFamily="Outfit"
      fontWeight="700"
      lineHeight="normal"
      bg="blue.500"
      mt="4"
    >
      Sign in with Facebook
    </Button>
  </Stack>
);

export default LoginPage;

