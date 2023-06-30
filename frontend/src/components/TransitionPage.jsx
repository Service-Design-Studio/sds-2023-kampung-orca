//page transition code that does not work.

import { ChakraProvider, ScaleFade } from "@chakra-ui/react";

export default function TransitPage({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <ScaleFade key={router.route} initialScale={0.9} in="true">
        <Component {...pageProps} />
      </ScaleFade>
    </ChakraProvider>
  );
}
