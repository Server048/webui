import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app';
import { Box, Button, Flex, List, ListItem, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import { HomeIcon, SettingsIcon, RocketIcon, DocumentIcon, LogoutIcon } from '@chakra-ui/icons';


const PanelKontrol: NextPageWithLayout = () => {
  
  return <controller />;
};
export function controller() {
  
    <Box bg="gray.800" w="200px" h="full" p={4}>
      <Flex mb={4} align="center">
        <Avatar src="/profile.jpg" size="md" mr={2} />
        <Text color="white" fontWeight="bold">GrowTree - PS</Text>
      </Flex>
      <Text color="gray.400" fontSize="sm" mb={4}>Kelola bot Discord Anda</Text>
      <List spacing={3}>
        <ListItem>
          <Link href="/dashboard">
            <Button variant="link" colorScheme="purple" leftIcon={<HomeIcon />} w="full">Dasbor</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/perintah-bot">
            <Button variant="link" colorScheme="purple" leftIcon={<DocumentIcon />} w="full">Perintah Bot</Button>
          </Link>
        </ListItem>
  
        <ListItem>
          <Link href="/log-bot">
            <Button variant="link" colorScheme="purple" leftIcon={<DocumentIcon />} w="full">Log Bot</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/log-pengguna">
            <Button variant="link" colorScheme="purple" leftIcon={<DocumentIcon />} w="full">Log Pengguna</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/uji-bot">
            <Button variant="link" colorScheme="purple" leftIcon={<RocketIcon />} w="full">Uji Bot</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/ekspor-bot">
            <Button variant="link" colorScheme="purple" leftIcon={<DocumentIcon />} w="full">Ekspor Bot</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/pengaturan">
            <Button variant="link" colorScheme="purple" leftIcon={<SettingsIcon />} w="full">Pengaturan</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Button variant="link" colorScheme="purple" leftIcon={<LogoutIcon />} w="full">Keluar</Button>
        </ListItem>
      </List>
    </Box>
  
  return <></>;
}


PanelKontrol.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default PanelKontrol;
