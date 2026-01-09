import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
        <Skeleton width={'300px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton