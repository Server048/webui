import {
  Heading,
  Box,
  Button,
  IconButton,
  Image,
  Card,
  CardHeader,
  Avatar,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
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
