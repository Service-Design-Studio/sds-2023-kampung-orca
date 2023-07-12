import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Routes from "./routes";

export default function App() {
  return (
    <ChakraProvider>
      <>{Routes}</>
    </ChakraProvider>
  );
}
