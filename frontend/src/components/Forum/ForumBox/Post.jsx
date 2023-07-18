// Post.jsx
import React from "react";
import { Box, Text, Stack, Heading, Avatar, Button } from "@chakra-ui/react";

function Post({ post, onClick, onDelete, onUpdate }) {
  const handleClick = () => {
    onClick(post);
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    const updatedData = {
      title: "updated title",
      content: "this is updated post content",
    };
    onUpdate(post.id, updatedData);
  };

  const handleDeleteClick = () => {
    onDelete(post.id);
  };

  return (
    <Box
      onClick={handleClick}
      mb="10px"
      padding="20px"
      shadow="0 0 5px 1px rgba(0, 0, 0, 0.3)"
      bg="rgba(237, 242, 247, 0.9)"
      transition="background-color 0.3s ease"
      _hover={{ bg: "#ffbabc" }}
    >
      <Stack direction="row" align="center" spacing={4}>
        <Avatar shadow="lg" size="lg" src={post.user && post.user.avatar} />
        <Stack direction="column">
          <Stack direction="row" align="center">
            <Heading as="h3" size="md" textTransform="uppercase" color="#333">
              {post.title}
            </Heading>
            <Text fontSize="sm" fontStyle="italic" color="#555">
              by{" "}
              <span style={{ fontWeight: "bold" }}>
                {post.user && post.user.name}
              </span>
            </Text>
          </Stack>
          <Text noOfLines={2} pt="1" fontSize="sm" color="#555">
            {post.content}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Post;
