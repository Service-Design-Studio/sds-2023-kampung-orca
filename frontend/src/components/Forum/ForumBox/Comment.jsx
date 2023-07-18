// Comment.jsx
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function Comment({ comment, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(comment.id);
  };

  return (
    <Box
      key={comment.id}
      bg="rgba(237, 242, 247, 0.9)"
      padding="20px"
      shadow="0 0 5px 1px rgba(0, 0, 0, 0.3)"
      mb={2}
    >
      <Text fontSize="lg" mb={1} color="#555">
        {comment.content}
      </Text>
      <Text color="#555">
        Commented by: {comment.user && comment.user.name}
      </Text>
      <Button
        onClick={handleDeleteClick}
        colorScheme="blue"
        bg="#ed2e38"
        _hover={{ bg: "#f66873" }}
        size="sm"
        mt={2}
      >
        Delete Comment -_-
      </Button>
    </Box>
  );
}

export default Comment;
