import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Stack, Text, Button, Square, Box, Flex, HStack, theme} from "@chakra-ui/react";
import Cookies from "js-cookie";
import useGateway from "../../hooks/useGateway";
import { motion } from "framer-motion";
import { FiLogOut, FiGrid, FiList } from "react-icons/fi";
import NavigationButton from "./NavigationButton";

const TopicPage = () => {
  // TODO: CHANGE THIS!
  const [topics] = useGateway(window.location.pathname);
  const [userData] = useGateway("/users/profile");
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
          backgroundSize: "cover",
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
  background="#ed2e38"
  height="90px" 
  zIndex="9999"
>
         <Flex align="center"> 
         
         <Button
            onClick={handleLogout}
            variant="unstyled"
            fontSize="md"
            marginLeft="1"
            size="lg"
            shadow="lg"
            bg="#FFFFFF"
            display="flex"
            alignItems="center"
            textColor="#000000"
            _hover={{ bg: "#d8d9e3" }}
            height="48px"
            padding = "10px"
            marginRight="20px"          >
            Logout
            <FiLogOut size={20} style={{ marginLeft: "10px" }} /> 
          </Button>
          </Flex>
        </Box>

        <div
        style={{
          position: "absolute",
          
          top: "100px",
          width: "100%",
          textAlign: "center",
          marginTop: "10vh",
          padding: `0 ${theme.space["4"]}`, // Adjust the spacing as needed
          
        }}
      >
          <Stack direction="column" spacing="10px" >
            <Text
              fontSize={["24px","36px","48px"]}
              fontWeight="700"
              fontFamily="Roboto"
              lineHeight="normal"
              color="#000000"
            >
              Welcome back, {userData.name || "Guest"}!
            </Text>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Text fontSize={["8px","16px","36px"]} fontFamily="Roboto" lineHeight="normal">
                Sharpen your interfaith knowledge
              </Text>
            </motion.div>
          </Stack>
        </div>

        <Box
      width="100%"
      maxWidth="1200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      paddingY="15vh"
    >
      <Stack
  width="100%"
  maxWidth="1200px"
  overflowX="auto"
  spacing = "10px"
  
  
  sx={{
    "&::-webkit-scrollbar": {
      width: "16px",
      borderRadius: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "16px",
      borderRadius: "8px",
      backgroundColor: "rgba(237, 46, 56, 1)",
    },
  }}
>
            <Stack
              direction="row"
              spacing="50px"
              width="max-content"
              justifyContent="center"
              alignItems="center"
              paddingX="10vw"
              paddingY={["15vh", "220px"]} // Adjust the spacing as needed
              overflowY="hidden"
              
              
              
            >
              {topics.map((topic) => (
                <NavigationButton
                  key={topic.topic_id}
                  to={`/curriculum/topic/${topic.topic_id}`}
                  hideButton={false}
                  data={topic.topic_id}
                  topic_id={topic.topic_id}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
        
      </Stack>
    )
  );
};

export default TopicPage;
