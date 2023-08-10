import axios from "axios";
import Cookies from "js-cookie";

// Function to call the answer_question API endpoint
const SendAnswer = async (lessonId, answerContent, callback) => {
  const cookieValue = Cookies.get("token");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_GATEWAY_URL}/curriculum/entries`,
      {
        lesson_id: lessonId,
        user_answer: answerContent,
        token: cookieValue,
      }
    );
    callback(response.data);
    console.log("API response:", response.data);
    // Handle the API response here as needed
    console.log(
      "Get answers:",
      response.data.data.user_answer,
      response.data.data.ml_answer
    );
  } catch (error) {
    console.error("API error:", error);
    // Handle the API error here as needed
  }
};
export default SendAnswer;
