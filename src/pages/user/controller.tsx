// pages/controller.tsx
import { Text } from '@chakra-ui/react';
import SidebarLayout from '@/components/SidebarLayout';

const ControllerPage: React.FC = () => {
  return (
    <SidebarLayout>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Halaman Controller</Text>
      <Text>
        Ini adalah konten utama halaman controller. Anda dapat menambahkan lebih banyak konten di sini.
      </Text>
    </SidebarLayout>
  );
};

export default ControllerPage;
