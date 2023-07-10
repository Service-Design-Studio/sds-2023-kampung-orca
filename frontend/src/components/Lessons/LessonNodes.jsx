import React from "react";
import { Link } from "react-router-dom";
import { Stack, Icon, Text, Box } from "@chakra-ui/react";
import { BsCircle, BsStopCircle, BsEmojiSmile, BsCheckCircle } from 'react-icons/bs'
import { Progress } from '@chakra-ui/react'
import { Header } from '../Header'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
  } from '@chakra-ui/react'


  
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

  const Node = ({ icon: IconComponent, color, title, message, status, progress, score }) => {
    const [isHovered, setIsHovered] = React.useState(false);

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
      
          <PopoverBody fontSize="14px" fontWeight="semibold" color="green" textAlign="justify">
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
    /*adjust the height of bar accordingly */


export const LessonNodes = () => (
    <Stack
    justify="flex-start"
    align="center"
    spacing="13px"
    height="100vh"
    background="#FFFFFF"
  >
    <Header buttontext="Back to Main"/>

    <Stack
     width={{base:"500px", md:"800px", lg:"1200px"}}
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
    width={{base:"500px", md:"800px", lg:"1200px"}}
    justify="flex-start"
    align="center"
    overflowX="scroll"
    direction="row"
    marginx="100px"

        sx={{
            '&::-webkit-scrollbar': {
            width: '8px',
            maxWidth:"10px",
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.1)`,
            marginBlock:'40px'
            },
            '&::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            backgroundColor: `rgba(237, 46, 56, 1)`,
            marginBlock:'40px'
            },
        }}>

    <Stack
    height="500px"
    width="fit-content"
    justify="flex-start"
    align="center"
    overflowX="visible"
    direction="row"
    paddingLeft="20px"
    paddingRight="20px"
    style={{
        backgroundImage: 'url("https://i.ibb.co/rQ80rXn/Untitled-design.png")',
        backgroundSize: "contain",
        backgroundPosition: "left",
        backgroundColor: "rgba(255, 255, 255, 0.5)"
      }}
    
    
    >
        <Link to ={'/lesson-view'}>
            <Node icon={BsCheckCircle} score="7/10" progress="100" status="Complete" title="Introduction to Interfaith" message="Explore the rich tapestry of diverse religious traditions and foster a deeper understanding of interfaith dialogue and cooperation. Discover the commonalities and unique aspects of various faiths, promoting unity and respect."/>
        </Link>
        <Line />
        <Link to ={'/lesson-view'}>
            <Node icon={BsEmojiSmile}  score = "10/10" progress="100" status="Complete" title="Interfaith Ethics and Values" message="Delve into the ethical principles and moral values shared across different religious traditions. Learn how these teachings can guide individuals and communities towards compassionate action, social justice, and interfaith harmony."/> 
        </Link>
        <Line />
        <Link to ={'/lesson-view'}>
            <Node icon={BsStopCircle}  progress="64" status="In Progress" title="Interfaith Dialogue Techniques" message="Learn effective communication strategies and dialogue techniques for engaging in meaningful interfaith conversations. Develop skills to foster mutual understanding, empathy, and constructive discussions among people of different faiths."/>
        </Link>
        <Line />
        <Link to ={'/'}>
            <Node icon={BsCircle} progress="0" status="Not Started" title="Interfaith Festivals and Celebrations" message="Discover the vibrant tapestry of interfaith festivals and celebrations from around the world. Explore the cultural expressions, rituals, and symbolism that promote interfaith unity, inclusivity, and shared joy."/>
        </Link>
        <Line />
        <Link to ={'/'}>
            <Node icon={BsCircle} progress="0" status="Not Started" title="Interfaith Peacebuilding and Reconciliation" message="Examine the role of interfaith efforts in promoting peace, conflict resolution, and reconciliation. Learn about inspiring examples of interfaith initiatives fostering harmony in diverse and divided societies." />
        </Link>
        </Stack>
    </Stack>
    </Stack>
  </Stack>
);
