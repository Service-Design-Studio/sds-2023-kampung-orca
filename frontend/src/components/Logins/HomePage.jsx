import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button, Square } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session or local storage, and navigate to the login page
    navigate("/");
  };

  const navigateToMain = () => {
    navigate("curriculum/topic/1", { replace: true });
  };

  const navigateToLesson = () => {
    navigate("curriculum/topic/1/lesson/1", { replace: true });
  };
  const CustomSquare = ({ linkTo, imageSrc, imageAlt, title }) => (
    <Link to="/curriculum/topic">
      <Square
        bg="rgba(128, 128, 128, 0.7)"
        size="200px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.1)" }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: "120px", marginBottom: "10px", marginTop: "10px" }}
        />
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Square>
    </Link>
  );
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
        backgroundImage:
          'url("https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/202950-simple-green-and-beige-background-graphic.jpg?ezimgfmt=ng%3Awebp%2Fngcb5%2Frs%3Adevice%2Frscb6-1&q=95&w=500")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleLogout}
          variant="unstyled"
          fontSize="md"
          marginRight="1"
        >
          Logout
        </Button>
        <FiLogOut size={40} />
      </header>

      <Stack direction="column" spacing="10px" paddingTop="50px">
        <Text
          fontSize={["32px", "48px"]} // Responsive font size based on breakpoints
          fontWeight="700"
          lineHeight="normal"
          color="#000000"
        >
          <Text
            fontSize={["32px", "48px"]} // Responsive font size based on breakpoints
            fontWeight="700"
            fontFamily="Arial"
            lineHeight="normal"
            color="#000000"
          >
            Welcome back, USER_ID!
          </Text>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Text fontSize="24px" fontFamily="Arial" lineHeight="normal">
              Sharpen your interfaith knowledge
            </Text>
          </motion.div>
        </Text>
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px">
        <Link to="/">
          <CustomSquare
            linkTo="/"
            imageSrc="https://cdn-icons-png.flaticon.com/512/29/29302.png?w=740&t=st=1689052858~exp=1689053458~hmac=7cf8faa9fd039c16be8dde7ef26fd2eddab71c077a80aac164e1528770a0046a"
            imageAlt="Chapter 1"
            title="Chapter 1 Introduction"
          />
        </Link>
        <Link to="/">
          <CustomSquare
            linkTo="/"
            imageSrc="https://img.freepik.com/free-vector/interreligious-dialogue-abstract-concept-vector-illustration-different-traditions-religious-symbol-members-interaction-orthodox-church-handshake-christian-pope-conference-abstract-metaphor_335657-6320.jpg?w=740&t=st=1689053151~exp=1689053751~hmac=2b5d09c24d62c6b11675fc3241281a0b05116a6f257962bc0f36675b9b985167"
            imageAlt="Chapter 2"
            title="Chapter 2 History of Religion"
          />
        </Link>
        <Link to="/">
          <CustomSquare
            linkTo="/"
            imageSrc="https://cdn-icons-png.flaticon.com/512/86/86122.png?w=740&t=st=1689054584~exp=1689055184~hmac=89f6b6409da35c7d836206ef6d31ac64ad2aeb62e8561d6ca49587fbb70fc744"
            imageAlt="Chapter 3"
            title="Chapter 3 Ethics and Morals"
          />
        </Link>
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px">
        <Link to="/">
          <CustomSquare
            linkTo="/"
            imageSrc="https://cdn-icons-png.flaticon.com/512/43/43168.png?w=740&t=st=1689059837~exp=1689060437~hmac=cb3d0e305ad9f551c9616fc44193e14f22a7df3d743c3a6be21c9dd5c921a619"
            imageAlt="Chapter 4"
            title="Chapter 4 Communications"
          />
        </Link>
        <Link to="/">
          <CustomSquare
            linkTo="/"
            imageSrc="https://img.freepik.com/free-vector/praying-hands-religion-holy-catholic-christian-spirituality-belief-hope_1284-41654.jpg?w=740&t=st=1689061208~exp=1689061808~hmac=f6349c0c9bbc6220e9fcb94971149f37143a8c75064b3bc3d5f8e96e6e408a42"
            imageAlt="Chapter 5"
            title="Chapter 5 Practices"
          />
        </Link>
        <Link to="/">
          <CustomSquare
            linkTo="/"
            imageSrc="https://img.freepik.com/free-vector/hand-hold-stack-books-isolated-white-hand-drawn-sketch-vector-illustration_460848-14901.jpg?w=826&t=st=1689060519~exp=1689061119~hmac=52e570dab308d4af1963420607b8c3c038b9e79b7e4f1d5d2c0b1455968dba40"
            imageAlt="Chapter 6"
            title="Chapter 6 Theories"
          />
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
