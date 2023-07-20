import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button, Image } from "@chakra-ui/react";
import axios from "./api.jsx";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";

const GoogleLoginButton = () => {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: `${process.env.REACT_APP_FRONTEND_URL}/oauth/google`,
    onSuccess: (errorResponse) => console.log(errorResponse),
    onError: (errorResponse) => console.log(errorResponse),
    onNonOAuthError: (errorResponse) => console.log(errorResponse),
    state: `${process.env.REACT_APP_FRONTEND_URL}/curriculum/topic`,
  });

  return (
    <Button
      onClick={() => googleLogin()}
      as="a"
      display="flex"
      width={["80%", "70%", "60%", "606.477px"]}
      height="78px"
      flexDirection="column"
      justifyContent="center"
      flexShrink="0"
      color="#FFFFFF"
      fontSize={["36px", "40px", "44px", "48px"]}
      fontFamily="Outfit"
      fontWeight="700"
      lineHeight="normal"
      bg="#ed2e38"
      mt="4"
      _hover={{ bg: "blue.600" }}
      _active={{ bg: "blue.700" }}
      id="google-login"
    >
      <img
        src="/path/to/google-icon.png" // Replace with the actual path to the Google icon image
        alt=""
        style={{ marginRight: "10px", width: "40px" }}
      />
      Sign in with Google
    </Button>
  );
};
const LoginPage = () => {
  return (
    <Stack
      direction="row"
      justify="center"
      align="center"
      spacing="0"
      width="100%"
      height="100vh"
      color="#000"
      textAlign="center"
    >
      {/* Video Embedding */}
      <Stack
        direction="column"
        justify="center"
        align="flex-start"
        spacing="4"
        width="50%"
        height="100%"
        px="4"
        bgGradient="linear(to-b, rgba(255,255,255,0.8), rgba(255,255,255,0.8))"
      >
        <iframe
          src="https://www.youtube.com/embed/your-video-id"
          width="100%"
          height="400px"
          title="Embedded Video"
        />
      </Stack>
      <Stack
        direction="column"
        justify="center"
        align="center"
        spacing="8"
        width="50%"
        height="100%"
        px="4"
      >
        <Text
          fontSize={["64px", "72px", "84px", "96px"]}
          fontFamily="Outfit"
          fontWeight="700"
          lineHeight="normal"
        >
          Login to Interfaith
        </Text>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <GoogleLoginButton />
        </GoogleOAuthProvider>
        <Button
          as={Link}
          to="/signin-facebook"
          display="flex"
          width={["80%", "70%", "60%", "606.477px"]}
          height="78px"
          flexDirection="column"
          justifyContent="center"
          flexShrink="0"
          color="#FFFFFF"
          fontSize={["36px", "40px", "44px", "48px"]}
          fontFamily="Outfit"
          fontWeight="700"
          lineHeight="normal"
          bg="#ed2e38"
          mt="4"
          _hover={{ bg: "blue.600" }}
          _active={{ bg: "blue.700" }}
        >
          Sign in with Facebook
        </Button>
      </Stack>
    </Stack>
  );
};
export default LoginPage;
