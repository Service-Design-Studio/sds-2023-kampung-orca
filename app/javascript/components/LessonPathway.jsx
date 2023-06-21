import React from "react";
import { Stack, Button } from '@chakra-ui/react'
import { Link,useNavigate } from "react-router-dom";

export const LessonPathway = () => (
  <Stack width="1440px" height="824px" maxWidth="100%" background="#FFFFFF">
    <Stack justify="flex-end" align="center" spacing="20px">
      <Stack justify="flex-start" align="center" spacing="56px">
        <Stack justify="flex-start" align="center" spacing="237px">
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="13px"
            width="1440px"
            height="151px"
            maxWidth="100%"
          >
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
              <Button size="lg" colorScheme="green" height="48px">
                back to main
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justify="center"
            align="center"
            spacing="389px"
          > 
          <Link to={'/lesson-view/1'}>
            <Button size="lg" variant="outline" colorScheme="green">
              Lesson 1
            </Button>
            </Link>
            <Link to={'/lesson-view/2'}>
            <Button size="lg" variant="outline" colorScheme="green">
              Lesson 2
            </Button>
            </Link>
            <Link to={'/lesson-view/3'}>
            <Button size="lg" variant="outline" colorScheme="green">
              Lesson 3
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)
