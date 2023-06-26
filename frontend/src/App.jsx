import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Routes from "./routes";

export default function App(props) {
  return (
    <ChakraProvider>
      <>{Routes}</>
    </ChakraProvider>
  );
}
