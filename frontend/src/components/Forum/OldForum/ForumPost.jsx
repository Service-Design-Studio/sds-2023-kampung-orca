import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import ForumChat from "../../Chatbox/ForumChat";
import { Header } from "../../Header";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export const ForumPost = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const navigate = useNavigate();
  const { postId } = useParams();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    navigate(`/forumview`);
  };

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="13px"
      height="800px"
      background="#FFFFFF"
    >
      <Header
        buttontext="Back to Forum"
        path="/forum"
        showSecondButton="true"
        secondbuttontext="Lesson"
        secondpath="/lesson-view"
      />

      <Stack
        paddingX="30px"
        paddingY="10px"
        direction="row"
        justify="flex-start"
        width="1440px"
        height="800px"
        maxWidth="100%"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <form onSubmit={handlePostSubmit}>
          <Card shadow="md" width="800px" bg="rgba(255, 255, 255, 0.75)">
            <CardHeader>
              <Stack direction="row" align="center" justify="space-between">
                <Heading size="lg">New Post</Heading>
              </Stack>
            </CardHeader>

            <CardBody>
              <Stack spacing="4">
                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input
                    fontSize="22px"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter title here..."
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Content</FormLabel>
                  <Textarea
                    placeholder="Enter some thoughts here..."
                    value={body}
                    onChange={handleBodyChange}
                    height="300px"
                    resize="none"
                  />
                </FormControl>

                <Stack align="flex-end">
                  <Link to={`/forum/${postId}`} bg="#ed2e38">
                    <Button
                      size="lg"
                      bg="#ed2e38"
                      textColor="#FFFFFF"
                      _hover={{ bg: "#7c191c" }}
                      height="48px"
                      fontSize="18px"
                      shadow="md"
                      onClick={handlePostSubmit}
                    >
                      Submit
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        </form>

        <ForumChat />
      </Stack>
    </Stack>
  );
};
