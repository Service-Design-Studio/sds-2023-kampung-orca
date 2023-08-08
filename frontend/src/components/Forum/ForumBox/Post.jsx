// Post.jsx
import React from "react";
import {
  Box,
  Text,
  Stack,
  Heading,
  Avatar,
  Button,
  Flex,
} from "@chakra-ui/react";
import moment from "moment";

function Post({ post, onClick, onDelete, onUpdate }) {
  const handleClick = () => {
    onClick(post);
  };

  const formatCreatedAt = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  //console.log(post.user);

  return (
    <Box
      onClick={handleClick}
      mb="20px"
      padding="20px"
      shadow="md"
      bg="rgba(242, 242, 247, 0.7)"
      transition="background-color 0.3s ease"
      _hover={{ bg: "#ffbabc" }}
    >
      <Stack direction="row" align="center" spacing={4}>
        <Avatar shadow="lg" size="lg" src={post.user && post.user.avatar} />
        <Flex width="100%" direction="row" justify="space-bewteen">
          <Flex direction="column" spacing="0px" width="100%">
            <Box
              maxW={{
                base: "20vw",
                lg: "26vw",
                xl: "30vw",
                "2xl": "32vw",
              }}
            >
              <Heading
                noOfLines={2}
                as="h3"
                size="md"
                textTransform="uppercase"
                color="#333"
              >
                {post.title}
              </Heading>
            </Box>
            <Text fontSize="sm" fontStyle="italic" color="#555">
              by{" "}
              <span style={{ fontWeight: "bold" }}>
                {post.user && post.user.name}
              </span>{" "}
              {formatCreatedAt(post.created_at)}{" "}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Post;
