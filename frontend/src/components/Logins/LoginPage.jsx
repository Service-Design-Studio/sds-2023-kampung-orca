import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button, Image, Heading } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import { Header } from "../Header";

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
      width="100%"
      // fontSize="24px"
      borderRadius="20px"
      bg="#ed2e38"
      textColor="#FFFFFF"
      _hover={{ bg: "#7c191c" }}
      size="lg"
      height="65px"
      shadow="md"
      onClick={() => googleLogin()}
      // as="a"

      color="#FFFFFF"
      // fontSize={["36px", "40px", "44px", "48px"]}

      id="google-login"
      fontSize="clamp(12px, 3vw, 36px)" // Set the font size using the clamp function
    >
      <img
        src="https://ragsdalemartin.com/wp-content/uploads/2020/07/white-google-logo.png" // Replace with the actual path to the Google icon image
        width="40px"
        height="auto"
      />

      <Text
        fontFamily="Roboto"
        fontStyle="normal"
        margin="20px"
        fontSize={{
          base: "16px",
          lg: "20px",
          xl: "24px",
          "2xl": "24px",
        }}
      >
        Sign in with Google
      </Text>
    </Button>
  );
};

const LoginPage = () => {
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      width="100vw"
      background="#FFFFFF"
    >
      <Header showBack buttontext="Back to Main" path="/" />
      <Stack
        direction="row"
        justify="center"
        align="center"
        spacing="0"
        width="100%"
        height={`calc(100vh - 120px)`}
        color="#000"
        textAlign="center"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Video Embedding */}
        {/* <Stack
                borderRadius="0px 0px 0px 0px"
                justify="flex-start"
                align="center"
                overflow="hidden"
                background="#E0C825"
                shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
                width="47vw"
                height="50vh"
              >
      
        <iframe
          src="https://www.youtube.com/embed/cpP-fCo8Dn4"
          width="100%"
          height="100%"
          title="Embedded Video"
        />
      
      </Stack> */}

        <Stack
          paddingX={{
            base: "40px",
            lg: "50px",
            xl: "60px",
            "2xl": "70px",
          }}
          paddingY={{
            base: "40px",
            lg: "50px",
            xl: "60px",
            "2xl": "70px",
          }}
          spacing={{
            base: "20px",
            lg: "20px",
            xl: "30px",
            "2xl": "30px",
          }}
          justify="center"
          align="center"
          overflow="hidden"
          width="45vw"
          height="fit-content"
          background="#FFFFFF"
          shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
          marginX="2vw"
          marginY="2vh"
          borderRadius="20px"
        >
          <Stack
            direction="column"
            justify="center"
            align="center"
            spacing="8"
            width="100%"
            height="100%"
            px="4"
          >
            <Heading fontSize="50px" fontFamily="Averia Serif Libre">
              Login to Interfaith
            </Heading>
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            >
              <GoogleLoginButton />
            </GoogleOAuthProvider>

            {/* <Button
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
        </Button> */}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
