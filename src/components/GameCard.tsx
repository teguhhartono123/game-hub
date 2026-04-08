import type { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root >
        <Image src={game.background_image}/>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformiconList platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard