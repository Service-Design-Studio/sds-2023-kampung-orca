import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Text, Button, ScaleFade, Heading } from "@chakra-ui/react";
import DrawImageAnimation from "./DrawImageAnimation";

const CoverLogin = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <Stack direction="row">
      <DrawImageAnimation />

      <Stack width="40vw"/>
      <Stack
        bg="rgba(255, 255, 255, 0.5)"
        direction="column"
        justify="center"
        align="center"
        spacing="0"
        width="60vw"
        height="100vh"
        color="#000"
      >
        <Stack width="45vw" textAlign="center" borderRadius="20px" bg="#FFFFFF" shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)" padding="40px" mb="20px">
          <Heading
            fontFamily="Averia Serif Libre" fontSize={{ base: "25px", lg: "55px", xl: "75px", "2xl": "80px" }}
          >
            Welcome to
          </Heading>
          <Heading
            fontFamily="Averia Serif Libre" fontSize={{ base: "30px", lg: "60px", xl: "80px", "2xl": "90px" }}
            textColor="#ed2e38"
          >
            Kampung.SG
          </Heading>
        </Stack>
    
        <Link to="/login">
            <Button
              
              width="45vw"
              fontSize={{ base: "16px", lg: "24px", xl: "28px", "2xl": "30px" }}
              borderRadius="20px"
              bg="#ed2e38"
              textColor="#FFFFFF"
              _hover={{ bg: "#7c191c" }}
              size="lg"
              height="65px"
              fontFamily="Roboto"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
              id="login-button"
            >
              Start your learning journey here!
            </Button>
        </Link>
      </Stack>
    </Stack>
    
  );
};

export default CoverLogin;
