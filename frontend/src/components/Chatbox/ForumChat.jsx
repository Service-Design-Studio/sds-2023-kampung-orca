import React, { useEffect, useState } from "react";
import Chat from "./Chat"
import Header from "./ForumChatHeader"
import { BsChatDots } from "react-icons/bs"
import { useDisclosure, Card, Flex, Icon } from '@chakra-ui/react'


function ForumChat() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
        <Card
          position="fixed"
          right="0px"
          bottom="20px" 
          paddingX="40px"
          paddingTop="40px"
          color='white'
          mr="0"
          mb="0"
          rounded='md'
          shadow='md'
          height={`650px`}
          maxHeight={`650px`}
          width="500px"
          bg="rgba(255, 255, 255, 0.7)"
          overflow="visible"
          borderRadius="5px"
          
        >
          <Flex flexDirection="column" justify="center">
            <Header/>
            <Chat/>
          </Flex>

        </Card>

    </>
  )
};

export default ForumChat;