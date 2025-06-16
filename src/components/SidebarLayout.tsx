// components/SidebarLayout.tsx
import { Box, useColorModeValue, Flex, useDisclosure } from '@chakra-ui/react';
import { SidebarTrigger } from './SidebarTrigger';
import MenuConnect from './MenuConnect';
import { usePageStore } from '@/stores';


const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Gunakan useDisclosure
  const setSidebarIsOpen = usePageStore((state) => state.setSidebarIsOpen); // Simpan nilai isOpen
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={bg} minH="100vh">
      <Flex direction="row">
        {/* Sidebar (ditampilkan secara kondisional) */}
        <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} > {/* Gunakan isOpen */}
          <MenuConnect onClose={onClose} />
        </Box>

        {/* Content utama */}
        <Box flex="1" ml={{ base: isOpen ? '200px' : 0, md: '200px' }}> {/* Gunakan isOpen */}
          {/* Tombol untuk membuka sidebar pada layar kecil */}
          <SidebarTrigger onOpen={onOpen} />
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default SidebarLayout;
