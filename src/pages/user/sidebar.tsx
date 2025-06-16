import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { HomeIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box
      w="200px"
      bg={bg}
      boxShadow="md"
      rounded="md"
      p={4}
      display={{ base: 'none', md: 'block' }}
    >
      <Flex mb={4} align="center">
        <Box mr={2} w="40px" h="40px" rounded="full" bg="gray.300" />
        <Text fontWeight="bold" fontSize="lg">GrowTree - PS</Text>
      </Flex>
      <Button variant="solid" colorScheme="purple" leftIcon={<HomeIcon />}>
        Dashboard
      </Button>
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider>
      <Sidebar />
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

