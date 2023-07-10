import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
	const elementRef = useRef();
	useEffect(() => elementRef.current.scrollIntoView());
	return <div ref={elementRef} />;
  };

  return (
	<Flex w="100%" h="60%" overflowY="scroll" flexDirection="column" p="3"
		sx={{
		'&::-webkit-scrollbar': {
			width: '16px',
			borderRadius: '8px',
			backgroundColor: `rgba(0, 0, 0, 0.1)`,
		},
		'&::-webkit-scrollbar-thumb': {
			width: '16px',
			borderRadius: '8px',
			backgroundColor: `rgba(237, 46, 56, 0.8)`,
		},
	}}>
  	{messages.map((item, index) => {
    	if (item.from === "me") {
      	return (
        	<Flex key={index} w="100%" justify="flex-end">
          	<Flex
            	bg="#ed2e38"
            	color="white"
							borderRadius="10px"
            	minW="30px"
            	maxW="350px"
            	my="3px"
            	p="2"
							
          	>
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	} else {
      	return (
        	<Flex key={index} w="100%">
          	<Avatar
            	name="Computer"
            	src="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072"
            	bg="blue.300"
          	></Avatar>
          	<Flex
            	bg="#d8d9e3"
							borderRadius="10px"
            	color="black"
            	minW="30px"
            	maxW="350px"
            	my="3px"
            	p="2"
							overflowWrap="break-word"
          	>
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	}
  	})}
  	<AlwaysScrollToBottom />
	</Flex>
  );
};

export default Messages;