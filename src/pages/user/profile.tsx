import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

// Definisi tema dengan warna Brand
const theme = extendTheme({
  colors: {
    Brand: {
      50: '#f0f0f0',
      100: '#d0d0d0',
      200: '#b0b0b0',
      300: '#909090',
      400: '#707070',
      500: '#505050',
      600: '#303030',
      700: '#101010',
      800: '#000000',
      900: '#000000',
    },
  },
});


const MyComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('Brand.50', 'Brand.700'); // Warna latar belakang bergantung pada mode

  return (
    <Box p={4}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <Box
        mt={4}
        bg={bgColor}
        rounded="2xl"
        sx={{ aspectRatio: '1100/440' }}
        boxShadow="md" // Tambahkan bayangan untuk visual yang lebih baik.
        p={6} // Tambahkan padding agar konten tidak terlalu menempel ke tepi.
      >
        <Text fontSize="xl" fontWeight="bold">
          Ini adalah contoh kotak dengan latar belakang warna Brand.
        </Text>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <MyComponent />
    </ChakraProvider>
  );
};

export default App;

