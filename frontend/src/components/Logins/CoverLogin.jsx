import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Text, Button, ScaleFade } from "@chakra-ui/react";
import DrawImageAnimation from "./DrawImageAnimation";

const CoverLogin = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      spacing="0"
      width="100%"
      height="100vh"
      color="#000"
      textAlign="center"
      fontFamily="Arial"
      position="relative"
    >
      <DrawImageAnimation />
      <ScaleFade initialScale={0.9} in={showContent} transitionDuration={1000}>
        <Text
          fontSize={["32px", "48px", "64px", "96px"]}
          fontWeight="700"
          lineHeight="normal"
          color="#000000"
        >
          Welcome to Interfaith
        </Text>
      </ScaleFade>
      <Link to="/login">
        <ScaleFade
          initialScale={0.9}
          in={showContent}
          transitionDuration={2000}
        >
          <Button
            fontSize={["24px", "32px", "48px"]}
            fontWeight="700"
            lineHeight="normal"
            bg="#ed2e38"
            textColor="#FFFFFF"
            mt="4"
            mb="4"
            fontFamily="Arial"
            size="lg"
            height="56px"
            shadow="md"
            className="transition-all duration-300 transform-gpu hover:scale-110"
            id="login-button"
          >
            Login
          </Button>
        </ScaleFade>
      </Link>
      <Link to="/learnmore">
        <ScaleFade
          initialScale={0.9}
          in={showContent}
          transitionDuration={3000}
        >
          <Button
            fontSize={["24px", "32px", "48px"]}
            fontWeight="700"
            lineHeight="normal"
            bg="#ed2e38"
            textColor="#FFFFFF"
            mt="4"
            mb="4"
            fontFamily="Arial"
            size="lg"
            height="56px"
            shadow="md"
            className="transition-all duration-300 transform-gpu hover:scale-110"
          >
            Learn more
          </Button>
        </ScaleFade>
      </Link>
    </Stack>
  );
};

export default CoverLogin;
