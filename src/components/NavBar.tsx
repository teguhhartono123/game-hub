import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import AboutModal from "./AboutModal";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" objectFit="contain" p={0.1} m={0.1}/>
      <SearchInput onSearch={onSearch}/>
      <AboutModal />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;