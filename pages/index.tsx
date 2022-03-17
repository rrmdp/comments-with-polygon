import type { NextPage } from "next";
import * as React from "react";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { ChakraProvider, Box, Heading, Center,Text } from "@chakra-ui/react";
import { Toaster, toast } from "react-hot-toast";
import theme from "../theme";
import { Provider as WagmiProvider } from "wagmi";
import { provider, providers } from "ethers";
import Comments from "../components/Comments";

const provider = providers.getDefaultProvider(
  "https://rpc-mumbai.maticvigil.com"
);

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      toast.error(
        "Network Error: Ensure Metamask is connected to the same network that your contract is deployed to."
      );
    },
  }),
});



const App: NextPage = () => {
  return (
    <WagmiProvider autoConnect provider={provider}>
      <ChakraProvider theme={theme}>
      <Center>
        <Heading >
            <Text
            bgGradient='linear-gradient(to-l,#77c655 30%,#147eac 60%)'
            bgClip='text'
            fontSize='5xl'
            fontWeight='extrabold'>Direct Bookings Forum
            </Text>
        </Heading>
      </Center>
        <QueryClientProvider client={queryClient}>
          <Box p={8} maxW="600px" minW="320px" m="0 auto">            
            <Comments topic="my-blog-post" />
            <Toaster position="bottom-right" />
          </Box>
        </QueryClientProvider>
      </ChakraProvider>
    </WagmiProvider>
  );
};

export default App;
