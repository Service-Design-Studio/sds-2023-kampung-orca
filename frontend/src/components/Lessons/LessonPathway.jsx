import React from "react";
import { Stack, Button, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiDonateHeart, BiGroup, BiSpa } from "react-icons/bi";
import { GoChevronLeft } from "react-icons/go";
import leafBg from "../../assets/img/leaf-background.png";

export const LessonPathway = () => {
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="13px"
      height="800px"
      background="#FFFFFF"
    >
      <Stack //header stack with back button
        paddingX="91px"
        paddingTop="30px"
        paddingBottom="20px"
        direction="row"
        justify="flex-start"
        align="center"
        spacing="126px"
        overflow="show"
        width="100%"
        height="90px"
        maxWidth="100%"
        background="green.200"
        borderRadius="0 0 20px 20px"
        shadow="md"
      >
        <Link to={"/"}>
          <Button
            size="lg"
            colorScheme="green"
            height="48px"
            leftIcon={<Icon as={GoChevronLeft} />}
          >
            Back to main
          </Button>
        </Link>
      </Stack>

      <Stack //main body stack with buttons
        direction="row"
        height="800px"
        justify="center"
        align="center"
        spacing="100px"
        width="1440px"
        style={{
          backgroundImage: `url(${leafBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Stack
          paddingX="37px"
          paddingY="54px"
          borderRadius="20px"
          justify="center"
          align="center"
          spacing="5px"
          overflow="hidden"
          width="300px"
          height="350px"
          maxWidth="100%"
          background="green.200"
          shadow="lg"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Text
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="22px"
            color="#000000"
            mb="15px"
          >
            Introduction
          </Text>
          <Icon as={BiDonateHeart} boxSize={100} />
          <Link to={"/lesson-view/1"}>
            <Button
              size="lg"
              variant="outline"
              colorScheme="black"
              mt="20px"
              _hover={{ bg: "#ebedf0" }}
            >
              Lesson 1
            </Button>
          </Link>
        </Stack>

        <Stack
          paddingX="37px"
          paddingY="54px"
          borderRadius="20px"
          justify="center"
          align="center"
          spacing="5px"
          overflow="hidden"
          width="300px"
          height="350px"
          maxWidth="100%"
          background="green.200"
          shadow="lg"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Text
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="22px"
            color="#000000"
            mb="15px"
          >
            Theory
          </Text>
          <Icon as={BiGroup} boxSize={100} />
          <Link to={"/lesson-view/2"}>
            <Button
              size="lg"
              variant="outline"
              colorScheme="black"
              mt="20px"
              _hover={{ bg: "#ebedf0" }}
            >
              Lesson 2
            </Button>
          </Link>
        </Stack>

        <Stack
          paddingX="37px"
          paddingY="54px"
          borderRadius="20px"
          justify="center"
          align="center"
          spacing="5px"
          overflow="hidden"
          width="300px"
          height="350px"
          maxWidth="100%"
          background="green.200"
          shadow="lg"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Text
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="22px"
            color="#000000"
            mb="15px"
          >
            Conclusion
          </Text>
          <Icon as={BiSpa} boxSize={100} />
          <Link to={"/lesson-view/3"}>
            <Button
              size="lg"
              variant="outline"
              colorScheme="black"
              mt="20px"
              _hover={{ bg: "#ebedf0" }}
            >
              Lesson 3
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
