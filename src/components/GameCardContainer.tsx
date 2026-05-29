import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Props{
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => { //children
  return (
    <Box borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer