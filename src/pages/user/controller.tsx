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
import { config } from '@/config/common';
import { useGuilds } from '@/api/hooks';

import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';
import { iconUrl } from '@/api/discord';
import Link from 'next/link';

const HomePage: NextPageWithLayout = () => {
  

  return <Controller />;
};

export function Controller() {
  


  

  return <></>;
}

HomePage.getLayout = (c) => <AppLayout>{c}</AppLayout>;
export default HomePage;
