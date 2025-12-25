import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        objectFit="contain"
        p={1} // Adds "breathable" space inside the image bounds
        m={1} // Adds space outside the image bounds
      />

      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
