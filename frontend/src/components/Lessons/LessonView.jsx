import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Stack, Button, Icon, Text } from "@chakra-ui/react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import axios from "axios";
import { Header } from "../Header";
import LessonSection from "./LessonSection";
import useGateway from "../../hooks/useGateway";
import ForumButton from "../Forum/ForumBox/ForumButton";
import useCookie from "../../hooks/useCookie";

export const LessonView = () => {
  const params = useParams();
  const endpoint = window.location.pathname + "/show_pages";
  console.log(endpoint);
  const [data] = useGateway(endpoint, "Get");
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  const lesson_complete = `/curriculum/lesson/${params["lesson_id"]}/lesson_completed`;

  const pages = data?.pages;
  const topic_id = data?.topic_id;
  const back_to_lesson_pathway = `/curriculum/topic/${topic_id}`;

  let progress = 50;
  if (pages && pages.length > 1) {
    progress = Math.floor((currentPage / pages.length) * 100) + 1;
  }

  // Define a boolean state variable to track the playing state
  const isPlaying = useState(false);




  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (!pages) return null;
  if (pages.message) return <Navigate to="/error" />;

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      width="100vw"
      background="#FFFFFF"
    >
      <Header
        buttontext="Back to Lessons"
        path={back_to_lesson_pathway}
        showForum="true"
      />

      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        width="100%"
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
          paddingLeft="37px"
          paddingRight="37px"
          paddingTop="50px"
          paddingBottom="20px"
          marginRight="20px"
          spacing="15px"
          justify="flex-start"
          align="flex-start"
          overflow="hidden"
          width={{ base: "400px", md: "500px", lg: "800px" }}
          minWidth="400px"
          height={`calc(100vh - 120px)`}
          background="#FFFFFF"
          shadow="10px 0px 10px -5px rgba(0, 0, 0, 0.3)"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="20px"
            width="100%"
            height="100vh"
            paddingRight="8"
            overflowY="auto"
            color="#000000"
            ref={containerRef}
            style={{ zIndex: 10 }}
            sx={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.1)`,
              },
              "&::-webkit-scrollbar-thumb": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: `rgba(237, 46, 56, 1)`,
              },
            }}
          >
            {pages[currentPage]?.sections?.map((section, index) => (
              <LessonSection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </Stack>

          <Stack
            width="100%"
            direction="row"
            justify="space-between"
            align="center"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack width="100%" direction="row" justify="space-between">
              <Stack flex="1">
                {currentPage > 0 && (
                  <Button
                    size="lg"
                    variant="ghost"
                    textColor="#ed2e38"
                    _hover={{ bg: "#ffaea8" }}
                    height="48px"
                    fontSize="18px"
                    leftIcon={<Icon as={FaAnglesLeft} boxSize="7" />}
                    onClick={prevPage}
                    data-cy = "previous-page"
                  />
                )}
              </Stack>
              <Stack flex="1" align="center" justify="center">
                <Text fontSize="16px">{currentPage + 1}</Text>
              </Stack>

              <Stack flex="1">
                {currentPage < pages.length - 1 && (
                  <Button
                    size="lg"
                    variant="ghost"
                    textColor="#ed2e38"
                    _hover={{ bg: "#ffaea8" }}
                    height="48px"
                    fontSize="18px"
                    rightIcon={<Icon as={FaAnglesRight} boxSize="7" />}
                    onClick={nextPage}
                    data-cy = "next-page"
                  />
                )}

                {currentPage === pages.length - 1 && (
                  <Link to={lesson_complete}>
                    <Button
                      size="lg"
                      variant="ghost"
                      bg="#ed2e38"
                      textColor="#FFFFFF"
                      _hover={{ bg: "#7c191c" }}
                      height="48px"
                      fontSize="18px"
                      data-cy = "complete-lesson"
                    >
                      Complete Lesson
                    </Button>
                  </Link>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column">
          {pages[currentPage]?.video && (
            <Stack
              borderRadius="0px 0px 0px 0px"
              justify="flex-start"
              align="center"
              marginTop="30px"
              overflow="hidden"
              background="#E0C825"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
              marginRight="20px"
              width="650px"
              height="450px"
            >
              <iframe
                title="kampung"
                src={pages[currentPage].video}
                width="100%"
                height="100%"
                data-cy={isPlaying ? "iframe-playing" : "iframe-not-playing"}
              />
            </Stack>
          )}

          <Stack
            position="fixed"
            right="20px"
            bottom="20px"
            direction="row"
            justify="space-between"
            align="center"
          >
            <ForumButton />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default LessonView;
