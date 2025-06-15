import { useSession } from '@/utils/auth/hooks';
import { ProfilePage } from './ProfilePage'; // Pastikan path ini benar
import { Box, Spinner } from '@chakra-ui/react';
import { useSettingsStore } from '@/stores/pageStore';
import { Redirect } from 'next/navigation';

const Controller: React.FC = () => {
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
    return <Redirect href="/auth/signin" />;
  }

  // Pastikan session memiliki data yang dibutuhkan sebelum merender ProfilePage
  if (!session || !session.user || !session.user.username) {
    return <Box>Terjadi kesalahan saat mengambil data pengguna.</Box>;
  }

  return <ProfilePage session={session} devMode={devMode} />;
};

export default Controller;
