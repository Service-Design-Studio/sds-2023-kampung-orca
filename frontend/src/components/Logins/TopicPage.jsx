import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Stack, Text, Button, Square, Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import useGateway from "../../hooks/useGateway";

function NavigationButton({ to, children, hideButton }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }
  const buttonStyle = {
    display: hideButton ? "none" : "block",
    width: "200px", // Adjust the width as per your requirement
    height: "30px", // Adjust the height as per your requirement
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {children}
    </button>
  );
}

const TopicPage = () => {
  // TODO: CHANGE THIS!
  const [topics] = useGateway(window.location.pathname);
  console.log(topics);
  if (!topics) return;
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session or local storage, and navigate to the login page
    Cookies.remove("token");
    window.location.href = "/";
  };
  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      spacing="0"
      width="100%"
      minHeight="100vh"
      color="#000"
      textAlign="center"
      fontFamily="Arial"
      position="relative"
      overflow="auto"
      style={{
        backgroundImage: 'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <header style={{ position: "absolute", top: "10px", right: "10px" }}>
        <Button onClick={handleLogout}>Logout</Button>
      </header>

      <Stack direction="column" spacing="10px" paddingTop="50px">
        <Text
          fontSize={["32px", "48px"]} // Responsive font size based on breakpoints
          fontWeight="700"
          lineHeight="normal"
          color="#000000"
        >
          Welcome back!
        </Text>
        <Text fontSize="16px" fontFamily="Outfit" lineHeight="normal">
          Sharpen your interfaith knowledge
        </Text>
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px">
        {topics.map((topic) => (
          <NavigationButton
            key={topic.topic_id}
            to={`/curriculum/topic/${topic.topic_id}`}
            hideButton={false}
          >
            <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
          </NavigationButton>
        ))}
      </Stack>
    </Stack>
  );
};

export default TopicPage;
