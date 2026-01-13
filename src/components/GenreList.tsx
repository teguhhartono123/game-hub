import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onselectGenre: (genre: Genre) => void
}      

const GenreList = ({onselectGenre} : Props) => {
  const { data, isLoading,error } = useGenres();

 if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root listStyle={'none'}>
      {data.map((genre) => (
        <List.Item listStyle={'none'} key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onselectGenre(genre)} fontSize='lg' variant='ghost'>{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
