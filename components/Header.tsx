import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Menu from "./Menu";

export default function Header(): JSX.Element {
  const headerSize = useBreakpointValue({ base: "2xl", xs: "4xl" });

  return (
    <Box px={{ base: 5, sm: 10, lg: 10 }}>
      <Box
        display={{ md: "flex" }}
        pb={5}
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Heading size={headerSize} whiteSpace="nowrap">
          Jhon Paredes
        </Heading>
        <Menu />
      </Box>
    </Box>
  );
}
