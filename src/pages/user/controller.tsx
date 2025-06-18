import {
  Box,
  IconButton,
  CloseButton,
  Avatar,
  Flex,
  HStack,
  Drawer,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Skeleton,
  Icon, // Add this import
} from '@chakra-ui/react';
// ... rest of your imports and code

import { FiHome, FiTrendingUp, FiCompass, FiSettings, FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { avatarUrl } from '@/api/discord';
import { useSelfUserQuery } from '@/api/hooks';
import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';


interface LinkItemProps {
  name: string;
  icon: any;
  href: string;
}

const LinkItems: LinkItemProps[] = [
  { name: 'Beranda', icon: FiHome, href: '/home' },
  { name: 'Profil', icon: FiTrendingUp, href: '/profile' },
  { name: 'Hubungkan', icon: FiCompass, href: '/connect' },
  { name: 'Pengontrol', icon: FiSettings, href: '/controller' },
  { name: 'Pengaturan', icon: FiSettings, href: '/settings' },
];


const NavItem = ({ icon, children, href }: { icon: any; children: any; href: string }) => {
  const router = useRouter();
  return (
    <Box onClick={() => router.push(href)} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{ bg: 'cyan.400', color: 'white' }}
      >
        {icon && <Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} as={icon} />}
        {children}
      </Flex>
    </Box>
  );
};


const MobileNav = ({ onOpen }: { onOpen: () => void }) => {
  const { data: user, isLoading, error } = useSelfUserQuery();

  if (isLoading) return <Skeleton height="20px" />;
  if (error) return <Text color="red">Error: {error.message}</Text>;

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      h="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    >
      <IconButton display={{ base: 'flex', md: 'none' }} onClick={onOpen} variant="outline" aria-label="open menu" icon={<FiMenu />} />
      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        PENGATURAN BOT
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems="center">
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size="sm" src={avatarUrl(user)} />
                <Flex direction="column" display={{ base: 'none', md: 'flex' }} ml={2}>
                  <Text fontSize="sm">{user?.username ?? 'Tidak tersedia'}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user?.username === 'thedeviltime' ? 'Admin' : 'Free'}
                  </Text>
                </Flex>
                <FiChevronDown />
              </HStack>
            </MenuButton>
            <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profil</MenuItem>
              <MenuItem>Pengaturan</MenuItem>
              <MenuItem>Tagihan</MenuItem>
              <MenuDivider />
              <MenuItem>Keluar</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};


const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: user, isLoading, error } = useSelfUserQuery();

  if (isLoading) return <Skeleton height="100vh" />;
  if (error) return <Text color="red">Error: {error.message}</Text>;

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
    </Box>
  );
};

const SidebarContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          PENGATURAN BOT
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const HomePage: NextPageWithLayout = () => {
  return <SidebarWithHeader />;
};

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default HomePage;
