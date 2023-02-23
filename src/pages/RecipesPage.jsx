import { Box, Heading } from '@chakra-ui/react';
import { RecipeButton } from '../components/RecipeButtons';
import { data } from '../utils/data';

const recipes = data;
console.log(recipes);

export const RecipesPage = () => {
  const greeting = 'Winc Recipe Checker';
  return (
    <Box h='auto' w='100vw' flexDir='column'>
      <Heading textAlign='center' mb='20px'>
        {greeting}
      </Heading>
      <RecipeButton />
    </Box>
  );
};
