import React from "react";
import { Link } from "react-router-dom";
import { Stack, Text, Button,Box } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import imgkampung from "../../assets/css/imgs/imgkampung.png";
import { FaGoogle } from "react-icons/fa";

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
      display="flex"
      alignItems="center" // Center the icon vertically
      width={[ "60%","90%"]}
      height="78px"
      flexDirection="column"
      justifyContent="center"
      flexShrink="0"
      color="#FFFFFF"
      
      fontFamily="Roboto"
      fontWeight="700"
      lineHeight="normal"
      bg="#ed2e38"
      mt="4"
      _hover={{ bg: "blue.600" }}
      _active={{ bg: "blue.700" }}
      id="google-login"
      fontSize="clamp(12px, 3vw, 36px)" // Set the font size using the clamp function
      
    >
      
      Sign in to Google 🚀
    </Button>
  );
};

const LoginPage = () => {
  return (
    <Box
      width="100%"
      height="100vh"      
      color="#000"
      textAlign="center"
    >
       <Stack
        direction="column"
        justify="center"
        align="center"
        spacing="4%" // Adjust the spacing as needed
        height="100%"
        p="4"
        
        backgroundImage={`url(${imgkampung})`}
        backgroundSize="cover"
      >
        <Text
          fontSize={["48px","64px", "72px"]}
          fontFamily="Outfit"
          fontWeight="700"
          lineHeight="normal"
          textAlign="center" // Center the text horizontally
          mt = "5%"
          
        >
          Login to Kampung.SG
        </Text>
        <Stack
          direction={["column", "row"]}
          justify="top"
          align="center"
          spacing="4"
          width="100%"
          height="100%"
          px="4"
          
        >
          <Stack width="50%" height="90%" align="flex-start"  >
            {/* Video Embedding */}
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              width="100%"
              height="400px"
              title="Embedded Video"
              
            />
          </Stack>
          <Stack width="50%" height="90%" align="flex-start" mt = "-6" spacing="4" paddingLeft="12">
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
              <GoogleLoginButton />
            </GoogleOAuthProvider>
            <Box
              // Group 48
              width="90%"
              bg="rgba(217, 217, 217, 0.9)"
              borderRadius="15px"
              mt="6"
              p="4"
              textAlign="center"
            >
              <Text
                fontFamily="Roboto"
                fontWeight="700"
                fontSize={["8px","24px","36px"]}
                lineHeight="60px"
                color="#000000"
              >
                How To Login
              </Text>
              <Text
                fontFamily="Roboto"
                
                fontSize={["8px","18px","24px"]}
                lineHeight="33px"
                color="#000000"
                mt="4"
                textAlign="left"
              >
                Enter your username in the top box. <br />
                Enter your password in the bottom box. <br />
                <br />
                If you forgot your username or password, click on &ldquo;Forgot your username or password?&rdquo;
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginPage;
