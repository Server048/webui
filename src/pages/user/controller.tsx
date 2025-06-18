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
  value: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  onClick: (value: string) => void;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, value: 'home' },
  { name: 'Profile', icon: FiTrendingUp, value: 'profile' },
  { name: 'Connect', icon: FiCompass, value: 'connect' },
  { name: 'Controller', icon: FiSettings, value: 'controller' },
  { name: 'Settings', icon: FiSettings, value: 'settings' },
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
        <NavItem key={link.name} icon={link.icon} href={link.href}> {/* Meneruskan href ke NavItem */}
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, onClick, ...rest }: NavItemProps) => {
  return (
    <Box onClick={() => onClick(children)} _focus={{ boxShadow: 'none' }}>
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
  const Konten = {
    home: () => <Text>Ini adalah konten Beranda.</Text>,
    profile: () => <Text>Ini fungsi profil. Username: {user.username}</Text>,
    connect: () => <Text>Ini adalah konten Hubungkan.</Text>,
    controller: () => <Text>Ini adalah konten Pengontrol.</Text>,
    settings: () => <Text>Ini adalah konten Pengaturan.</Text>,
  };
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
        <Text>Bekerja Sekarang</Text> {/* Ditambahkan untuk debugging */}
      </Box>
    </Box>
  );
};

const HomePage: NextPageWithLayout = () => {
  return <SidebarWithHeader />;
};

HomePage.getLayout = (c) => <AppLayout>{c}</AppLayout>;
export default HomePage;
