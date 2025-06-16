import { Flex, Grid, Spacer, Text, VStack } from '@chakra-ui/layout';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Image,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import { avatarUrl, bannerUrl } from '@/api/discord';
import { SelectField } from '@/components/forms/SelectField';
import { SwitchField } from '@/components/forms/SwitchField';
import { languages, names, useLang } from '@/config/translations/provider';
import { profile } from '@/config/translations/profile';
import { IoLogOut } from 'react-icons/io5';
import { useSettingsStore } from '@/stores';
import { NextPageWithLayout } from '@/pages/_app';
import AppLayout from '@/components/layout/app'; // Ini harus diimport
import { useLogoutMutation } from '@/utils/auth/hooks';
import { useSelfUser } from '@/api/hooks';
import MenuConnect from './MenuConnect'; // Impor komponen MenuConnect Anda


/**
 * User info and general settings here
 */
const ProfilePage: NextPageWithLayout = () => {
  const user = useSelfUser();
  const logout = useLogoutMutation();
  const t = profile.useTranslations();
  const { colorMode, setColorMode } = useColorMode();
  const { lang, setLang } = useLang();
  const [devMode, setDevMode] = useSettingsStore((s) => [s.devMode, s.setDevMode]);

  return (
    <Grid templateColumns={{ base: '1fr', lg: '200px minmax(0, 800px) auto' }} gap={{ base: 3, lg: 6 }}> {/* Ubah templateColumns */}
      <MenuConnect /> {/* Tambahkan komponen MenuConnect di sini */}
      <Flex direction="column">
        {/* ... (rest of your profile content) ... */}
      </Flex>
      <Card w="full" rounded="3xl" h="fit-content" variant="primary">
        {/* ... (your settings card) ... */}
      </Card>
      <Content />
    </Grid>
  );
};

function Content() {
  return <></>;
}

ProfilePage.getLayout = (p) => <AppLayout>{p}</AppLayout>;
export default ProfilePage;
