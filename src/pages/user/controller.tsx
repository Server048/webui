import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Flex,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';






const HomePage: NextPageWithLayout = () => {
  interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode; // Optional icon
  }
  const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/', icon: <HomeIcon /> },
  { label: 'Perintah Bot', path: '/perintah', icon: <ArrowForwardIcon /> },
  { label: 'Log Bot', path: '/logbot', icon: <DocumentIcon /> },
  { label: 'Log Pengguna', path: '/logpengguna', icon: <PeopleIcon /> },
  { label: 'Uji Bot', path: '/ujibot', icon: <RocketIcon /> },
  { label: 'Ekspor Bot', path: '/ekspor', icon: <DownloadIcon /> },
  { label: 'Pengaturan', path: '/pengaturan', icon: <SettingsIcon /> },
  { label: 'Keluar', path: '/keluar', icon: <ExitIcon /> },
];
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('/');


  return (
    <>
      <IconButton
        aria-label="Open sidebar"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        mr={4}
      />

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            <Flex alignItems="center">
              <Avatar size="md" src="/your-profile-image.jpg" mr={4} />
              <Text fontWeight="bold">GrowTree - PS</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
                {menuItems.map((item) => (
                    <Button
                        key={item.label}
                        leftIcon={item.icon}
                        variant="ghost"
                        colorScheme="purple"
                        onClick={() => setSelectedMenuItem(item.path)}
                        // Add active styling
                        bg={selectedMenuItem === item.path ? 'purple.500' : 'transparent'}
                        color={selectedMenuItem === item.path ? 'white' : 'white'}
                    >
                        {item.label}
                    </Button>
                ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px" borderColor="gray.700"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
        };

HomePage.getLayout = (c) => <AppLayout>{c}</AppLayout>;
export default Sidebar;

