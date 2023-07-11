import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button, Square } from "@chakra-ui/react";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session or local storage, and navigate to the login page
    navigate("/cover");
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
          Welcome back, USER_ID!
        </Text>
        <Text fontSize="16px" fontFamily="Outfit" lineHeight="normal">
          Sharpen your interfaith knowledge
        </Text>
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px">
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px">
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px">
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
        <Link to="/">
          <Square bg="rgba(128, 128, 128, 0.5)" size="200px" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default HomePage;


