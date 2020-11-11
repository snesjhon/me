import {
  Image,
  Box,
  Button,
  Flex,
  Heading,
  Grid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/core";
import React from "react";
// import avatar from "images/avatar.jpg";

function About(): JSX.Element {
  return (
    <Box px={{ base: 5, sm: 10, lg: 20 }}>
      <Box display={{ md: "flex" }} justifyContent="space-between" py={20}>
        <Box maxW={{ md: "40%" }} mr={10}>
          <Box
            position="relative"
            _before={{
              content: "''",
              position: "absolute",
              top: "-5%",
              right: "-10%",
              width: "100%",
              height: "110%",
              border: "2px solid black",
              borderRadius: "5px",
              zIndex: "-1",
            }}
          >
            <Image
              src="/images/avatar.jpg"
              border="1px solid"
              borderColor="gray.300"
              css={{ filter: "grayscale(1)" }}
            />
          </Box>
        </Box>
        <Box pt={20} pl={{ base: 6, sm: 10, md: 0 }}>
          <Box pb={10}>
            <Heading size="xl" mb={4}>
              Software Engineer
            </Heading>
            <Heading
              position="relative"
              size="xl"
              _before={{ content: "'+'", position: "absolute", left: "-2rem" }}
            >
              Music Enthusiast
            </Heading>
          </Box>
          <Text>A forever student I have a strong</Text>
          <Text>A forever student I have a strong</Text>
          <Text pb={10}>A forever student I have a strong</Text>
          <Button bg="cyan.700" color="white">
            Get in touch
          </Button>
        </Box>
      </Box>
      <Flex px={10} justifyContent="space-between">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Technologies
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Languages
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
