import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useDisclosure,
  Box,
  Text,
  Stack,
  Heading,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { EnterComment } from "./EnterComment";
//import CommentForm from "./CommentForm";
import Cookies from 'js-cookie';

function BoxPost({ post, isActive, onClick, updatePost }) {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = () => {
    onClick(post);
    onToggle();
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
        <Avatar
          shadow="lg"
          size="lg"
          src={post.user && post.user.avatar}
        />
        <Stack direction="column">
          <Stack direction="row" align="center">
            <Heading
              as="h3"
              size="md"
              textTransform="uppercase"
              color="#333"
            >
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

const ForumApp = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const current_user_id = "104304955930256288402";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const cookieValue = Cookies.get('token');
    try {
      const response = await axios.get("http://localhost:3001/lessons/1/posts", {
        params: {
          token: cookieValue,
        },
      });
      const uniquePosts = response.data.filter(
        (post, index, self) =>
          self.findIndex((p) => p.id === post.id) === index
      );
      setPosts(uniquePosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchComments = async (postId) => {
    const cookieValue = Cookies.get('token');
    try {
      const response = await axios.get(
        `http://localhost:3001/lessons/1/posts/${postId}/comments`, {
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

  const goBack = () => {
    setSelectedPost(null);
  };

  const DeletePost = async (id) => {
    const cookieValue = Cookies.get('token');
    const post_id = id;
    try {
      const response = await axios.delete(`http://localhost:3001/lessons/1/posts/${post_id}`, {
        params: {
          token: cookieValue,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const DeleteComment = async (postId, commentId) => {
    const cookieValue = Cookies.get('token');
    try {
      const response = await axios.delete(`http://localhost:3003/lessons/1/posts/${postId}/comments/${commentId}`, {
        params: {
          token: cookieValue,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const handleCommentDelete = async (postId, commentId) => {
    try {
      await DeleteComment(postId, commentId);
      // After successful deletion, fetch the comments again
      await fetchComments(postId);
    } catch (error) {
      console.error(`Error deleting comment ${commentId}:`, error);
    }
  };

  const handleEditClick = (postId) => {
    const updatedData = {
      title: "updated title",
      content: "this is updated post content",
    };
    updatePost(postId, updatedData);
  };

  const updatePost = async (postId, updatedData) => {
    const cookieValue = Cookies.get('token');
    try {
      const response = await axios.patch(
        `http://localhost:3001/lessons/1/posts/${postId}`, //this works now for editing
        {
          token: cookieValue,
          post: updatedData,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.status);
    }
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
                <EnterComment postId = {selectedPost.id}/>
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

                  
                  )}
                  
                </Box>
              ))}
              
            </div>
          )}
          
          


          <Stack mt="20px">
            <Button onClick={goBack} mb={4} colorScheme="blue" bg="#ed2e38" _hover={{ bg: '#f66873' }}>
              Go Back
            </Button>
          </Stack>

          {selectedPost.user_id === current_user_id && 
          (
          <Button onClick={() => handleEditClick(selectedPost.id)} mb={4} >
            Edit Post :D
          </Button>
          )}
          
          <Stack mr={10}/>
          

          {selectedPost.user_id === current_user_id && 
          (
            <Button onClick={() => DeletePost(selectedPost.id)} mb={4} colorScheme="blue" bg="#ed2e38" _hover={{ bg: '#f66873' }}>
              Delete Post :O
            </Button>
            
          )}

          


          
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <>
            <BoxPost
              key={post.id}
              post={post}
              isActive={selectedPost && selectedPost.id === post.id}
              onClick={handlePostClick}
              
              updatePost={updatePost}
            />
            
            

            </>

          ))}
        </div>
      )}
    </div>
  );
};

export default ForumApp;
