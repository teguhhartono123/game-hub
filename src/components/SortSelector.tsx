import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline"><BsChevronDown />
            Order by: Relevance
          </Button>
        </Menu.Trigger>
  
        <Portal>
        <Menu.Positioner>
        <Menu.Content>
            <MenuItem value={''}>Relevance</MenuItem>
            <MenuItem value={''}>Date added</MenuItem>
            <MenuItem value={''}>Name</MenuItem>
            <MenuItem value={''}>Release date</MenuItem>
            <MenuItem value={''}>Popularity</MenuItem>
            <MenuItem value={''}>Average rating</MenuItem>
        </Menu.Content>
        </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}

export default SortSelector