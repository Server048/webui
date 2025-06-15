import { Box, Text, Card, CardBody, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'; // Import ikon untuk menu

const Controller = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Pilih Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Connect</MenuItem>
          <MenuItem>Controller</MenuItem>
        </MenuList>
      </Menu>
      <Card mt={4}> {/* Menambahkan margin atas */}
        <CardBody>
          <Text fontSize="xl" fontWeight="bold">
            Ini Adalah Kode Test dari Server
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Controller;
