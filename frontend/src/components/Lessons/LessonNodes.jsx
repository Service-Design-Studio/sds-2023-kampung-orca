import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { Stack, Icon, Text, Box } from "@chakra-ui/react";
import {
  BsCircle,
  BsStopCircle,
  BsEmojiSmile,
  BsCheckCircle,
} from "react-icons/bs";
import { Progress } from "@chakra-ui/react";
import Cookies from "js-cookie";
import useAxios from "axios-hooks";
import LessonView from "./LessonView";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

import { Header } from "../Header";
import useGateway from "../../hooks/useGateway";

const DynamicNodes = ({ lessonProgress }) => {
  const params = useParams();
  const [data] = useGateway(window.location.pathname);
  if (!data || !data.lessons) return;
  return data.lessons.map((node, index) => (
    <React.Fragment key={index}>
      {index !== 0 && <Line />}{" "}
      {/* Render the Line component only if index is not 0 */}
      <Link
        to={`/curriculum/topic/${params["topic_id"]}/lesson/${node.lesson_id}/view`}
      >
        <Node
          //icon={node.icon}
          //score={node.score}
          progress="70"
          //status={node.status}
          title={node.title}
          message={node.message}
        />
      </Link>
    </React.Fragment>
  ));
};

const Line = () => {
  return (
    <Box
      w="300px"
      h="8px"
      bg="black"
      my="4"
      minWidth="300px"
      shadow="lg"
      borderRadius="10px"
    />
  );
};

export default Line;

const Node = ({
  icon: IconComponent,
  color,
  title,
  message,
  progress,
  score,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  let status;
  if (progress === "0") {
    status = "Not Started";
  } else if (progress === "100") {
    status = "Complete";
  } else {
    status = "In Progress";
  }

  return (
    <Popover trigger="hover" placement="top">
      <PopoverTrigger>
        <Stack
          width="fit-content"
          height="fit-content"
          direction="column"
          justify="center"
          align="flex-end"
          bg="white"
          borderRadius="50%"
          shadow="lg"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.3)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon as={IconComponent} color={color} boxSize="80px" />
        </Stack>
      </PopoverTrigger>
      <PopoverContent width="220px" boxShadow="0 0 5px 2px rgba(0, 0, 0, 0.3)">
        <PopoverArrow />
        <PopoverHeader fontWeight="semibold">{title}</PopoverHeader>
        <PopoverBody fontSize="14px" textAlign="justify">
          {message}
        </PopoverBody>

        <PopoverBody
          fontSize="14px"
          fontWeight="semibold"
          color="green"
          textAlign="justify"
        >
          <Stack direction="row" justifyContent="space-between">
            <Text>{status}</Text>
            <Text>{score}</Text>
          </Stack>
        </PopoverBody>
        <PopoverBody>
          <Progress
            hasStripe
            value={progress}
            colorScheme="green"
            transition="all 0.3s ease-in-out"
            borderRadius="md"
            height="8px"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const LessonNodes = ({ lessonProgress }) => {
  return (
    <Stack
      justify="flex-start"
      align="center"
      spacing="13px"
      height="100vh"
      background="#FFFFFF"
    >
      <Header buttontext="Back to Main" path={"/curriculum/topics/view"} />

      <Stack
        width={{ base: "500px", md: "800px", lg: "1200px" }}
        justify="center"
        align="center"
        height="600px"
        direction="row"
        ml="100px"
        mr="100px"
        mt="50px"
      >
        <Stack
          height="550px"
          width={{ base: "500px", md: "800px", lg: "1200px" }}
          justify="flex-start"
          align="center"
          overflowX="scroll"
          direction="row"
          marginx="100px"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              maxWidth: "10px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.1)`,
              marginBlock: "40px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "8px",
              backgroundColor: `rgba(237, 46, 56, 1)`,
              marginBlock: "40px",
            },
          }}
        >
          <Stack
            height="500px"
            width="fit-content"
            minWidth={{ base: "500px", md: "800px", lg: "1200px" }}
            justify="flex-start"
            align="center"
            overflowX="visible"
            direction="row"
            paddingLeft="20px"
            paddingRight="20px"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/rQ80rXn/Untitled-design.png")',
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <DynamicNodes lessonProgress={lessonProgress} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
