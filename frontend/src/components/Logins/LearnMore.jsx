import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Text,
  Button,
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const LearnMore = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); // Route back to "/home" when the button is clicked
  };

  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      spacing="8"
      width="100%"
      color="#000"
      fontFamily="Arial"
    >
      <header>
        <Button
          onClick={handleButtonClick}
          variant="unstyled"
          fontSize="2xl"
          fontWeight="bold"
        >
          interfaith.sg
        </Button>
      </header>

      <Box
        bgImage="url('https://media.istockphoto.com/id/668218790/photo/group-of-friends-huddle-in-rear-view-together.jpg?s=612x612&w=0&k=20&c=EAbiZ7T0YkJiGLwIfDYDKip9_v1TUjBD5TlMk-leEfE=')"
        bgSize="cover"
        bgPosition="center"
        bgOpacity={0.3}
        height="50vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          align="center"
          spacing="4"
          width="70%"
          p="8"
          bg="#fff"
          opacity="0.9"
          textAlign="center"
        >
          <Text fontSize="4xl" fontWeight="bold">
            What We Do
          </Text>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            volutpat tincidunt tortor, ac rhoncus purus. Nulla facilisi. Donec
            maximus risus quis elit euismod, eget tristique elit pharetra.
          </Text>
        </Stack>
      </Box>

      <Stack
        direction="row"
        align="center"
        spacing="8"
        width="100%"
        py="16"
        px="8"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box flex="1">
          <Image
            src="image_url"
            alt="What You Learn"
            boxSize="200px"
            objectFit="cover"
          />
        </Box>
        <Stack
          direction="column"
          spacing="4"
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          pl={{ base: "0", md: "8" }}
        >
          <Text fontSize="4xl" fontWeight="bold">
            What You Learn
          </Text>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            volutpat tincidunt tortor, ac rhoncus purus. Nulla facilisi. Donec
            maximus risus quis elit euismod, eget tristique elit pharetra.
          </Text>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        align="center"
        spacing="8"
        width="100%"
        py="16"
        px="8"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Stack
          direction="column"
          spacing="4"
          flex="1"
          textAlign={{ base: "center", md: "right" }}
          pr={{ base: "0", md: "8" }}
        >
          <Text fontSize="4xl" fontWeight="bold">
            Who We Serve
          </Text>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            volutpat tincidunt tortor, ac rhoncus purus. Nulla facilisi. Donec
            maximus risus quis elit euismod, eget tristique elit pharetra.
          </Text>
        </Stack>
        <Box flex="1">
          <Image
            src="image_url"
            alt="Who We Serve"
            boxSize="200px"
            objectFit="cover"
          />
        </Box>
      </Stack>

      <Flex py="8">
        <HStack spacing="4">
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            size="lg"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
          />
        </HStack>
      </Flex>
    </Stack>
  );
};

export default LearnMore;
