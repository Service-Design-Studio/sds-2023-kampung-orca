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
      <Button 
        fontSize="18px"
        bg="#FFFFFF" 
        textColor="#000000"
        _hover={{bg:"#d8d9e3"}}
        onClick={onToggle}
        style={{zIndex: 999}}
        size="lg" 
        height="48px"
        shadow="md"
        leftIcon={<Icon as={BsChatDots} boxSize="7"/>}
        >
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
          mb='0'
          mr="0"
          mt="100px"
          rounded='md'
          shadow='md'
          height="650px"
          width="500px"
          bg="rgba(255, 255, 255, 0.92)"
          overflow="visible"
          borderRadius="20px 0 0 20px"
          justify="flex-end" align="flex-end"
          
          
        >
          <Flex flexDirection="column" justify="flex-end" align="flex-end">
            <Header onToggle={onToggle} />
            <Chat my="0"/>
          </Flex>

        </Container>

      </Slide>
    </>
  )
};

export default ChatButton;