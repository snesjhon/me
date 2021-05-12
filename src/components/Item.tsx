import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import IconSpotify from "./Icons/IconSpotify";

interface Props {
  title: string;
}
export default function Item({ title }: Props) {
  return (
    <Link
      bg="white"
      border="1px solid white"
      color="black"
      _hover={{
        backgroundColor: "transparent",
        border: "1px solid white",
        color: "white",
      }}
      transition="all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s"
      borderRadius="md"
      position="relative"
      href="google.com"
      isExternal
    >
      <Box
        as="span"
        position="absolute"
        left="2%"
        top="50%"
        transform="translateY(-50%)"
      >
        <IconSpotify boxSize="8" />
      </Box>
      <Text px="5" py="3" textAlign="center" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}
