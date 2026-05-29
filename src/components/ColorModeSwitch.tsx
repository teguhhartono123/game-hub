import { HStack, Text} from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode';
import { Switch } from './ui/switch';

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode}= useColorMode();

  return (
    <HStack>
        <Switch colorPalette='green' checked={colorMode === 'dark'} onChange={toggleColorMode}
        size="md"/>
        <Text
        fontSize="14px"
        fontWeight="500"
        userSelect="none"
        >Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch