import React from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Button, Icon, Text, useDisclosure, Slide, Box, Container, CloseButton, Flex, } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import Chat from "./Chatbox/Chat"
import Header from "./Chatbox/Header"

function SlideEx() { //This is the chat function button duplicated from LessonView. I'll create a new jsx just for this later
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button onClick={onToggle} size="lg" colorScheme="blue" height="48px" shadow="md">
        Chat with Students!
      </Button>
      <Slide
        direction='right'
        in={isOpen}
        position="right"
      >
        <Container
          p='40px'
          color='white'
          mb='4'
          mr="0"
          mt="5"
          rounded='md'
          shadow='md'
          height="700px"
          width="500px"
          bg="rgba(100, 150, 100, 0.92)"
          overflow="visible"
          borderRadius="20px 0 0 20px"
        >
          <Flex flexDirection="column" justify="center">
            <Header onToggle={onToggle} />
            <Chat my="0"/>
          </Flex>

        </Container>
    
      </Slide>
    </>
  )
};

//========================================================

export const LessonCompletion = () => {
  params = useParams();
  const pre = parseInt(params.lesson_id) - 1;
  const next = parseInt(params.lesson_id) + 1;

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="13px"
      height="800px"
      background="#FFFFFF"
    >
      <Stack  //header stack with back button
        paddingX="91px"
        paddingTop="15px"
        paddingBottom="5px"
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
      >
        <Link to ={'/'}>
          <Button size="lg" colorScheme="green" height="48px">
            Back to lessons
          </Button>
        </Link>
      </Stack>
              
      
      <Stack //main body stack with the 2 buttons and lesson complete box
        paddingX="91px"
        paddingY="50px"
        direction="row"
        justify="center"
        spacing="50px"
        width="100%"
        height="625px"
        maxWidth="100%"
        style={{
          backgroundImage: 'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Stack
          mt="100px"
          borderRadius="50px"
          direction="row"
          justify="center"
          height="100%"
          align="center"
          spacing="70px"
        >
          <Link to={`/lesson-view/${pre}`}>
            <Button shadow="lg" leftIcon={<Icon as={GoChevronLeft} />} size="lg">
              Previous Lesson
            </Button>
          </Link>
                  
        </Stack>
                  
        <Stack
          paddingX="90px"
          paddingTop="31px"
          borderRadius="50px"
          height="450px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          overflow="hidden"
          background="green.100"
          boxShadow="sm"
          shadow="lg"
        >
          <Stack justify="flex-start" align="center" spacing="17px">
            <Icon as={BsPatchCheck} boxSize={200}/>
            <Text
              fontFamily="Arial"
              lineHeight="1.33"
              fontWeight="bold"
              fontSize="24px"
              color="#000000"
              width="250px"
              height="64px"
              maxWidth="100%"
              textAlign="center"
            >
              Lesson Completed!
            </Text>
          </Stack>
        </Stack>
          


        <Stack
          mt="100px"
          borderRadius="50px"
          direction="row"
          justify="center"
          height="100%"
          align="center"
          spacing="70px"
  
        >
          <Link to={`/lesson-view/${next}`}>
            <Button shadow="lg" rightIcon={<Icon as={GoChevronRight} />} size="lg">
              Next Lesson
            </Button>
          </Link>
        </Stack>

      </Stack> 


      <Stack //footer stack with chatbox button
        padding="20px"
        justify="flex-end"
        align="flex-end"
        spacing="10px"
        overflow="hidden"
        width="100%"
        maxWidth="100%"
      >
        <SlideEx/>
      </Stack>

    </Stack>
    
  );
};
