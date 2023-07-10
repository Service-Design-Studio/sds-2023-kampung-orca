import React, { useEffect, useState} from "react";
import { Stack, Heading, Text, Button, Icon, Box, StackDivider, Avatar, Textarea } from "@chakra-ui/react";


export const EnterComment = ({ image, name }) => {


  return (
    <>
      <Stack direction="row">
        <Avatar size="md" src={image}>
        </Avatar>
        <Stack pl="5px" direction="column" width="100%">
        <Heading size='s'>{name} </Heading>
        <Stack direction="row" align="flex-end">
        <Textarea resize="none" fontSize="sm" placeholder='Write your comment here...' />
        <Button
                    size="lg"
                    bg="#ed2e38"
                    textColor="#FFFFFF"
                    _hover={{bg:"#7c191c"}}
                    height="28px"
                    fontSize="14px"
                    width="100px"
                    shadow="md"
                  >
                    Comment
                  </Button>
        </Stack>
        </Stack>
      </Stack>
     
    </>
              

    
  );
};
