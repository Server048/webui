import { Box } from '@chakra-ui/react';
import SidebarWithHeader from './components/layout/sidebar/SidebarWithHeader'; // Sesuaikan path
import React from 'react';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box minH="100vh">
      <SidebarWithHeader>
        {children} {/* Content */}
      </SidebarWithHeader>
    </Box>
  );
};

export default AppLayout;
