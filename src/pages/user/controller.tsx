// pages/controller.tsx
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
import { useRouter } from 'next/router';


const ControllerPage: React.FC = () => {
  const router = useRouter();
  const bg = useColorModeValue('#252933', '#252933');
  const textColor = useColorModeValue('white', 'white');

  const handleRouteChange = (path: string) => {
    router.push(path);
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} minH="100vh">
      <Flex direction="row">
        {/* Sidebar */}
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
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              GrowTree - PS
            </Text>
          </Flex>
          <List spacing={4}>
            <Button
              variant="solid"
              colorScheme="purple"
              leftIcon={<HomeIcon />}
              color={textColor}
              onClick={() => handleRouteChange('/dashboard')}
            >
              Dashboard
            </Button>
            <Button variant="ghost" leftIcon={<ChevronRightIcon />} color={textColor} onClick={() => handleRouteChange('/commands')}>
              Perintah Bot
            </Button>
            <Button variant="ghost" leftIcon={<DocumentIcon />} color={textColor} onClick={() => handleRouteChange('/botlogs')}>
              Log Bot
            </Button>
            {/* ... Tambahkan item menu lainnya ... */}
            <Button variant="outline" colorScheme="red" rightIcon={<ArrowRightIcon />} color={textColor} onClick={() => handleRouteChange('/logout')}>
              Keluar
            </Button>
          </List>
        </Box>

        {/* Content utama */}
        <Box flex="1" ml={{ base: 0, md: '200px' }}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Halaman Controller</Text>
          <Text>
            Ini adalah konten utama halaman controller. Anda dapat menambahkan lebih banyak konten di sini.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ControllerPage;
