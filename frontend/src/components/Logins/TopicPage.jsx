import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Stack, Text, Button, Square, Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import useGateway from "../../hooks/useGateway";
import { motion } from "framer-motion";
import { FiLogOut ,FiGrid, FiList } from "react-icons/fi";
import NavigationButton from "./NavigationButton";





const TopicPage = () => {
  // TODO: CHANGE THIS!
  const [topics] = useGateway(window.location.pathname);
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session or local storage, and navigate to the login page
    Cookies.remove("token");
    window.location.href = "/";
  };
  return (
    topics && (
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
            'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding="10px"
        bg="red"
        zIndex="9999"
      >
        <Button
          onClick={handleLogout}
          variant="unstyled"
          fontSize="md"
          marginLeft="1"
        >
          <FiLogOut size={40} />
        </Button>
      </Box>

        <Stack direction="column" spacing="10px" paddingTop="50px">
        <Text
          fontSize={["32px", "48px"]} 
          fontWeight="700"
          fontFamily="Poppins"
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
          <Text fontSize="36px" fontFamily="Poppins" lineHeight="normal">
            Sharpen your interfaith knowledge
          </Text>
        </motion.div>
      
        </Stack>

        <Stack direction="row" spacing="50px" paddingY="50px">
          {topics.map((topic) => (
            <NavigationButton
            key={topic.topic_id}
            to={`/curriculum/topic/${topic.topic_id}`}
            hideButton={false}
            data={topic.topic_id}
            topic_id={topic.topic_id} // Change the prop name here
          >
              
            </NavigationButton>
          ))}
        </Stack>
      </Stack>
    )
  );
};

export default TopicPage;