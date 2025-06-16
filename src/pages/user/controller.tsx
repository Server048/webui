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
  Stack,
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
import { useState } from 'react';

interface ItemMenuProps {
  nama: string;
  ikon: IconType;
  konten: React.ReactNode;
}

interface ItemNavItemProps extends FlexProps {
  ikon: IconType;
  nama: React.ReactNode;
  onClick: (konten: React.ReactNode) => void;
}

interface MobileProps extends FlexProps {
  bukaDrawer: () => void;
}

interface SidebarProps extends BoxProps {
  tutupDrawer: () => void;
  aturKontenAktif: (konten: React.ReactNode) => void;
}

const itemMenus: Array<ItemMenuProps> = [
  { nama: 'Beranda', ikon: FiHome, konten: <KontenBeranda /> },
  { nama: 'Profil', ikon: FiTrendingUp, konten: <KontenProfil /> },
  { nama: 'Hubungkan', ikon: FiCompass, konten: <KontenHubungkan /> },
  { nama: 'Pengontrol', ikon: FiSettings, konten: <KontenPengontrol /> },
  { nama: 'Pengaturan', ikon: FiSettings, konten: <KontenPengaturan /> },
];

const SidebarKonten = ({ tutupDrawer, aturKontenAktif, ...rest }: SidebarProps) => {
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
          PENGONTROL BOT CPS
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={tutupDrawer} />
      </Flex>
      {itemMenus.map((item) => (
        <ItemNavItem
          key={item.nama}
          ikon={item.ikon}
          nama={item.nama}
          onClick={() => aturKontenAktif(item.konten)}
        />
      ))}
    </Box>
  );
};

const ItemNavItem = ({ ikon, nama, onClick, ...rest }: ItemNavItemProps) => {
  return (
    <Box as="button" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} onClick={onClick}>
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
        {ikon && <Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} as={ikon} />}
        {nama}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ bukaDrawer, ...rest }: MobileProps) => {
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
        onClick={bukaDrawer}
        variant="outline"
        aria-label="buka menu"
        icon={<FiMenu />}
      />
      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        PENGONTROL BOT CPS
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="buka menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'} src={avatarUrl(user)} />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">{user.username}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.username === 'thedeviltime' ? 'Admin' : 'Free'}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
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

const SidebarDenganHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [kontenAktif, setKontenAktif] = useState(itemMenus[0].konten);

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarKonten tutupDrawer={onClose} aturKontenAktif={setKontenAktif} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarKonten tutupDrawer={onClose} aturKontenAktif={setKontenAktif} />
        </DrawerContent>
      </Drawer>
      <MobileNav bukaDrawer={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Stack>{kontenAktif}</Stack>
      </Box>
    </Box>
  );
};

const HomePage: NextPageWithLayout = () => {
  return <SidebarDenganHeader />;
};

HomePage.getLayout = (c) => <AppLayout>{c}</AppLayout>;
export default HomePage;

const KontenBeranda = () => <Text>Ini adalah konten Beranda.</Text>;
const KontenProfil = () => <Text>Ini fungsi profil.</Text>;
const KontenHubungkan = () => <Text>Ini adalah konten Hubungkan.</Text>;
const KontenPengontrol = () => <Text>Ini adalah konten Pengontrol.</Text>;
const KontenPengaturan = () => <Text>Ini adalah konten Pengaturan.</Text>;
