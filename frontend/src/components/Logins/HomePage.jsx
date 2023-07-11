import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Text, Button, Square, IconButton } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

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
        backgroundImage: 'url("https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/202950-simple-green-and-beige-background-graphic.jpg?ezimgfmt=ng%3Awebp%2Fngcb5%2Frs%3Adevice%2Frscb6-1&q=95&w=500")',
        backgroundSize: "contain",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
        <header style={{ position: "absolute", top: "10px", right: "10px", display: "flex", alignItems: "center" }}>
        <Button onClick={handleLogout} variant="unstyled" fontSize="md" marginRight="1">
          Logout
        </Button>
        <FiLogOut size={40} />
      </header>

      <Stack direction="column" spacing="10px" paddingTop="50px">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Text fontSize="24px" fontFamily="Arial" lineHeight="normal">
            Sharpen your interfaith knowledge
          </Text>
        </motion.div>
      </Stack> 
      /* animation */


      <Stack direction="row" spacing="50px" paddingY="50px"> 
      /* first layer stack */
        <Link to="/">
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
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png?w=740&t=st=1689052858~exp=1689053458~hmac=7cf8faa9fd039c16be8dde7ef26fd2eddab71c077a80aac164e1528770a0046a"
              alt="Chapter 1"
              style={{ width: "120px", marginBottom: "10px" }}
            />
            <Text fontSize="lg" fontWeight="bold">
              Chapter 1 <br /> Introduction
            </Text>
          </Square>
        </Link>
        <Link to="/">
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
              src="https://img.freepik.com/free-vector/interreligious-dialogue-abstract-concept-vector-illustration-different-traditions-religious-symbol-members-interaction-orthodox-church-handshake-christian-pope-conference-abstract-metaphor_335657-6320.jpg?w=740&t=st=1689053151~exp=1689053751~hmac=2b5d09c24d62c6b11675fc3241281a0b05116a6f257962bc0f36675b9b985167"
              alt="Chapter 1"
              style={{ width: "120px", borderRadius: "50%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
            />
            <Text fontSize="lg" fontWeight="bold" marginTop="10px">
              Chapter 2 <br /> History of Religion
            </Text>
          </Square>
        </Link>
        <Link to="/">
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
              src="https://cdn-icons-png.flaticon.com/512/86/86122.png?w=740&t=st=1689054584~exp=1689055184~hmac=89f6b6409da35c7d836206ef6d31ac64ad2aeb62e8561d6ca49587fbb70fc744"
              alt="Chapter 3"
              style={{ width: "120px",  }}
            />
            <Text fontSize="lg" fontWeight="bold" marginTop="10px">
              Chapter 3 <br /> Ethics and Morals
            </Text>
          </Square>
        </Link>
        
      </Stack>

      <Stack direction="row" spacing="50px" paddingY="50px"> /* second layer stack */
        <Link to="/">
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
              src="https://cdn-icons-png.flaticon.com/512/43/43168.png?w=740&t=st=1689059837~exp=1689060437~hmac=cb3d0e305ad9f551c9616fc44193e14f22a7df3d743c3a6be21c9dd5c921a619"
              alt="Chapter 3"
              style={{ width: "120px",  }}
            />
            <Text fontSize="lg" fontWeight="bold" marginTop="10px">
              Chapter 4 <br /> Communications
            </Text>
          </Square>
        </Link>
        <Link to="/">
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
              src="https://img.freepik.com/free-vector/praying-hands-religion-holy-catholic-christian-spirituality-belief-hope_1284-41654.jpg?w=740&t=st=1689061208~exp=1689061808~hmac=f6349c0c9bbc6220e9fcb94971149f37143a8c75064b3bc3d5f8e96e6e408a42"
              alt="Chapter 5"
              style={{ width: "120px",  }}
            />
            <Text fontSize="lg" fontWeight="bold" marginTop="10px">
              Chapter 5 <br /> Practices
            </Text>
          </Square>
        </Link>
        <Link to="/">
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
              src="https://img.freepik.com/free-vector/hand-hold-stack-books-isolated-white-hand-drawn-sketch-vector-illustration_460848-14901.jpg?w=826&t=st=1689060519~exp=1689061119~hmac=52e570dab308d4af1963420607b8c3c038b9e79b7e4f1d5d2c0b1455968dba40"
              alt="Chapter 6"
              style={{ width: "120px",  }}
            />
            <Text fontSize="lg" fontWeight="bold" marginTop="10px">
              Chapter 6 <br /> Theories
            </Text>
          </Square>
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


