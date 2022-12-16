import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import TableExample from './TableExample';
import ChipsExample from './ChipsExample';

function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

  return (
    <div className="App">
        <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

          <Text>Application navbar</Text>
          <Navbar.Section>
            <Text>hello this is tittle</Text>
          </Navbar.Section>
          <Navbar.Section grow mt="lg">
            <Text>e1</Text>
            <Text>e2</Text>
            <Text>e3</Text>
            <Text>e4</Text>
            <Text>e5</Text>

          </Navbar.Section>

        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', justifyContent: "space-between" }}> 
          {/* div style={{ display: 'flex', alignItems: 'center', height: '100%' */}
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>

          </div>
        </Header>
      }
    >

      <Text>Resize app to see responsive navbar in action</Text>
      {/* <TableExample/> */}
      <ChipsExample/>
    </AppShell>

    </div>
  );
}

export default AppShellExample;