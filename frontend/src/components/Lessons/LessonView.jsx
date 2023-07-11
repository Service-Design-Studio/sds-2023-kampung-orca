import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Text } from "@chakra-ui/react";
import ChatButton from "../Chatbox/Chatbutton";
import { Header } from "../Header";

const Lesson = () => {
  //   params = useParams();
  //   const navigate = useNavigate();
  //   const [pages, setPage] = useState({});

  //   useEffect(() => {
  //     const url = `/api/v1/page/show/${params.lesson_id}`;
  //     fetch(url)
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         throw new Error("Network response was not ok.");
  //       })
  //       .then((res) => setPage(res))
  //       .catch(() => navigate("/"));
  //   }, []);

  //=========================================================

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
        path="/"
        showChat="true"
        showForum="true"
      />

      <Stack //main body stack with left and right substack
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
        <Stack //left stack with lesson word content
          paddingLeft="37px"
          paddingRight="37px"
          paddingTop="50px"
          paddingBottom="50px"
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
            color="#000000"
          >
            <Text lineHeight="1.2" fontWeight="bold" fontSize="25px">
              Lesson
            </Text>
            <Text
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              textAlign="justify"
            >
              Material from lesson content.
            </Text>
            <Text lineHeight="1.2" fontWeight="bold" fontSize="22px">
              Introduction
            </Text>
            <Text
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              textAlign="justify"
            >
              Christianity and Hinduism are two of the world's major religions.
              While both religions share some similarities, there are also many
              differences between them. This article will discuss the main
              differences between Christianity and Hinduism.
            </Text>
            <Text lineHeight="1.2" fontWeight="bold" fontSize="22px">
              Beliefs
            </Text>{" "}
            */
            <Text
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              textAlign="justify"
            >
              One of the main differences between Christianity and Hinduism is
              the belief in one God. Christians believe in the Holy Trinity,
              which is one God in three persons: the Father, the Son, and the
              Holy Spirit. In contrast, Hinduism believes in multiple gods and
              goddesses. Hinduism believes that there are many paths to reach
              God, whereas Christianity believes that Jesus Christ is the only
              way to reach God.
            </Text>
            <Text lineHeight="1.2" fontWeight="bold" fontSize="22px">
              Lorem Ipsum
            </Text>
            <Text
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="16px"
              textAlign="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              viverra pretium est, maximus sollicitudin neque fringilla vel.
              Duis venenatis mattis neque pellentesque pulvinar. Sed laoreet
              lacus tellus, in finibus lorem lobortis vel. Integer vitae mi
              pharetra, faucibus lacus et, dapibus neque. Phasellus dolor
              mauris, vehicula consequat ullamcorper interdum, ornare finibus
              nisl. Nunc sit amet libero purus. Duis viverra ante sed sem
              sollicitudin, ac malesuada nulla gravida. Nam at tortor purus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Aenean dapibus est vehicula, interdum
              tellus nec, consectetur risus. Etiam non imperdiet metus.
              Vestibulum in magna vel massa posuere interdum et et tortor.
              Vivamus mollis libero ac interdum tempus. Maecenas condimentum
              nunc quis justo euismod condimentum. Quisque a auctor eros.
            </Text>
            <Stack
              width="100%"
              direction="row"
              justify="flex-end"
              align="flex-end"
            >
              <Link to={`/lesson-complete`} bg="#ed2e38">
                <Button
                  size="lg"
                  bg="#ed2e38"
                  textColor="#FFFFFF"
                  _hover={{ bg: "#7c191c" }}
                  height="48px"
                  fontSize="18px"
                  shadow="md"
                  id="lesson-complete"
                >
                  Complete Lesson
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Stack //right stack with video and 2 buttons
          direction="column"
        >
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
              src="https://www.youtube.com/embed/n5xYb4TOaYs"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Stack>

          <Stack //buttons stack
            height="130px"
            direction="row"
            justify="space-between"
            align="center"
            marginRight="20px"
            spacing={"100px"}
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Lesson;
