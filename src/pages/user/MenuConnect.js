import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
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


const MenuConnect: React.FC = () => {
  const bg = useColorModeValue('#252933', '#252933'); // Warna latar belakang sidebar
  const textColor = useColorModeValue('white', 'white'); // Warna teks

  return (
    <Box
      w="200px"
      bg={bg}
      boxShadow="md"
      rounded="md"
      p={4}
      display={{ base: 'none', md: 'block' }}
      position="fixed"
      height="100vh"
      overflowY="auto"
    >
      <Flex mb={4} align="center">
        <Box mr={2} w="40px" h="40px" rounded="full" bg="gray.300" /> {/* Ganti dengan avatar */}
        <Text fontWeight="bold" fontSize="lg" color={textColor}>GrowTree - PS</Text>
      </Flex>
      <List spacing={4}>
        <Button variant="solid" colorScheme="purple" leftIcon={<HomeIcon />} color={textColor}>
          Dashboard
        </Button>
        <HStack>
          <Icon as={ChevronRightIcon} />
          <Text color={textColor}>Perintah Bot</Text>
        </HStack>
        <HStack>
          <Icon as={DocumentIcon} />
          <Text color={textColor}>Log Bot</Text>
        </HStack>
        <HStack>
          <Icon as={RepeatIcon} />
          <Text color={textColor}>Log Pengguna</Text>
        </HStack>
        <HStack>
          <Icon as={RocketIcon} />
          <Text color={textColor}>Uji Bot</Text>
        </HStack>
        <HStack>
          <Icon as={DownloadIcon} />
          <Text color={textColor}>Ekspor Bot</Text>
        </HStack>
        <HStack>
          <Icon as={SettingsIcon} />
          <Text color={textColor}>Pengaturan</Text>
        </HStack>
        <Button variant="outline" colorScheme="red" rightIcon={<ArrowRightIcon />} color={textColor}>
          Keluar
        </Button>
      </List>
    </Box>
  );
};

export default MenuConnect;
