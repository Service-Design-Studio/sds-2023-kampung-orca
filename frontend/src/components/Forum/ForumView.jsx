import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Stack, Heading, Text, Box, StackDivider, Avatar } from "@chakra-ui/react";
import ForumChat from "../Chatbox/ForumChat"
import { Header } from '../Header'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Comment } from "./Comment.jsx"
import { EnterComment } from "./EnterComment.jsx"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'



export const ForumView = () => {
  const { postId } = useParams();
  const [textContents, setTextContents] = useState("");

  useEffect(() => {
    fetch("/static/media/LoremIpsum.8cb1b43778b8db26179a.txt")
      .then((response) => response.text())
      .then((data) => setTextContents(data))
      .catch((error) => console.log(error));
  }, []);

 


  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      background="#FFFFFF"
    >
      
      <Header buttontext="Back to Forum" path="/forum" showSecondButton="true" secondbuttontext="Lesson" secondpath="/lesson-view"/>
              
      
      <Stack
        paddingX="30px"
        direction="row"
        justify="flex-start"
        width="1440px"
        height={`calc(100vh - 120px)`}
        maxWidth="100%"
        style={{
          backgroundImage: 'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
          <Stack direction="column">      
          <Card shadow='md' padding="20px" height={`calc(100vh - 190px)`} width="800px" bg="rgba(255, 255, 255, 0.75)" >

          <Stack direction="row" align="center">
          <Avatar size="lg"  src="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235">
				  </Avatar>
          <CardHeader>
            <Stack direction="row" align="center" justify="space-between" width="100%">
              <Stack direction="row" align="center">
                <Heading size='lg'>Sample Post</Heading>

              </Stack>
            
            </Stack>
            <Text fontSize="sm" fontStyle="italic">by  <span style={{ fontSize:"sm", fontWeight: 'bold' }}>Nessa</span>. Posted 12h ago.</Text>
          </CardHeader>
          </Stack>

          <CardBody>
            <Stack  height={`calc(100vh - 380px)`} spacing='4' overflowY="scroll" sx={{
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.1)`,
              },
              '&::-webkit-scrollbar-thumb': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(237, 46, 56, 1)`,
              },
            }}>
              <Text whiteSpace="pre-line">{"This is a sample post. As it is currently not linked up to any API, the contents of this post, and everything on this page, are hardcoded and unrelated to any of the other pages. To make it longer, here are some random text. \n\n"} {textContents}</Text>
            
            </Stack>
          </CardBody>
        </Card> 
        <Accordion allowToggle paddingX="20px"  paddingY="10px" shadow='md' width="800px" bg="rgba(255, 255, 255, 0.7)" transition="background-color 0.3s ease" _expanded={{ bg: "rgba(255, 255, 255, 0.7)" }}  _notExpanded={{ bg: "rgba(255, 255, 255, 0.7)", _hover: { bg: "rgba(255, 255, 255, 0.7)" } }}>
        <AccordionItem>
    
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' textStyle="bold">
          Replies
        </Box>
        <AccordionIcon />
      </AccordionButton>
    
    <AccordionPanel>
    <Stack mt="10px" divider={<StackDivider />} spacing='4'>
              <EnterComment name="Nessa" image="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"/>
              <Comment time="11h ago" comment="Very nice post!" name="Aloysius" image="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072" />
              <Comment time="10h ago" comment="Great explanation! Thank you for writing this!" name="Mohammed" image="https://cdn.discordapp.com/attachments/1110862017365016598/1115625801883340890/80_60_year_old_muslim_retiree_singaporean_malay_HDB_complex_Not_a15416c5-548d-41b4-9f93-4c20a50ddc34.png" />
              </Stack>
    </AccordionPanel>
  </AccordionItem>
        
          </Accordion>

          </Stack>

        <ForumChat/>

      </Stack> 
      
      </Stack>
    
  );
};
