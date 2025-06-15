// ... import lainnya ...
const ProfilePage: NextPageWithLayout<{ session: AccessToken; devMode: boolean }> = ({ session, devMode }) => { // Tambahkan devMode
  // ... bagian kode lainnya ...

  return (
    // ... bagian kode lainnya ...
    <SwitchField
      id="developer-mode"
      label={t['dev mode']}
      desc={t['dev mode description']}
      isChecked={devMode} // Gunakan props devMode di sini
      onChange={(e) => setDevMode(e.target.checked)}
    />
    // ... bagian kode lainnya ...
  );
};

// ... bagian kode lainnya ...
