// components/MenuConnect.tsx
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

interface MenuItemProps {
    label: string;
    icon: React.ReactNode;
    onClick?: () => void; // Tambahkan fungsi onClick opsional
}

const MenuConnect: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const bg = useColorModeValue('#252933', '#252933');
    const textColor = useColorModeValue('white', 'white');

    const menuItems: MenuItemProps[] = [
        { label: 'Dashboard', icon: <HomeIcon />, onClick: () => console.log('Dashboard clicked') },
        { label: 'Perintah Bot', icon: <ChevronRightIcon />, onClick: () => console.log('Perintah Bot clicked') },
        { label: 'Log Bot', icon: <DocumentIcon />, onClick: () => console.log('Log Bot clicked') },
        { label: 'Log Pengguna', icon: <RepeatIcon />, onClick: () => console.log('Log Pengguna clicked') },
        { label: 'Uji Bot', icon: <RocketIcon />, onClick: () => console.log('Uji Bot clicked') },
        { label: 'Ekspor Bot', icon: <DownloadIcon />, onClick: () => console.log('Ekspor Bot clicked') },
        { label: 'Pengaturan', icon: <SettingsIcon />, onClick: () => console.log('Pengaturan clicked') },
        { label: 'Keluar', icon: <ArrowRightIcon />, onClick: onClose },
    ];

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
                <Box mr={2} w="40px" h="40px" rounded="full" bg="gray.300" />
                <Text fontWeight="bold" fontSize="lg" color={textColor}>GrowTree - PS</Text>
            </Flex>
            <List spacing={4}>
                {menuItems.map((item) => (
                    <Button key={item.label} variant="ghost" leftIcon={item.icon} onClick={item.onClick} color={textColor} >
                        {item.label}
                    </Button>
                ))}
            </List>
        </Box>
    );
};

export default MenuConnect;

