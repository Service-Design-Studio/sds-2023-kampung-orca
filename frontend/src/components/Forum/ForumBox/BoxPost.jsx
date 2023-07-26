// ForumApp.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import PostList from "./PostList";
import DeleteButton from "../ForumMethods/DeleteButton";

import { EnterComment } from "./EnterComment";
import EditField from "../ForumMethods/EditField";
import { useParams } from "react-router-dom";
import moment from "moment";

import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

function ForumApp({ refreshPosts, setRefreshPosts }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const current_user_id = Cookies.get("user_id"); //TODO: Actually get the userid instead of using placeholder

  const url = window.location.href;
  const parts = url.split("/");
  const lessonnum = parts[parts.length - 1];
  const lessonNumber = parseInt(lessonnum, 10);

  //console.log(lessonnum, '    ', lessonNumber);
  //console.log(current_user_id);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts(); // Fetch posts when refreshPosts is true
    //setRefreshPosts(false);
  }, [refreshPosts]);

  const formatCreatedAt = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  const fetchPosts = async () => {
    const cookieValue = Cookies.get("token");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts`,
        { params: { token: cookieValue } }
      );
      const uniquePosts = response.data.filter(
        (post, index, self) => self.findIndex((p) => p.id === post.id) === index
      );
      setPosts(uniquePosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchComments = async (postId) => {
    const cookieValue = Cookies.get("token");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}/comments`,
        { params: { token: cookieValue } }
      );
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: response.data,
      }));
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error);
    }
  };

  const handlePostClick = async (post) => {
    const postId = post.id;
    if (comments[postId]) {
      setSelectedPost(post);
    } else {
      try {
        await fetchComments(postId);
        setSelectedPost(post);
      } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error);
      }
    }
  };

  const handleCommentDelete = async (postId, commentId) => {
    try {
      await deleteComment(postId, commentId);
      await fetchComments(postId);
    } catch (error) {
      console.error(`Error deleting comment ${commentId}:`, error);
    }
  };

  const deleteComment = async (postId, commentId) => {
    const cookieValue = Cookies.get("token");
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}/comments/${commentId}`,
        {
          params: {
            token: cookieValue,
          },
        }
      );
      console.log(response);
      //updates the list of post displayed i feel damn dumb
      await fetchPosts();
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const deletePost = async (postId) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.delete(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}`,
        {
          params: {
            token: cookieValue,
          },
        }
      );

      //updates the list of post displayed
      await fetchPosts();
      //go back
      setSelectedPost(null);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const handleCommentEdit = async (postId, commentId) => {
    const updatedData = {
      content: "this is updated comment content",
    };
    updateComment(postId, commentId, updatedData);
    await fetchComments(postId);
  };

  const updateComment = async (postId, commentId, updatedData) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.patch(
        `${process.env.REACT_APP_GATEWAY_URL}/lessons/${lessonNumber}/posts/${postId}/comments/${commentId}`,
        {
          token: cookieValue,
          comment: updatedData,
        }
      );
      await fetchPosts();
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const goBack = () => {
    setSelectedPost(null);
  };

  // const handleShit = () => console.log(comments);
  console.log(current_user_id);
  return (
    <div>
      {selectedPost ? (
        <div>
          <Box
            bg="rgba(237, 242, 247, 0.8)"
            paddingX="20px"
            paddingTop="25px"
            paddingBottom="5px"
            shadow="md"
            mb="40px"
            position="relative"
            ml="10px"
            mt="10px"
          >
            <Stack
              direction="row"
              align="center"
              bg="#FFFFFF"
              width="fit-content"
              padding="10px"
              shadow="md"
              // position="absolute"
              // left="-10px"
              // top="-10px"
            >
              <Avatar size="md" />
              <Flex width="100%" direction="row" justify="space-bewteen">
                <Flex direction="column" spacing="0px" width="100%">
                  <Box width="400px" maxW="400px">
                    <Heading color="#333" size="lg">
                      {selectedPost.title}
                    </Heading>
                  </Box>
                  <Text color="#333" fontSize="sm" fontStyle="italic">
                    by{" "}
                    <span style={{ fontSize: "sm", fontWeight: "bold" }}>
                      {selectedPost.user && selectedPost.user.name}
                    </span>{" "}
                    {formatCreatedAt(selectedPost.created_at)}
                  </Text>
                </Flex>
              </Flex>
            </Stack>

            <Box maxW="400px" marginBottom="10px">
              <Text mt="20px" fontSize="lg" color="#555">
                {selectedPost.user_id === current_user_id ? (
                  // JSX to render if the condition is true
                  // Place your JSX here
                  <EditField
                    postId={selectedPost.id}
                    commentId={null}
                    defaultValue={selectedPost.content}
                    fetchPosts={fetchPosts}
                    fetchComments={fetchComments}
                    type="post"
                    deletePost={deletePost}
                  />
                ) : (
                  // JSX to render if the condition is false
                  // Place your JSX here
                  <Box maxW="480px" marginBottom="10px">
                    <>{selectedPost.content}</>
                  </Box>
                )}
              </Text>
            </Box>
          </Box>
          {comments[selectedPost.id] && (
            <div>
              <Stack mb="30px">
                <EnterComment
                  postId={selectedPost.id}
                  fetchComments={fetchComments}
                />
              </Stack>

              {comments[selectedPost.id].map((comment) => (
                <Box
                  key={comment.id}
                  bg="rgba(240, 245, 250, 0.8)"
                  paddingX="20px"
                  paddingTop="20px"
                  paddingBottom="10px"
                  shadow="md"
                  marginLeft="20px"
                  position="relative"
                  mb="30px"
                >
                  <Stack
                    mb="10px"
                    textColor="#333"
                    direction="row"
                    align="center"
                    bg="#FFFFFF"
                    width="fit-content"
                    padding="10px"
                    shadow="md"
                    position="absolute" // Make the Stack position absolute
                    left="-20px"
                    top="-10px"
                  >
                    <Avatar size="sm" />
                    <Stack direction="row" align="center">
                      <Heading size="s">
                        {comment.user && comment.user.name}{" "}
                      </Heading>
                      <Text fontSize="xs" fontStyle="italic">
                        {" "}
                        {formatCreatedAt(comment.created_at)}
                      </Text>
                    </Stack>
                  </Stack>

                  <Text mt="30px" fontSize="lg" mb={1} color="#555">
                    {comment.user_id === current_user_id ? (
                      <EditField
                        postId={selectedPost.id}
                        commentId={comment.id}
                        defaultValue={comment.content}
                        fetchPosts={fetchPosts}
                        fetchComments={fetchComments}
                        type="comment"
                        handleCommentDelete={handleCommentDelete}
                      />
                    ) : (
                      // JSX to render if the condition is false
                      // Place your JSX here
                      <>{comment.content}</>
                    )}
                  </Text>
                </Box>
              ))}
            </div>
          )}
          <Stack mt="20px">
            <Button
              onClick={goBack}
              mb={4}
              colorScheme="blue"
              bg="#ed2e38"
              _hover={{ bg: "#f66873" }}
              position="absolute"
              top="10px"
              right="30px"
            >
              Go Back
            </Button>
          </Stack>
        </div>
      ) : (
        <div>
          <PostList
            posts={posts}
            onPostClick={handlePostClick}
            //onPostDelete={deletePost}
            //onPostUpdate={updatePost}
          />
        </div>
      )}
    </div>
  );
}

export default ForumApp;
