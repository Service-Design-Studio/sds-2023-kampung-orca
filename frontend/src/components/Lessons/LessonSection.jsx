import React from "react";
import { Text } from "@chakra-ui/react";

const LessonSection = ({ title, content }) => {
  return (
    <>
      {title && (
        <Text lineHeight="1.2" fontWeight="bold" fontSize="22px">
          {title}
        </Text>
      )}
      {content.map((segment, index) => (
        <Text
          key={index}
          lineHeight="1.33"
          fontWeight="regular"
          fontSize="16px"
          textAlign="justify"
        >
          {segment}
        </Text>
      ))}
    </>
  );
};

export default LessonSection;
