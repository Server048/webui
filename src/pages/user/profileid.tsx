import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
  BoxProps,
} from '@chakra-ui/react';
import { FiUser, FiKey, FiShield, FiUserCheck, FiCreditCard } from 'react-icons/fi';

interface ProfilePageProps {
  growId: string;
  token: string;
  role: string;
  username: string;
  balance: string;
}

const ProfilePage = ({ growId, token, role, username, balance }: ProfilePageProps) => {
  return (
    <Box p={6} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={useColorModeValue('white', 'gray.900')}>
      <Box p={6} bg={useColorModeValue('gray.50', 'gray.700')}>
        <Heading as="h2" fontSize="xl" mb={4}>
          Profil Pengguna
        </Heading>
      </Box>
      <VStack p={6} spacing={4}>
        <FormControl>
          <FormLabel>
            <Box display="flex" alignItems="center" mb={2}>
              <FiUser />
              <Text ml={2}>GrowId</Text>
            </Box>
            <Input value={growId} isReadOnly />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            <Box display="flex" alignItems="center" mb={2}>
              <FiKey />
              <Text ml={2}>Token</Text>
            </Box>
            <Input value={token} isReadOnly />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            <Box display="flex" alignItems="center" mb={2}>
              <FiShield />
              <Text ml={2}>Role</Text>
            </Box>
            <Input value={role} isReadOnly />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            <Box display="flex" alignItems="center" mb={2}>
              <FiUserCheck />
              <Text ml={2}>UserName</Text>
            </Box>
            <Input value={username} isReadOnly />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            <Box display="flex" alignItems="center" mb={2}>
              <FiCreditCard />
              <Text ml={2}>Balance</Text>
            </Box>
            <Input value={balance} isReadOnly />
          </FormLabel>
        </FormControl>
      </VStack>
    </Box>
  );
};

const HomePage: NextPageWithLayout = () => {
  const growId = '1234567890';
  const token = 'abcdef1234567890';
  const role = 'Admin';
  const username = 'thedeviltime';
  const balance = '1000';
  return (
    <ProfilePage growId={growId} token={token} role={role} username={username} balance={balance} />
  );
};

HomePage.getLayout = (c) => <AppLayout>{c}</AppLayout>;

export default HomePage;
