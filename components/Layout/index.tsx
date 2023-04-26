import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Rick and Morty App` : "Rick and Morty App"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        minHeight="100vh"
        backgroundImage="url('https://wallpaperaccess.com/full/85334.jpg')"
        backgroundPosition="0 -400px"
        backgroundColor="black"
        backgroundRepeat="no-repeat"
      >
        <Container maxW="container.xl" py={10}>
          <Heading
            as="h1"
            size="4xl"
            textAlign="center"
            mb={10}
            color="white"
            mt={"7.5%"}
          >
            {title || "Rick and Morty App"}
          </Heading>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Layout;
