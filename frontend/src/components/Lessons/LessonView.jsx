import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Text, Icon, Box } from '@chakra-ui/react'
import { Header } from '../Header'
import Chatbutton from "../Chatbox/Chatbutton"
import LessonSection from "./LessonSection"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const videos = [
  "https://www.youtube.com/embed/n5xYb4TOaYs",
  "https://www.youtube.com/embed/P_uKbiHBUHo"
];


const Lesson = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const containerRef = useRef(null);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentVideo = videos[currentPage - 1];

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [currentPage]);



  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      width="100vw"
      background="#FFFFFF"
    >
      
      <Header buttontext="Back to Lessons" path="/" showForum="true"/>

      <Stack //main body stack with left and right substack
        
        direction="row"
        justify="flex-start"
        align="flex-start"
        width="100%"
        height={`calc(100vh - 120px)`}
        maxWidth="100%"
        style={{
        backgroundImage: 'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      >

        <Stack //left stack with lesson word content
          paddingLeft="37px"
          paddingRight="37px"
          paddingTop="50px"
          paddingBottom="20px"
          marginRight="20px"
          spacing="15px"
          justify="flex-start"
          align="flex-start"
          overflow="hidden"
          width={{base:"400px", md:"500px", lg:"800px"}}
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
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.1)`,
              },
              '&::-webkit-scrollbar-thumb': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(237, 46, 56, 1)`,
              },
            }}
          >

            {currentPage === 1 && (
              <>
              <LessonSection title="Lesson" content={["Material from lesson content."]} />

              <LessonSection
              title="Introduction"
              content={["Christianity and Hinduism are two of the world's major religions. While both religions share some similarities, there are also many differences between them. This article will discuss the main differences between Christianity and Hinduism."]}
            />

            <LessonSection
              title="Beliefs"
              content={["One of the main differences between Christianity and Hinduism is the belief in one God. Christians believe in the Holy Trinity, which is one God in three persons: the Father, the Son, and the Holy Spirit. In contrast, Hinduism believes in multiple gods and goddesses. Hinduism believes that there are many paths to reach God, whereas Christianity believes that Jesus Christ is the only way to reach God."]}
            />

            <LessonSection
                  title="Lorem Ipsum"
                  content={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam magna nec dolor consequat euismod. Curabitur fermentum, elit ut tempus hendrerit, ex magna varius leo, ut pulvinar mi ligula vel diam. Sed nisl velit, sagittis sed leo et, placerat lobortis risus. Suspendisse eleifend maximus rutrum. Pellentesque euismod nibh feugiat libero aliquam, at rhoncus metus scelerisque. Ut sodales, arcu ut molestie pulvinar, lacus erat accumsan nunc, non ullamcorper ligula ipsum in ex. Praesent luctus non dui id tincidunt. Nunc lobortis tempus nulla porttitor vestibulum. Nulla vitae aliquet sem. Nulla augue urna, iaculis eu arcu ut, lacinia pharetra mauris.",
                    "Fusce molestie massa ac lacus volutpat mattis. Fusce et consectetur ante. Curabitur dolor tortor, commodo non odio vitae, fermentum finibus risus. Duis sed nulla a erat venenatis scelerisque at id neque. Curabitur fringilla risus magna, ut tempor risus iaculis quis. Suspendisse nibh augue, gravida eu tortor ut, euismod ullamcorper nibh. Curabitur lectus sem, fringilla eget interdum porttitor, pharetra sed quam. Vestibulum porta eu tellus quis sodales.",
                  ]}
                />
            
            </>
            )}

            {currentPage === 2 && (
              <>
                <LessonSection
                  title="Lorem Ipsum"
                  content={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam magna nec dolor consequat euismod. Curabitur fermentum, elit ut tempus hendrerit, ex magna varius leo, ut pulvinar mi ligula vel diam. Sed nisl velit, sagittis sed leo et, placerat lobortis risus. Suspendisse eleifend maximus rutrum. Pellentesque euismod nibh feugiat libero aliquam, at rhoncus metus scelerisque. Ut sodales, arcu ut molestie pulvinar, lacus erat accumsan nunc, non ullamcorper ligula ipsum in ex. Praesent luctus non dui id tincidunt. Nunc lobortis tempus nulla porttitor vestibulum. Nulla vitae aliquet sem. Nulla augue urna, iaculis eu arcu ut, lacinia pharetra mauris.",
                    "Fusce molestie massa ac lacus volutpat mattis. Fusce et consectetur ante. Curabitur dolor tortor, commodo non odio vitae, fermentum finibus risus. Duis sed nulla a erat venenatis scelerisque at id neque. Curabitur fringilla risus magna, ut tempor risus iaculis quis. Suspendisse nibh augue, gravida eu tortor ut, euismod ullamcorper nibh. Curabitur lectus sem, fringilla eget interdum porttitor, pharetra sed quam. Vestibulum porta eu tellus quis sodales.",
                    "Mauris id viverra lorem. Pellentesque feugiat lorem nec elit sollicitudin faucibus. Quisque lobortis diam eu bibendum convallis. Pellentesque gravida velit vitae magna dignissim dapibus. Nam et eleifend dolor. Etiam ut faucibus purus. Donec ac aliquet dolor.",
                    "Etiam elit tortor, laoreet consectetur scelerisque at, laoreet at dui. Etiam dignissim ipsum vitae massa iaculis suscipit. Aliquam lectus ex, dapibus in fringilla at, gravida ut orci. Ut maximus libero vitae efficitur consequat. Proin nisl felis, venenatis quis velit eget, iaculis pharetra sapien. Sed venenatis gravida orci, et ultricies nunc elementum in. Nulla hendrerit nec lorem non suscipit. Integer dolor neque, mollis quis gravida non, cursus vitae nibh. Aliquam erat volutpat. Aenean molestie, nunc semper posuere iaculis, justo justo molestie ligula, at rutrum ligula ligula sed ex. Nam in maximus enim. Phasellus scelerisque malesuada ante sed auctor. Duis laoreet cursus volutpat. Donec ac ante sed orci congue sollicitudin.",
                    "Phasellus mauris massa, ultricies vitae eros a, imperdiet molestie est. Proin aliquam et justo id lacinia. Pellentesque et enim eros. Nam aliquam, justo ut pretium facilisis, lorem velit dapibus risus, sit amet sodales velit nulla vitae purus. Donec laoreet nunc est, vel ullamcorper tortor tempor a. In mi tortor, malesuada semper odio nec, consectetur lobortis quam. Nunc ultricies nec odio quis ultrices. Morbi dignissim faucibus orci, eu mattis elit euismod sed."
                  ]}
                />
              </>
            )}



           

          </Stack>

          <Stack width="100%" direction="row" justify="space-between" align="flex-end">
              <Box flex="1" justify="space-between">
                {currentPage > 1 && (
                    <Button
                      size="lg"
                      variant="ghost"
                      textColor="#ed2e38"
                      _hover={{ bg: "#ffaea8" }}
                      height="48px"
                      fontSize="18px"
                      leftIcon={<Icon as={FaAnglesLeft} boxSize="7" />}
                      onClick={prevPage}
                    />
                )}
              </Box>

              <Box flex="1" textAlign="right">
                {currentPage < totalPages && (
                    <Button
                      size="lg"
                      variant="ghost"
                      textColor="#ed2e38"
                      _hover={{ bg: "#ffaea8" }}
                      height="48px"
                      fontSize="18px"
                      rightIcon={<Icon as={FaAnglesRight} boxSize="7" />}
                      onClick={nextPage}
                    />
                )}

                {currentPage > 1 && (
                  <Link to={`/lesson-complete`}>
                    <Button
                      size="lg"
                      variant="ghost"
                      bg="#ed2e38"
                      textColor="#FFFFFF"
                      _hover={{ bg: "##7c191c" }}
                      height="48px"
                      fontSize="18px"
                    >
                    Complete Lesson
                    </Button>
                  </Link>
                )}
              </Box>
            </Stack>

        </Stack>

        <Stack //right stack with video and 2 buttons
          direction="column">

          <Stack //video stack
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
              src={currentVideo}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Stack>

          <Stack //buttons stack
            position="fixed"
            right="20px"
            bottom="20px" 
            direction="row"
            justify="space-between"
            align="center"
          >

          <Chatbutton/>
            
          </Stack>

        </Stack>

      </Stack>
      
    </Stack>
  );

};
export default Lesson;

          
