import React from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Button, Icon, Text, useDisclosure, Slide, Box, Container, CloseButton, Flex, } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsCircle, BsStopCircle, BsEmojiSmile, BsCheckCircle } from 'react-icons/bs'
import { Progress } from '@chakra-ui/react'


export const Header = ({ buttontext }) => (

<Stack  //header stack with back button
paddingX="91px"
paddingTop="30px"
paddingBottom="30px"
direction="row"
justify="flex-start"
align="center"
spacing="126px"
overflow="show"
width="100%"
height="90px"
maxWidth="100%"
background="#ed2e38"
borderRadius="0 0 20px 20px"
shadow='md'
>
<Link to ={'/'}>
  <Button style={{zIndex: 999}} size="lg" shadow="lg" bg="#FFFFFF" textColor="#000000" _hover={{bg:"#d8d9e3"}} height="48px" leftIcon={<Icon as={GoChevronLeft} />}>
    {buttontext}
  </Button>
</Link>
</Stack>
);
