import { Container, Image, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Item from "../components/Item";

export default function App() {
  return (
    <Container height="100vh">
      <Stack spacing="4" width="100%" maxWidth="48rem" pt="8rem" px="1rem">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mb={4}
        >
          <Image
            borderRadius="full"
            boxSize={24}
            src="https://pbs.twimg.com/profile_images/1101627799427641344/cEc8VErd_400x400.png"
            alt="Segun Adebayo"
          />
          <Heading size="md" mt={2} fontWeight="medium">
            @snesjhon
          </Heading>
        </Flex>
        <Item title="Personal Website" />
        <Item title="Portfolio" />
        <Item title="2021 Playlist" />
        <Item title="2020 Playlist" />
      </Stack>
    </Container>
  );
}
