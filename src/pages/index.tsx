import {
  Container,
  Image,
  Flex,
  Heading,
  Stack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import React from "react";
import IconGithub from "../components/Icons/IconGithub";
import IconInstagram from "../components/Icons/IconInstagram";
import IconTwitter from "../components/Icons/IconTwitter";
import Item from "../components/Item";

export default function App() {
  return (
    <Container height="100vh">
      <Stack
        spacing="4"
        width="100%"
        maxWidth="48rem"
        pt={{ base: 10, sm: 24 }}
        px="1rem"
      >
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
            alt="@snesjhon"
          />
          <Heading size="md" mt={2} fontWeight="medium" color="white">
            @snesjhon
          </Heading>
        </Flex>
        <Item
          title="Personal Website"
          type="link"
          href="https://snesjhon.com"
        />
        <Item
          title="Portfolio"
          type="link"
          href="https://snesjhon.com/#portfolio"
        />
        <Item
          title="2021 Playlist"
          type="spotify"
          href="https://open.spotify.com/playlist/1TqH93AHXOB5kR9aesAbRZ?si=094f7b54c1b84b4c"
        />
        <Item
          title="2020 Playlist"
          type="spotify"
          href="https://open.spotify.com/playlist/2d5ytiXbOVJhW49xkDkvbF?si=034b7f9c26a94749"
        />
        <Item
          title="2019 Playlist"
          type="spotify"
          href="https://open.spotify.com/playlist/3kVC8S3934b6JjpG2fJIbZ?si=dfc918d07f434e93"
        />
        <Item
          title="2018 Playlist"
          type="spotify"
          href="https://open.spotify.com/playlist/66D0sjQME7XzhhT6ocz9J7?si=2952955bf2e34772"
        />
        <Flex justifyContent="center" pt={4} px={20}>
          <IconButton
            as={Link}
            isExternal
            href="https://www.instagram.com/snesjhon/"
            aria-label="Instagram"
            icon={<IconInstagram />}
          />
          <IconButton
            as={Link}
            isExternal
            href="https://twitter.com/snesjhon"
            aria-label="Twitter"
            icon={<IconTwitter />}
            mx={6}
          />
          <IconButton
            as={Link}
            isExternal
            href="https://github.com/snesjhon"
            aria-label="Github"
            icon={<IconGithub />}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
