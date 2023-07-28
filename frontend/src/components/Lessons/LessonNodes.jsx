import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { Stack, Icon, Text, Box } from "@chakra-ui/react";

import {
  BsCircle,
  BsStopCircle,
  BsEmojiSmile,
  BsCheckCircle,
  Bs1CircleFill,
  BsActivity,
  BsHouse,
  BsHeartPulse,
  BsInfoCircle,
  BsAppIndicator,
  BsCircleFill,
  BsJoystick,
  BsAirplane,
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
import { BiSolidCheckCircle } from "react-icons/bi";
import {
  FaBookJournalWhills,
  FaCircleExclamation,
  FaPersonCircleExclamation,
  FaPersonCircleQuestion,
  FaPersonWalking,
  FaSquarePersonConfined,
} from "react-icons/fa6";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

const nodeHeights = ["100px", "250px", "10px", "220px", "150px"];

const DynamicNodes = ({ nodeHeights }) => {
  const [data] = useGateway(window.location.pathname + "/lesson/show_lessons", "GET");
  console.log(data);
  if (!data) return null;

  const lessonsAccess = data.lessons_access;

  return data.lessons.map((node, index) => {
    const nodeId = `node-${index}`;
    const height = nodeHeights[index] || "200px";
    const isEnabled = lessonsAccess.find(
      (lesson) => lesson.lesson_id === node.lesson_id
    );

    return (
      <React.Fragment key={index}>
        {index !== 0 && <StraightLine />}
        {/* Render the Line component only if index is not 0 */}
        {isEnabled ? (
          // For the enabled nodes
          <Link to={`/curriculum/lesson/${node.lesson_id}`}>
            <Node
              nodeId={nodeId}
              title={node.title}
              message={node.message}
              lessonId={node.lesson_id}
              lessonsAccess={lessonsAccess}
              height={height}
            />
          </Link>
        ) : (
          // For the disabled nodes
          <Node
            nodeId={nodeId}
            title={node.title}
            message={node.message}
            lessonId={node.lesson_id}
            lessonsAccess={lessonsAccess}
            height={height}
            isDisabled
          />
        )}
      </React.Fragment>
    );
  });
};

const StraightLine = () => {
  return (
    <Stack
      minWidth="300px"
      justify="center"
      align="center"
      paddingBottom="25px"
    >
      <Text
        color="black"
        ellipsizeMode="clip"
        numberOfLines="1"
        fontSize="100px"
        data-cy = 'line'
      >
        {Array.from(Array(7).keys()).map((each) => {
          return "-";
        })}
      </Text>
    </Stack>
  );
};

const Node = ({
  nodeId,
  color,
  title,
  message,
  lessonId,
  lessonsAccess,
  isDisabled,
  height,
  counter
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  let status;
  let statusColour;
  let cursorStyle;
  let iconComponent;


  if (isDisabled) {
    status = "Locked";
    statusColour = "red";
    cursorStyle = "not-allowed";
    iconComponent = BsStopCircle;
  } else {
    const isEnabled = lessonsAccess.find(
      (lesson) => lesson.lesson_id === lessonId
    );

    if (isEnabled) {
      status = "Completed";
      statusColour = "green";
      cursorStyle = "pointer";
      iconComponent = BsCheckCircle;
    } else {
      status = "Locked";
      statusColour = "red";
      cursorStyle = "not-allowed";
      iconComponent = BsStopCircle;
    }

    if (
      lessonsAccess.find(
        (lesson) =>
          lesson.lesson_id === lessonId &&
          lesson.lesson_id === lessonsAccess[lessonsAccess.length - 1].lesson_id
      )
    ) {
      iconComponent = FaCircleExclamation;
      status = "In Progress";
      statusColour = "darkorange";
    }
  }

  return (
    <Stack justify="flex-end">
      <Popover trigger="hover" placement="top">
        <PopoverTrigger>
          <Stack
            opacity={isDisabled ? 0.5 : 1}
            cursor={cursorStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cy={`node-${counter++}`}
          >
            <Icon as={iconComponent} color={color} boxSize="80px" id={nodeId} />
          </Stack>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontWeight="semibold">{title}</PopoverHeader>
          <PopoverBody fontSize="14px" textAlign="justify">
            {message}
          </PopoverBody>
          <PopoverBody
            fontSize="14px"
            fontWeight="semibold"
            color={statusColour}
            textAlign="justify"
            data-cy = 'popup'
          >
            <Stack direction="row" justifyContent="space-between">
              <Text>{status}</Text>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

export const LessonNodes = ({ lessonProgress }) => {
  const [nodesLoaded, setNodesLoaded] = React.useState(false);

  // Fetch data using useGateway hook
  const [data] = useGateway(window.location.pathname + "/lesson", "GET");
  console.log(data);

  const [counter, setCounter] = React.useState(1);

  // Check if data has been fetched and set the nodesLoaded state accordingly
  React.useEffect(() => {
    if (data) {
      setNodesLoaded(true);
    }
  }, [data]);

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
          data-cy = 'scrollbar'
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
              backgroundRepeat: "repeat-x",
            }}
          >
            {/* Conditional rendering for DynamicNodes */}
            {nodesLoaded ? (
              <DynamicNodes
                lessonProgress={lessonProgress}
                nodeHeights={nodeHeights}
                counter={counter}
              />
            ) : null}

            {/* Conditional rendering for Xarrow */}
            {nodesLoaded && (
              <>
                {/* <Xarrow
                  start="node-0"
                  end="node-1"
                  showHead={false}
                  curveness={false}
                  dashness={true}
                  color="black"
                  }}
                /> */}
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
