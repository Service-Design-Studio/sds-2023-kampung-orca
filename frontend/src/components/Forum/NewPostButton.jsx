import React, { useState } from "react";
import Chat from "../Chatbox/Chat"
import { Link } from "react-router-dom";
import ForumBoxPost from "./ForumBoxPost"
import { BsChatDots, BsFillPlusCircleFill } from "react-icons/bs"
import { Input, Textarea, Button, Slide, Container, Flex, Icon, Box, CloseButton, Text, Card, Stack, Heading, Avatar } from '@chakra-ui/react'


function NewPostButton() {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleButtonClick = () => {
    setFormOpen(true);
  };


  const handlePostButtonClick = () => {
    setFormOpen(false);
  };

  return (
    <>
        <Stack width="600px" justify="center" align="center" >
        {!isFormOpen ? (
          <Button
          shadow= "md"
          variant="outline"
          width="180px"
          size="md"
          bg="#ed2e38"
          textColor="#FFFFFF"
          _hover={{bg:"#7c191c"}}
          leftIcon={<Icon as={BsFillPlusCircleFill}/>}
          onClick={handleButtonClick}
          >
            Create New Post
          </Button>

        ) : (
          <Stack direction="row" align="flex-start" justify="flex-start">

          <Stack bg="#FFFFFF" borderRadius="5px" border="1px solid grey" paddingX="20px">
          <Input textColor="black" width="460px" variant="flushed" borderColor="grey" placeholder="Title"/>
          <Textarea resize="none" textColor="black" width="460px" variant="unstyled" placeholder="Enter your post content here..."/>
          </Stack>
            <Button
                        width="50px"
                        height="140px"
                        variant="ghost"
                        bg="#ed2e38"
                        textColor="#FFFFFF"
                        _hover={{bg:"#7c191c"}}
                        fontSize="18px"
                        style={{zIndex: 999}}
                        onClick={handlePostButtonClick}
                      >
                      Post
                      </Button>
          </Stack>
        )}
        </Stack>




          
    </>
  )
};

export default NewPostButton;