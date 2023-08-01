import React from "react";
import { Text } from "@chakra-ui/react";

const ExerciseSection = ({ title, content, headerSize, contentSize }) => {
  return (
    <>
      {title && (
        <Text lineHeight="1.2" fontWeight="bold" fontSize={headerSize}>
          {title}
        </Text>
      )}
      {content.map((segment, index) => (
        <Text
          key={index}
          lineHeight="1.33"
          fontWeight="regular"
          fontSize={contentSize}
          textAlign="justify"
        >
          {segment}
        </Text>
      ))}
    </>
  );
};

export default ExerciseSection;
