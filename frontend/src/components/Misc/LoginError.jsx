import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Icon, Text } from "@chakra-ui/react";
import { BsEmojiFrown } from "react-icons/bs";
import { Header } from "../Header";
import leafBg from "../../assets/img/leaf-background.png";

export const LoginErrorPage = () => {
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="13px"
      height="100vh"
      width="100vw"
      background="#FFFFFF"
    >
      <Header />

      <Stack
        paddingX="91px"
        paddingY="50px"
        direction="column"
        justify="center"
        spacing="50px"
        width="100%"
        height={`calc(100vh - 120px)`}
        maxWidth="100%"
        align="center"
        style={{
          backgroundImage: `url(${leafBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Stack
          paddingX="90px"
          paddingTop="31px"
          borderRadius="50px"
          width="700px"
          height="450px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          overflow="hidden"
          background="white"
          boxShadow="sm"
          shadow="lg"
        >
          <Stack justify="flex-start" align="center" spacing="17px">
            <Icon as={BsEmojiFrown} boxSize={150} />
            <Text
              lineHeight="1.33"
              color="#000000"
              width="100%"
              height="64px"
              maxWidth="100%"
              textAlign="center"
              marginBottom="50px"
            >
              <Text fontSize="30px" fontWeight="bold" padding="20px">
                Sorry!
              </Text>
              <Text fontSize="25px">
                {" "}
                You need to be logged in to access this page!
              </Text>
            </Text>
          </Stack>
        </Stack>

        <Link to={`/login`}>
          <Button
            size="lg"
            variant="ghost"
            bg="#ed2e38"
            textColor="#FFFFFF"
            _hover={{ bg: "#7c191c" }}
            height="48px"
            fontSize="18px"
            shadow="md"
          >
            Go to Login
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
