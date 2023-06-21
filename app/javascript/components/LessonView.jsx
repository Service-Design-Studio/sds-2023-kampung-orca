import React, { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import Chat from "./Chatbox/Chat"
import Header from "./Chatbox/Header"
import { ChakraProvider, useDisclosure, Stack, Button, Text, Image, Slide, Box, Container, CloseButton, Flex, Divider } from '@chakra-ui/react'



function SlideEx() { //This is the chat function button. Ideally, i'll move it to a different document later
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

//==========================================================

const Lesson = () => {
  params = useParams();
  const navigate = useNavigate();
  const [pages, setPage] = useState({});

  useEffect(() => {
    const url = `/api/v1/page/show/${params.lesson_id}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setPage(res))
      .catch(() => navigate("/"));
  }, []);

//=========================================================

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
          Back to Lessons
        </Button>
        </Link>

      </Stack>



      <Stack //main body stack with left and right substack
        paddingX="91px"
        paddingY="50px"
        direction="row"
        justify="center"
        align="flex-start"
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

        <Stack //left stack with lesson word content
          paddingX="37px"
          paddingY="54px"
          borderRadius="20px"
          justify="center"
          align="center"
          spacing="5px"
          overflow="hidden"
          width="60%"
          height="545px"
          maxWidth="100%"
          background="green.200"
          shadow='md'
        >
          <Stack //the green box
            justify="flex-start"
            align="center"
            spacing="20px"
            overflow="hidden"
            width="100%"
            height="459px"
            maxWidth="100%"
            paddingRight="5"
            overflowY="auto"
            style={{ zIndex: 10 }}
            sx={{
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.1)`,
              },
              '&::-webkit-scrollbar-thumb': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(20, 170, 60, 0.6)`,
              },
            }}
          >
            
            <Text //all text styles below are the same, copied and pasted. would be nice to fine a way to reproduce header/body styles in 1 line
              fontFamily="Arial"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="22px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              Sample
            </Text>
            <Text
              fontFamily="Arial"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              color="#000000"
              width="492px"
              maxWidth="100%"
              textAlign="justify"
            >
              {pages.words}
            </Text>

            <Text
              fontFamily="Arial"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="22px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              Introduction
            </Text>
            <Text
              fontFamily="Arial"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              color="#000000"
              width="492px"
              maxWidth="100%"
              textAlign="justify"
            >
              Christianity and Hinduism are two of the world's major religions. While both religions share some similarities, there are also many differences between them. This article will discuss the main differences between Christianity and Hinduism.
            </Text>
            <Text
              fontFamily="Arial"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="22px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              Beliefs
            </Text> */
            <Text
              fontFamily="Arial"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              color="#000000"
              width="492px"
              maxWidth="100%"
              textAlign="justify"
            >
              One of the main differences between Christianity and Hinduism is the belief in one God. Christians believe in the Holy Trinity, which is one God in three persons: the Father, the Son, and the Holy Spirit. In contrast, Hinduism believes in multiple gods and goddesses. Hinduism believes that there are many paths to reach God, whereas Christianity believes that Jesus Christ is the only way to reach God.
            </Text>
            <Text
            fontFamily="Arial"
            lineHeight="1.2"
            fontWeight="bold"
            fontSize="22px"
            color="#000000"
            width="492px"
            maxWidth="100%"
          >
            Lorem Ipsum
          </Text>
          <Text
            fontFamily="Arial"
            lineHeight="1.33"
            fontWeight="regular"
            fontSize="16px"
            color="#000000"
            width="492px"
            maxWidth="100%"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus viverra pretium est, maximus sollicitudin neque fringilla 
            vel. Duis venenatis mattis neque pellentesque pulvinar. Sed laoreet 
            lacus tellus, in finibus lorem lobortis vel. Integer vitae mi pharetra, 
            faucibus lacus et, dapibus neque. Phasellus dolor mauris, vehicula consequat 
            ullamcorper interdum, ornare finibus nisl. Nunc sit amet libero purus. Duis 
            viverra ante sed sem sollicitudin, ac malesuada nulla gravida. Nam at tortor 
            purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
            posuere cubilia curae; Aenean dapibus est vehicula, interdum tellus nec, 
            consectetur risus. Etiam non imperdiet metus. Vestibulum in magna vel massa 
            posuere interdum et et tortor. Vivamus mollis libero ac interdum tempus. Maecenas 
            condimentum nunc quis justo euismod condimentum. Quisque a auctor eros.
          </Text>
          </Stack>
        </Stack>

        <Stack //right stack with video and 2 buttons
          direction="column">

          <Stack //video stack
            borderRadius="20px"
            justify="flex-start"
            align="center"
            spacing="0px"
            overflow="hidden"
            background="#E0C825"
            shadow='md'
            width="100%"
          >
            <iframe
              src={pages.video}
              width="600"
              height="400"
              maxWidth="60%"
              objectFit="cover"
            />
          </Stack>

          <Stack //buttons stack
            height="130px"
            direction="row"
            justify="space-between"
            align="flex-end"

          >
            <Stack
              
              align="flex-end"
            >
            <Link to={`/lesson-complete/${pages.page_id}`}>
              <Button
                size="lg"
                colorScheme="green"
                height="48px"
                shadow="md"
              >
                Complete Lesson
              </Button>
            </Link>
            </Stack>

            <Stack
              align="flex-end"
            ><SlideEx/></Stack>
            
          </Stack>

        </Stack>

      </Stack>
      
    </Stack>
  );
};

export default Lesson;


