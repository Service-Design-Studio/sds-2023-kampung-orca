import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Stack, Text, Button, Square, Box, Heading } from "@chakra-ui/react";
import Cookies from "js-cookie";
import useGateway from "../../hooks/useGateway";
import { motion } from "framer-motion";
import { FiLogOut, FiGrid, FiList } from "react-icons/fi";
import NavigationButton from "./NavigationButton";
import { Header } from "../Header";

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
        justify="flex-start"
        align="flex-start"
        height="100vh"
        width="100vw"
        background="#FFFFFF"
      >
        <Header showLogout path="/" />

        <Stack
          paddingX="91px"
          paddingY="40px"
          direction="column"
          align="center"
          justify="flex-start"
          spacing="20px"
          width="100vw"
          height={`calc(100vh - 120px)`}
          maxWidth="100%"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <Stack
            align="center"
            borderRadius="20px"
            bg = "#F9F9F9"
            shadow="lg"
            paddingX="50px"
            paddingY="30px"
          >
            <Heading fontFamily="Roboto" fontSize="60px">
              Welcome back, Keith!
            </Heading>
            <Text fontFamily="Roboto" fontSize="24px">
              Sharpen your interfaith knowledge
            </Text>
          </Stack>

          <Stack
            direction="row"
            spacing="50px"
            paddingY="50px"
            height="100%"
            justify="center"
            align="center"
          >
            {topics.map((topic) => (
              <NavigationButton
                key={topic.topic_id}
                to={`/curriculum/topic/${topic.topic_id}`}
                hideButton={false}
                data={topic.topic_id}
                topic_id={topic.topic_id} // Change the prop name here
              ></NavigationButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    )
  );
};

export default TopicPage;
