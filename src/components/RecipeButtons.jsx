import { Box, Container, Flex, Heading } from '@chakra-ui/react';

export const RecipeButton = () => {
  return (
    <Container m='1rem auto'>
      <Heading size='md' textAlign='center'>
        Check out how healthy your recipe is!
      </Heading>
      <Flex
        m='20'
        w='100vw'
        direction='row'
        wrap='wrap'
        gap='20px'
        alignItems='center'
        justifyContent='start'
      >
        <Box
          as='button'
          height='24px'
          lineHeight='1.2'
          border='1px'
          px='8px'
          borderRadius='2px'
          fontSize='14px'
          backgroundColor='orange.400'
        >
          Coffee
        </Box>
        <Box
          as='button'
          height='24px'
          lineHeight='1.2'
          border='1px'
          px='8px'
          borderRadius='2px'
          fontSize='14px'
          backgroundColor='orange.400'
        >
          Tea
        </Box>
      </Flex>
    </Container>
  );
};
