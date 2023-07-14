// CreatePost.jsx
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function CreatePost({ valueTitle, valueContent }) {
  useEffect(() => {
    const createPost = async () => {
      const cookieValue = Cookies.get("token");

      try {
        const response = await axios.post(
          "http://localhost:3001/lessons/1/posts",
          {
            token: cookieValue,
            post: { title: valueTitle, content: valueContent },
          }
        );
        console.log(response);
      } catch (error) {
        console.log("Error occurred:", error);
      }
    };

    if (valueTitle && valueContent) {
      createPost();
    }
  }, [valueTitle, valueContent]);

  return null;
}

export default CreatePost;
