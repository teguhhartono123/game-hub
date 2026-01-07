import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" objectFit="contain" p={0.1} m={0.1}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
