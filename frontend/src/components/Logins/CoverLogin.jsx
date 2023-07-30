import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Text, Button, ScaleFade } from "@chakra-ui/react";
import Particles from "./Particles.jsx";

const CoverLogin = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <Particles />
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
        <ScaleFade
          initialScale={0.9}
          in={showContent}
          transitionDuration={1000}
        >
          <Text
            fontSize={["32px", "48px", "96px"]}
            fontWeight="500"
            lineHeight="normal"
            color="#000000"
            fontFamily="Averia Serif Libre"
          >
            Kampung.SG
          </Text>
          <Text
            fontSize={["11px", "16px", "32px"]}
            fontWeight="800"
            lineHeight="normal"
            color="#000000"
            fontFamily="Roboto"
          >
            Celebrating Our Multicultural Commons
          </Text>
        </ScaleFade>
        <Link to="/login">
          <ScaleFade
            initialScale={0.9}
            in={showContent}
            transitionDuration={2000}
          >
            <Button
              fontSize={["12px", "20px", "36px"]}
              fontWeight="700"
              lineHeight="normal"
              bg="#ef3340"
              textColor="#FFFFFF"
              mt="8"
              mb="4"
              fontFamily="Roboto"
              padding="1em"
              size="lg"
              height="56px"
              shadow="md"
              className="transition-all duration-300 transform-gpu hover:scale-110"
              id="login-button"
            >
              Start your interfaith journey!
            </Button>
          </ScaleFade>
        </Link>
      </Stack>
    </>
  );
};

export default CoverLogin;
