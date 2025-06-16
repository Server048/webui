import {
  Heading,
  Box,
  Button,
  IconButton,
  CloseButton,
  Image,
  Card,
  Icon,
  useBreakpointValue,
  List,
  HStack,
  Drawer,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  DrawerContent,
  useDisclosure,
  BoxProps,
  useColorModeValue,
  VStack,
  ListItem,
  ListIcon,
  CardHeader,
  Avatar,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { avatarUrl, bannerUrl } from '@/api/discord';
import { config } from '@/config/common';
import { useGuilds } from '@/api/hooks';
import { useSelfUser } from '@/api/hooks';
import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';
import { iconUrl } from '@/api/discord';
import Link from 'next/link';
import { useState } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
  content: React.ReactNode; // Menambahkan properti content
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  href?: string; // Menambahkan properti href
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, content: <HomeContent /> },
  { name: 'Profile', icon: FiTrendingUp, content: <ProfileContent /> },
  { name: 'Connect', icon: FiCompass, content: <ConnectContent /> },
  { name: 'Controller', icon: FiSettings, content: <ControllerContent /> },
  { name: 'Settings', icon: FiSettings, content: <SettingsContent /> },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          BOT CONTROLLER CPS
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={() => setActiveContent(link.content)}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => { // Menambahkan href
  return (
     <Box as="a" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{ bg: 'cyan.400', color: 'white' }}
          {...rest}
        >
          {icon && (
            <Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} as={icon} />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const user = useSelfUser();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        BOT CONTROLLER CPS
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={avatarUrl(user)}
                />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">
                    {user.username}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.username === "thedeviltime" ? "Admin" : "Free"}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState(LinkItems[0].content); // State untuk konten aktif
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Konten */}
        <Stack>{activeContent}</Stack>
        <Text>Bekerja Sekarang</Text> {/* Ditambahkan untuk debugging */}
      </Box>
    </Box>
  );
};


const HomeContent = () => <Text>Ini adalah konten Home.</Text>;
const ProfileContent = () => <Text>Ini fungsi profile.</Text>;
const ConnectContent = () => <Text>Ini adalah konten Connect.</Text>;
const ControllerContent = () => <Text>Ini adalah konten Controller.</Text>;
const SettingsContent = () => <Text>Ini adalah konten Settings.</Text>;

const HomePage: NextPageWithLayout = () => {
  return <SidebarWithHeader />;
};

HomePage.getLayout = (c) => <AppLayout>{c}</AppLayout>;
export default HomePage;


