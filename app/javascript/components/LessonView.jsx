import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Chat from "./Chatbox/Chat"

import { ChakraProvider, useDisclosure, Stack, Button, Text, Image, Slide, Box } from '@chakra-ui/react'


function SlideEx() {
  const { isOpen, onToggle } = useDisclosure()


  return (
    <>
      <Button onClick={onToggle} size="lg" colorScheme="blue" height="48px">
        Chat with Students!
      </Button>
      <Slide
        direction='right'
        in={isOpen}
        style={{ zIndex: 10 }}>

        <Box
          p='40px'
          color='white'
          mt='4'
          rounded='md'
          shadow='md'
          height="700px"
          width="500px"
          bg="rgba(100, 150, 100, 0.92)"
        >
          <Chat/>
        </Box>

      </Slide>
    </>
  )
};

const Lesson = () => {
  const navigate = useNavigate();
  const [pages, setPage] = useState();

  useEffect(() => {
    const url = "/api/v1/page/0";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log(res.json());
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setPage(res))
      .catch(() => navigate("/"));
  }, []);

  const allPages = pages;
  console.log(allPages);

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="13px"
      height="824px"
      background="#FFFFFF"
    >
      <Stack
        paddingX="37px"
        paddingY="54px"
        borderRadius="20px"
        justify="center"
        align="center"
        spacing="126px"
        overflow="hidden"
        width="1440px"
        height="90px"
        maxWidth="100%"
        background="green.200"
      >
        <Link to ={'/lesson-pathway'}>
        <Button size="lg" colorScheme="green" height="48px">
          back to lesson pathway
        </Button>
        </Link>
      </Stack>
      <Stack
        paddingX="91px"
        paddingY="80px"
        direction="row"
        justify="center"
        align="flex-start"
        spacing="100px"
        width="1440px"
        height="625px"
        maxWidth="100%"
        style={{
          backgroundImage: 'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <Stack
          paddingX="37px"
          paddingY="54px"
          borderRadius="50px"
          justify="center"
          align="center"
          spacing="5px"
          overflow="hidden"
          width="583px"
          height="545px"
          maxWidth="100%"
          background="green.200"
        >
          <Stack
            justify="flex-start"
            align="center"
            spacing="20px"
            overflow="hidden"
            width="492px"
            height="459px"
            maxWidth="100%"
            overflowY="auto"
          >
            <Text
              fontFamily="Helvetica"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="24px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              Introduction
            </Text>
            <Text
              fontFamily="Helvetica"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="18px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              Christianity and Hinduism are two of the world's major religions. While both religions share some similarities, there are also many differences between them. This article will discuss the main differences between Christianity and Hinduism.
            </Text>
            <Text
              fontFamily="Helvetica"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="24px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              Beliefs
            </Text>
            <Text
              fontFamily="Helvetica"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="18px"
              color="#000000"
              width="492px"
              maxWidth="100%"
            >
              One of the main differences between Christianity and Hinduism is the belief in one God. Christians believe in the Holy Trinity, which is one God in three persons: the Father, the Son, and the Holy Spirit. In contrast, Hinduism believes in multiple gods and goddesses. Hinduism believes that there are many paths to reach God, whereas Christianity believes that Jesus Christ is the only way to reach God. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra pretium est, maximus sollicitudin neque fringilla vel. Duis venenatis mattis neque pellentesque pulvinar. Sed laoreet lacus tellus, in finibus lorem lobortis vel. Integer vitae mi pharetra, faucibus lacus et, dapibus neque. Phasellus dolor mauris, vehicula consequat ullamcorper interdum, ornare finibus nisl. Nunc sit amet libero purus. Duis viverra ante sed sem sollicitudin, ac malesuada nulla gravida. Nam at tortor purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean dapibus est vehicula, interdum tellus nec, consectetur risus. Etiam non imperdiet metus. Vestibulum in magna vel massa posuere interdum et et tortor. Vivamus mollis libero ac interdum tempus. Maecenas condimentum nunc quis justo euismod condimentum. Quisque a auctor eros.
            </Text>
          </Stack>
          <Link to={`/lesson-complete`}>
            <Button
              position="absolute"
              bottom="20px"
              left="50%"
              transform="translateX(-50%)"
              size="lg"
              colorScheme="green"
              height="48px"
            >
              Complete Lesson
            </Button>
          </Link>
        </Stack>
        <Stack
          borderRadius="20px"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          overflow="hidden"
          background="#E0C825"
        >
          <iframe
            src="https://www.youtube.com/embed/n5xYb4TOaYs"
            width="700"
            height="400"
            maxWidth="100%"
            objectFit="cover"
          />
        </Stack>
      </Stack>
      <Stack
        padding="20px"
        justify="flex-end"
        align="flex-end"
        spacing="10px"
        overflow="hidden"
        width="1440px"
        height="80px"
        maxWidth="100%"
      >
        <SlideEx/>
      </Stack>
    </Stack>
  );
}

export default Lesson;


