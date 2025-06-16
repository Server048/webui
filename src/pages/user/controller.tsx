import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';
import { Box, Button, Flex, List, ListItem, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import { iconUrl } from '@/api/discord';
import HomeView from '@/config/example/HomeView';
import { config } from '@/config/common';
import { useGuilds } from '@/api/hooks';
import { HomeIcon, SettingsIcon, RocketIcon, DocumentIcon, LogoutIcon, SimpleGrid } from '@chakra-ui/icons';


const PanelKontrol: NextPageWithLayout = () => {
  return <HomeView />;

  return <controller />;
};
export function controller() {
  const guilds = useGuilds();
    
  if (guilds.status === 'loading')
    return (
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
      </SimpleGrid>
    );
  return <></>;
}


PanelKontrol.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default PanelKontrol;
