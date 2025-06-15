import { useSession } from '@/utils/auth/hooks';
import { ProfilePage } from './ProfilePage';
import { Box, Spinner } from '@chakra-ui/react';
import { useSettingsStore } from '@/stores/pageStore'; // Path import yang diperbaiki


const Controller: NextPageWithLayout = () => {
  const { status, session } = useSession();
  const devMode = useSettingsStore((state) => state.devMode);

  if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (status === 'unauthenticated') {
    // Redirect ke halaman login jika belum login.  Sesuaikan dengan routing Anda.
    return <Redirect to="/auth/signin" />; 
  }

  // Pastikan session memiliki data yang dibutuhkan sebelum merender ProfilePage
  if (!session || !session.user || !session.user.username) {
    return <Box>Terjadi kesalahan saat mengambil data pengguna.</Box>;
  }

  return (
    <ProfilePage
      session={session}
      devMode={devMode}
    />
  );
};

Controller.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default Controller;
