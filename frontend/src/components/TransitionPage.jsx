import React from "react";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";

function TransitPage({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <ScaleFade key={router.route} initialScale={0.9} in="true">
        <Component {...pageProps} />
      </ScaleFade>
    </ChakraProvider>
  );
}
export default TransitPage;
