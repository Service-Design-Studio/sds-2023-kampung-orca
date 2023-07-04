import React from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Button, Icon, Text, useDisclosure, Slide, Box, Container, CloseButton, Flex, } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsPatchCheck, BsEmojiFrown } from "react-icons/bs";
import { Header } from './Header'




export const ErrorPage = () => {

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="13px"
      height="800px"
      background="#FFFFFF"
    >
      
      <Header buttontext="Back to Main"/>
              
      
      <Stack
        paddingX="91px"
        paddingY="50px"
        direction="row"
        justify="center"
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
          paddingX="90px"
          paddingTop="31px"
          borderRadius="50px"
          width="600px"
          height="450px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          overflow="hidden"
          background="white"
          boxShadow="sm"
          shadow="lg"
        >
          <Stack justify="flex-start" align="center" spacing="17px">
            <Icon as={BsEmojiFrown} boxSize={180}/>
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
              mt="50px"
            >
              Page not found.
            </Text>
          </Stack>
        </Stack>         

      </Stack> 
      
      </Stack>
    
  );
};
