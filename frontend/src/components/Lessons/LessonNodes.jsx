import React from "react";
import { Link } from "react-router-dom";
import { Stack, Icon, Text, Box } from "@chakra-ui/react";
import {
  BsCircle,
  BsStopCircle,
  BsEmojiSmile,
  BsCheckCircle,
} from "react-icons/bs";
import { Progress } from "@chakra-ui/react";
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






const DynamicNodes = () => {
  const [data] = useGateway(window.location.pathname + "/lesson", "GET");
  console.log(data);
  if (!data) return null;

  const lessonsAccess = data.lessons_access;

  return data.lessons.map((node, index) => (
    <React.Fragment key={index}>
      {index !== 0 && <Line />}{" "}
      {/* Render the Line component only if index is not 0 */}
      <Link to={`/curriculum/lesson/${node.lesson_id}`}>
        <Node
          title={node.title}
          message={node.message}
          lessonId={node.lesson_id}
          lessonsAccess={lessonsAccess}
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
  color,
  title,
  message,
  lessonId,
  lessonsAccess
}) => {
  const [isHovered, setIsHovered] = React.useState(false);



  const isEnabled = lessonsAccess.find((lesson) => lesson.lesson_id === lessonId);
  let status;
  let statusColour;
  let cursorStyle;
  let iconComponent;
  if (isEnabled) {
    status = "Unlocked";
    statusColour = "green";
    cursorStyle = "pointer";
    iconComponent = BsCheckCircle;
  } else{
    status = "Locked";
    statusColour = "red";
    cursorStyle = "not-allowed";
    iconComponent = BsStopCircle;
  }






  return (
    <Popover trigger="hover" placement="top">
      <PopoverTrigger>
        <Stack
          opacity={isEnabled ? 1 : 0.5}
          cursor={cursorStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon as={iconComponent} color={color} boxSize="80px" />
        </Stack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader fontWeight="semibold">{title}</PopoverHeader>
        <PopoverBody fontSize="14px" textAlign="justify">
          {message}
        </PopoverBody>
        <PopoverBody fontSize="14px" fontWeight="semibold" color={statusColour} textAlign="justify">
          <Stack direction="row" justifyContent="space-between">
            <Text>{status}</Text>
          </Stack>
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
      <Header buttontext="Back to Main" path={"/curriculum/topic"} />

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
