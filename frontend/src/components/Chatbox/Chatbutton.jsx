import React, { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import Chat from "./Chat"
import Header from "./ChatHeader"
import { BsChatDots } from "react-icons/bs"
import { useDisclosure, Stack, Button, Text, Slide, Container, Flex, Icon } from '@chakra-ui/react'


function ChatButton() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button onClick={onToggle} size="lg" colorScheme="blue" height="48px" shadow="md" leftIcon={<Icon as={BsChatDots} boxSize="7"/>}>
        Chat with Students!
      </Button>
      <Slide
        direction='right'
        in={isOpen}
        position="right"
      >
        <Container
          p='40px'
          border="1px solid black"
          color='white'
          mb='4'
          mr="0"
          mt="5"
          rounded='md'
          shadow='md'
          height="700px"
          width="500px"
          bg="rgba(255, 255, 255, 0.92)"
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

export default ChatButton;