// ForumApp.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import PostList from "./PostList";
import CommentList from "./CommentList";
import { EnterComment } from "./EnterComment";

function ForumApp() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const current_user_id = "104304955930256288402"; //TODO: Actually get the userid instead of using placeholder

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const cookieValue = Cookies.get("token");
    try {
      const response = await axios.get(
        "http://localhost:3001/lessons/1/posts",
        {
          params: {
            token: cookieValue,
          },
        }
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
        `http://localhost:3001/lessons/1/posts/${postId}/comments`,
        {
          params: {
            token: cookieValue,
          },
        }
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
      const response = await axios.delete(`http://localhost:3001/lessons/1/posts/${postId}/comments/${commentId}`, {
        params: {
          token: cookieValue,
        },
      });
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
      await axios.delete(`http://localhost:3001/lessons/1/posts/${postId}`, {
        params: {
          token: cookieValue,
        },
      });

      //updates the list of post displayed 
      await fetchPosts();
      //go back
      setSelectedPost(null);

    } catch (error) {
      console.log(error.response.status);
    }
  };

  const handleEditClick = (postId) => {
    const updatedData = {
      title: "updated title",
      content: "this is updated post content",
    };
    updatePost(postId, updatedData);
  };

  const handleCommentEdit = async(postId, commentId) => {
    const updatedData = {
      content: "this is updated comment content",
    };
    updateComment(postId, commentId, updatedData);
    await fetchComments(postId);
  };

  const updatePost = async (postId, updatedData) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.patch(`http://localhost:3001/lessons/1/posts/${postId}`, {
        token: cookieValue,
        post: updatedData,
      });

      await fetchPosts();
      const temp = selectedPost;
      setSelectedPost(null);

    } catch (error) {
      console.log(error.response.status);
    }
  };

  const updateComment = async (postId, commentId, updatedData) => {
    const cookieValue = Cookies.get("token");
    try {
      await axios.patch(`http://localhost:3001/lessons/1/posts/${postId}/comments/${commentId}`, {
        token: cookieValue,
        comment: updatedData,
      });
      await fetchPosts();

      

    } catch (error) {
      console.log(error.response.status);
    }
  };

  const goBack = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      {selectedPost ? (
        <div>
          <Box
            bg="rgba(237, 242, 247, 0.9)"
            padding="20px"
            shadow="0 0 5px 1px rgba(0, 0, 0, 0.3)"
            mb={4}
          >
            <Heading as="h2" mb={2} color="#333">
              {selectedPost.title}
            </Heading>
            <Text fontSize="lg" fontStyle="italic" mb={4} color="#555">
              {selectedPost.content}
            </Text>
            <Text color="#555">
              Posted by: {selectedPost.user && selectedPost.user.name}
            </Text>
          </Box>
          {comments[selectedPost.id] && (
            <div>
              <Heading as="h3" mt={4} mb={2} color="#555">
                Comments
              </Heading>
              <Stack mb="20px">
                <EnterComment postId={selectedPost.id} fetchComments={fetchComments}/>
              </Stack>

              {comments[selectedPost.id].map((comment) => (
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

                  {comment.user_id === current_user_id && 
                  (

                    <Stack direction="row" spacing={2}>
                      <Button
                      onClick={() => handleCommentDelete(selectedPost.id, comment.id)}
                      colorScheme="blue"
                      bg="#ed2e38"
                      _hover={{ bg: '#f66873' }}
                      size="sm"
                      mt={2}
                    >
                      Delete Comment -_-
                    </Button>

                    <Button
                    onClick={() => handleCommentEdit(selectedPost.id, comment.id)}
                    colorScheme="blue"
                    bg="#ed2e38"
                    _hover={{ bg: '#f66873' }}
                    size="sm"
                    mt={2}
                    >
                      Edit Comment 0_0
                    </Button>
                  </Stack>
                  
                  )}
                  
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
            >
              Go Back
            </Button>
          </Stack>

          {selectedPost.user_id === current_user_id && 
          (
            <Stack direction="row" spacing={5}>
              <Button onClick={() => handleEditClick(selectedPost.id)} mb={4} >
                Edit Post :D
              </Button>

              <Button onClick={() => deletePost(selectedPost.id)} mb={4} colorScheme="blue" bg="#ed2e38" _hover={{ bg: '#f66873' }}>
                Delete Post :O
              </Button>
          </Stack>
          
          )}
          

          


          
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
