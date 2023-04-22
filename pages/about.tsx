import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Box>
      <VStack spacing={6} alignItems="center">
        <Heading as="h1" size="2xl">
          About Rick and Morty API App
        </Heading>
        <Text fontSize="lg" textAlign="center">
          This is a sample application built using Next.js, TypeScript, React, Redux, Chakra UI, and the Rick and Morty API with GraphQL.
        </Text>
        <Text fontSize="lg" textAlign="center">
          The purpose of this application is to showcase how to integrate various technologies and libraries to create a modern, scalable, and maintainable web application.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
