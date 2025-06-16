import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  List,
  ListItem,
  ListIcon,
  Text,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  HomeIcon,
  SettingsIcon,
  RocketIcon,
  FileIcon,
  DownloadIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Box
      pos={isOpen ? 'fixed' : 'hidden'}
      top="0"
      left="0"
      zIndex="overlay"
      bg="gray.800"
      w="250px"
      h="100vh"
      overflowY="auto"
      transition="transform 0.3s ease-in-out"
      transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
    >
      <Flex p={4} alignItems="center">
        <Image src="/profile_image.jpg" alt="Profile Picture" boxSize="50px" borderRadius="full" mr={4} />
        <Heading as="h2" size="md" color="white">GrowTree - PS</Heading>
      </Flex>
      <Box p={4}>
        <Text color="white">Kelola bot Discord Anda</Text>
      </Box>
      <List spacing={4} mt={4} p={4}>
        <ListItem>
          <Button leftIcon={<HomeIcon />} variant="ghost" colorScheme="blue" w="full" onClick={onClose}>
            Dashboard
          </Button>
        </ListItem>
        <ListItem>
          <Button leftIcon={<RepeatIcon />} variant="ghost" colorScheme="teal" w="full" onClick={onClose}>
            Perintah Bot
          </Button>
        </ListItem>
        <ListItem>
          <Button leftIcon={<FileIcon />} variant="ghost" colorScheme="orange" w="full" onClick={onClose}>
            Log Bot
          </Button>
        </ListItem>
        <ListItem>
          <Button leftIcon={<FileIcon />} variant="ghost" colorScheme="purple" w="full" onClick={onClose}>
            Log Pengguna
          </Button>
        </ListItem>
        <ListItem>
          <Button leftIcon={<RocketIcon />} variant="ghost" colorScheme="green" w="full" onClick={onClose}>
            Uji Bot
          </Button>
        </ListItem>
        <ListItem>
          <Button leftIcon={<DownloadIcon />} variant="ghost" colorScheme="yellow" w="full" onClick={onClose}>
            Ekspor Bot
          </Button>
        </ListItem>
        <ListItem>
          <Button leftIcon={<SettingsIcon />} variant="ghost" colorScheme="red" w="full" onClick={onClose}>
            Pengaturan
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="ghost" colorScheme="gray" w="full" onClick={onClose}>Keluar</Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
