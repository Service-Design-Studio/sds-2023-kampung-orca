import React from "react";
import { Stack, Heading, Text, Avatar } from "@chakra-ui/react";


export const Comment = ({ image, name, comment, time }) => {


  return (
    <>
      <Stack direction="row">
        <Avatar size="md" src={image}>
        </Avatar>
        <Stack pl="5px" direction="column">
          <Stack direction="row" align="center">
            <Heading size='s'>{name} </Heading>
            <Text fontSize='xs' fontStyle="italic"> {time}</Text>
          </Stack>
          <Text fontSize='sm'> {comment} </Text>
        </Stack>
      </Stack>
     
    </>
              

    
  );
};
