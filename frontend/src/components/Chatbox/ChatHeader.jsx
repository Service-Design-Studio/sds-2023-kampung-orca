import React from "react";
import { Flex, Avatar, AvatarBadge, Text, CloseButton } from "@chakra-ui/react";

const Header = ({ onToggle }) => {
  return (
	<Flex w="100%" justify="space-between">
		<Flex>
			<Avatar size="lg"  name="Dan Abrahmov" src="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072">
				<AvatarBadge boxSize="1.25em" bg="green.500" borderColor="#d8d9e3"/>
			</Avatar>
			<Flex flexDirection="column" mx="5" justify="center">
				<Text fontSize="lg" fontWeight="bold" textColor="black">
					Aloysius Pek
				</Text>
				<Text color="black">Online</Text>
			</Flex>
		</Flex>
		<CloseButton size="lg" onClick={onToggle} color="black"/>
	</Flex>
  );
};

export default Header;