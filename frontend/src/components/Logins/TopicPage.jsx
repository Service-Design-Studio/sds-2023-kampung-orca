import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Stack, Text, Button, Square, Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import useGateway from "../../hooks/useGateway";
import { motion } from "framer-motion";
import { FiLogOut, FiGrid, FiList } from "react-icons/fi";
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

        <div
          style={{
            position: "fixed",
            top: "100px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Stack direction="column" spacing="10px">
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
          {/* Add a custom scrollbar div */}
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              overflowX: "auto",

              scrollbarWidth: "thin",
              scrollbarColor: "#888 #f0f0f0",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f0f0f0",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px",
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
              paddingY="26vh"
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
          </div>
        </Box>
      </Stack>
    )
  );
};

export default TopicPage;
