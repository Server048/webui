import { Box, Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import {
  HomeIcon,
  ChevronRightIcon,
  DocumentIcon,
  RepeatIcon,
  RocketIcon,
  DownloadIcon,
  SettingsIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const bg = useColorModeValue('gray.800', 'gray.700');
  const color = useColorModeValue('white', 'gray.200');

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
        <Text fontWeight="bold" fontSize="lg" color={color}>
          GrowTree - PS
        </Text>
        <Text fontSize="sm" color={color}>Kelola bot Discord Anda</Text>
      </Flex>
      <Stack spacing={4}>
        <Button variant="solid" colorScheme="purple" leftIcon={<HomeIcon />} color={color}>
          Dashboard
        </Button>
        <Button leftIcon={<ChevronRightIcon />} color={color}>Perintah Bot</Button>
        <Button leftIcon={<DocumentIcon />} color={color}>Log Bot</Button>
        <Button leftIcon={<RepeatIcon />} color={color}>Log Pengguna</Button>
        <Button leftIcon={<RocketIcon />} color={color}>Uji Bot</Button>
        <Button leftIcon={<DownloadIcon />} color={color}>Ekspor Bot</Button>
        <Button leftIcon={<SettingsIcon />} color={color}>Pengaturan</Button>
        <Button variant="outline" colorScheme="red" rightIcon={<ArrowRightIcon />} color={color}>
          Keluar
        </Button>
      </Stack>
    </Box>
  );
};

const Controller: React.FC = () => {
  return (
    <Flex>
      <Sidebar />
      <Box ml={4} p={4} /> {/* Ruang kosong untuk konten utama */}
    </Flex>
  );
};

export default Controller;
