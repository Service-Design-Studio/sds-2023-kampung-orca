import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Chat from "./Chatbox/Chat"
import Header from "./Chatbox/Header"


import { ChakraProvider, useDisclosure, Stack, Button, Text, Image, Slide, Box, Container, CloseButton, Flex, Divider } from '@chakra-ui/react'


function SlideEx() {
  const { isOpen, onToggle } = useDisclosure()
  
=======

import {
  ChakraProvider,
  useDisclosure,
  Stack,
  Button,
  Text,
  Image,
  Slide,
  Box,
} from "@chakra-ui/react";

function SlideEx() {
  const { isOpen, onToggle } = useDisclosure();
>>>>>>> 1a7ba8bd310ce3b2135cb217814925fef2cef246

  return (
    <>
      <Button onClick={onToggle} size="lg" colorScheme="blue" height="48px">
        Chat with Students!
      </Button>
<<<<<<< HEAD
      <Slide
        direction='right'
        in={isOpen}
        autoFocus={false}
        pointerEvents="none"
        position="right"
      >
        <Container
          p='40px'
          color='white'
          mb='4'
          mr="0"
          rounded='md'
          shadow='md'
=======
      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          rounded="md"
          shadow="md"
>>>>>>> 1a7ba8bd310ce3b2135cb217814925fef2cef246
          height="700px"
          width="500px"
          bg="rgba(100, 150, 100, 0.92)"
          overflow="visible"
        >
<<<<<<< HEAD
          <Flex flexDirection="column" justify="center">
            <Header onToggle={onToggle} />
            <Chat my="0"/>
          </Flex>
        
        </Container>
    
=======
          <Text>Chat component goes here</Text>

          <Text lineHeight="1.33">
            1. Chat needs to be on the right but it isnt on the right
          </Text>
          <Text lineHeight="1.33">
            2. Clicking the button again is supposed to toggle it closed but it
            does not close
          </Text>
          <Text fontSize="12px">
            im tired it's just gonna be like this for now, we can do a chat
            component to put into this box
          </Text>
        </Box>
>>>>>>> 1a7ba8bd310ce3b2135cb217814925fef2cef246
      </Slide>
    </>
  );
}

export default () => (
  <Stack
    justify="flex-start"
    align="flex-start"
    spacing="13px"
    height="824px"
    background="#FFFFFF"
  >
    <Stack
      paddingX="91px"
      paddingTop="10px"
      paddingBottom="5px"
      direction="row"
      justify="flex-start"
      align="center"
      spacing="126px"
      overflow="hidden"
      width="1440px"
      height="90px"
      maxWidth="100%"
      background="green.200"
      mt="5"
    >
      <Button size="lg" colorScheme="green" height="48px">
        back to main
      </Button>
    </Stack>
    <Stack
      paddingX="91px"
      paddingY="50px"
      direction="row"
      justify="center"
      align="flex-start"
      spacing="50px"
      width="1440px"
      height="625px"
      maxWidth="100%"
      style={{
        backgroundImage: 'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
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
        width="583px"
        height="545px"
        maxWidth="100%"
        background="green.200"
        shadow='md'
      >
        <Stack
          justify="flex-start"
          align="center"
          spacing="20px"
          overflow="hidden"
          width="492px"
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
            Christianity and Hinduism are two of the world's major religions.
            While both religions share some similarities, there are also many
            differences between them. This article will discuss the main
            differences between Christianity and Hinduism.
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
            One of the main differences between Christianity and Hinduism is the
            belief in one God. Christians believe in the Holy Trinity, which is
            one God in three persons: the Father, the Son, and the Holy Spirit.
            In contrast, Hinduism believes in multiple gods and goddesses.
            Hinduism believes that there are many paths to reach God, whereas
            Christianity believes that Jesus Christ is the only way to reach
<<<<<<< HEAD
            God.
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
=======
            God. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus viverra pretium est, maximus sollicitudin neque fringilla
            vel. Duis venenatis mattis neque pellentesque pulvinar. Sed laoreet
            lacus tellus, in finibus lorem lobortis vel. Integer vitae mi
            pharetra, faucibus lacus et, dapibus neque. Phasellus dolor mauris,
            vehicula consequat ullamcorper interdum, ornare finibus nisl. Nunc
            sit amet libero purus. Duis viverra ante sed sem sollicitudin, ac
            malesuada nulla gravida. Nam at tortor purus. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Aenean dapibus est vehicula, interdum tellus nec, consectetur risus.
            Etiam non imperdiet metus. Vestibulum in magna vel massa posuere
            interdum et et tortor. Vivamus mollis libero ac interdum tempus.
            Maecenas condimentum nunc quis justo euismod condimentum. Quisque a
            auctor eros.
>>>>>>> 1a7ba8bd310ce3b2135cb217814925fef2cef246
          </Text>
        </Stack>
      </Stack>
      <Stack
        borderRadius="20px"
        justify="flex-start"
        align="center"
        spacing="0px"
        overflow="hidden"
        background="#E0C825"
        shadow='md'
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
      paddingRight="91px"
      paddingbottom="91px"
      justify="flex-end"
      align="flex-end"
      spacing="10px"
      overflow="hidden"
      width="1440px"
      height="80px"
      maxWidth="100%"
    >
      <SlideEx />
    </Stack>
  </Stack>
);
