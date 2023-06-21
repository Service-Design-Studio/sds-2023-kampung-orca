import React from "react";
import { Link,useParams } from "react-router-dom";
import { Stack, Button, Icon, Text } from '@chakra-ui/react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { BsPatchCheck } from 'react-icons/bs'


export const LessonCompletion  = () => {
  params = useParams();
  const pre = parseInt(params.lesson_id) - 1;
  const next = parseInt(params.lesson_id) + 1;

  return(
    <Stack
    justify="flex-start"
    align="flex-start"
    spacing="13px"
    height="824px"
    background="#FFFFFF"
  >
    <Stack
      justify="space-between"
      align="flex-start"
      spacing="13px"
      height="824px"
    >
      <Stack justify="flex-start" align="flex-start" spacing="13px" />
      <Stack justify="flex-start" align="flex-start">
        <Stack justify="flex-start" align="flex-start">
          <Stack justify="flex-start" align="flex-start" spacing="13px">
            <Stack
              paddingX="65px"
              paddingTop="10px"
              paddingBottom="5px"
              direction="row"
              justify="flex-start"
              align="center"
              spacing="126px"
              overflow="hidden"
              width="1440px"
              height="90px"
              maxWidth="100%"
              background="green.200"
            >
              <Link to={'/'}>
                <Button size="lg" colorScheme="green" height="48px">
                  back to lesson
                </Button>
              </Link>
            </Stack>
            <Stack
              paddingX="91px"
              paddingY="80px"
              width="1440px"
              height="625px"
              maxWidth="100%"
              boxShadow="lg"
            >
              <Stack
                borderRadius="50px"
                direction="row"
                justify="center"
                align="center"
                spacing="70px"
              >
                <Link to={`/lesson-view/${pre}`}>
                <Button leftIcon={<Icon as={GoChevronLeft} />} size="lg">
                  Previous Lesson
                </Button>
                </Link>
                <Stack
                  borderRadius="50px"
                  justify="center"
                  align="center"
                  spacing="0px"
                  width="430px"
                  height="322px"
                  maxWidth="100%"
                >
                  <Stack
                    paddingX="90px"
                    paddingY="31px"
                    borderRadius="50px"
                    direction="row"
                    justify="center"
                    align="center"
                    spacing="10px"
                    overflow="hidden"
                    background="green.100"
                    boxShadow="sm"
                  >
                    <Stack justify="flex-start" align="center" spacing="17px">
                      <Icon as={BsPatchCheck} />
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.33"
                        fontWeight="semibold"
                        fontSize="24px"
                        color="#000000"
                        width="250px"
                        height="64px"
                        maxWidth="100%"
                        textAlign="center"
                      >
                        Lesson Completed!
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Link to={`/lesson-view/${next}`}>
                <Button rightIcon={<Icon as={GoChevronRight} />} size="lg">
                  Next Lesson
                </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            padding="20px"
            justify="flex-end"
            align="flex-end"
            spacing="10px"
            overflow="hidden"
            width="1440px"
            maxWidth="100%"
          >
            <Button size="lg" colorScheme="blue" height="48px">
              Chat with Students!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
  )
};

