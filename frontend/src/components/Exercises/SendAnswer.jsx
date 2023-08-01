import axios from "axios";

// Function to call the answer_question API endpoint
const SendAnswer = async (lessonId, questionContent, answerContent) => {
  try {
    const response = await axios.post("/inactivity_checker/answer_question", {
      lesson_id: lessonId,
      question_content: questionContent,
      answer_content: answerContent,
    });
    console.log("API response:", response.data);
    // Handle the API response here as needed
  } catch (error) {
    console.error("API error:", error);
    // Handle the API error here as needed
  }
};
export default SendAnswer;
