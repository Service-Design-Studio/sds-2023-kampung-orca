import React, { useState } from "react";
import BoxPost from "./BoxPost";
import PostInput from "../ForumMethods/PostInput";
import { Stack } from "@chakra-ui/react";
import ForumApp from "./BoxPost";

function ContentInTheBox() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handlePostButtonClick = () => {
    setFormOpen(false);
    setRefreshPosts(true);
    console.log("reset");
  };

  const [activePostId, setActivePostId] = useState(null);

  const handlePostClick = (postId) => {
    setActivePostId(postId);
  };

  const handlePostButtonClick = () => {
    setFormOpen(false);
    setRefreshPosts(true);
  };

  return (
    <>
      <Stack
        height={isFormOpen ? "430px" : "520px"} // set to 520 when done
        mb="20px"
        padding="10px"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.1)`,
          },
          "&::-webkit-scrollbar-thumb": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `rgba(237, 46, 56, 1)`,
          },
        }}
      >
        <BoxPost
          id={1}
          isActive={activePostId === 1}
          onClick={() => handlePostClick(1)}
          refreshPosts={refreshPosts}
          setRefreshPosts={setRefreshPosts}
        />
      </Stack>

      <PostInput
        isFormOpen={isFormOpen}
        setFormOpen={setFormOpen}
        handlePostButtonClick={handlePostButtonClick}
        //fetchPosts={fetchPosts}
        setRefreshPosts={setRefreshPosts}
      />
    </>
  );
}

export default ContentInTheBox;
