import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  HomeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentIcon,
  RepeatIcon,
  RocketIcon,
  DownloadIcon,
  SettingsIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';

const Sidebar = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const color = useColorModeValue('gray.700', 'gray.200');

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
      <Stack spacing={4}>
        <Button variant="solid" colorScheme="purple" leftIcon={<HomeIcon />}>
          Dashboard
        </Button>
        <Button leftIcon={<ChevronRightIcon />}>Perintah Bot</Button>
        <Button leftIcon={<DocumentIcon />}>Log Bot</Button>
        <Button leftIcon={<RepeatIcon />}>Log Pengguna</Button>
        <Button leftIcon={<RocketIcon />}>Uji Bot</Button>
        <Button leftIcon={<DownloadIcon />}>Ekspor Bot</Button>
        <Button leftIcon={<SettingsIcon />}>Pengaturan</Button>
        <Button variant="outline" colorScheme="red" rightIcon={<ArrowRightIcon />}>
          Keluar
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
