import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />} width="100%">
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games ..."
        //   variant="subtle"
        //   bg="gray.700"
        //   color="white"
        //   _placeholder={{ color: "gray.300" }}
        //   _focus={{
        //     bg: "gray.500",
        //     borderColor: "gray.400",
        //   }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
