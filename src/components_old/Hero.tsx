import { Flex, Heading, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      // height="100vh"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      <Image
        borderRadius="full"
        boxSize={24}
        src="https://pbs.twimg.com/profile_images/1101627799427641344/cEc8VErd_400x400.png"
        alt="Segun Adebayo"
      />
      <Heading fontSize="6vw">snesjhon</Heading>
    </Flex>
  );
}
