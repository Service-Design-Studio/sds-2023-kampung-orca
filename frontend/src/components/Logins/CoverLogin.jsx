import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button, Fade } from "@chakra-ui/react";

const CoverLogin = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <Fade in={showContent}>
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
      >
        <Text
          fontSize={["32px", "48px", "64px", "96px"]}
          fontWeight="700"
          lineHeight="normal"
          color="#000000"
        >
          Welcome to Interfaith
        </Text>
        <Link to="/login">
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
        </Link>
        <Link to="/learnmore">
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
        </Link>
      </Stack>
    </Fade>
  );
};

export default CoverLogin;
