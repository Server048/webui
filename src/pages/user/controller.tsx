import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';
import { Box, Button, Flex, List, ListItem, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import { iconUrl } from '@/api/discord';
import HomeView from '@/config/example/HomeView';
import { config } from '@/config/common';
import { useGuilds } from '@/api/hooks';
import {
  Heading,
  Button,
  Card,
  CardHeader,
  Avatar,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';


const PanelKontrol: NextPageWithLayout = () => {
  return <HomeView />;

  return <PanelKontrol />;
};
export function PanelKontrol() {
  const guilds = useGuilds();
      if (guilds.status === 'success')
    return (
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
        {guilds.data
          ?.filter((guild) => config.guild.filter(guild))
          .map((guild) => (
            <Card key={guild.id} variant="primary" as={Link} href={`/guilds/${guild.id}`}>
              <CardHeader as={Flex} flexDirection="row" gap={3}>
                <Avatar src={iconUrl(guild)} name={guild.name} size="md" />
                <Text>{guild.name}</Text>
              </CardHeader>
            </Card>
          ))}
      </SimpleGrid>
    );

  if (guilds.status === 'error')
    return (
      <Button w="fit-content" variant="danger" onClick={() => guilds.refetch()}>
        Try Again
      </Button>
    );
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
