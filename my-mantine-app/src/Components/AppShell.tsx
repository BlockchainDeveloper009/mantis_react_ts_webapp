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

import { 
    BrowserRouter as Router,
    Link,
    Route,
    Routes 
} from "react-router-dom";
import TitleAndTextExample from './TitleAndTextExample';
import InputExample from './InputExample';
import Cards from './Cards';
import CalendarExample from './CalendarExample';

function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

  return (
    <div className="App">
        <Router>
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
            <div style={{display: "flex", flexDirection: "column"}}>
                <Text component={Link}  variant="link" to="/">
                   Home Page
                </Text>
                <Text component={Link}  variant="link" to="/input">
                   Input Example
                </Text>
      
                <Text component={Link}  variant="link" to="/titlePage">
                   Title Page
                </Text>
                <Text component={Link}  variant="link" to="/cardsPage">
                   Cards Page
                </Text>
                <Text component={Link}  variant="link" to="/CalendarExample">
                CalendarExample
                </Text>
                
            </div>
           

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
        <Routes>
            <Route path="/" element={<ChipsExample/>}></Route>
            <Route path="/input" element={<InputExample/>}></Route>
            <Route path="/ChipsExample" element={<TitleAndTextExample/>}></Route>
            <Route path="/cardsPage" element={<Cards/>}></Route>
            <Route path="/CalendarExample" element={<CalendarExample/>}></Route>
            
            
        </Routes>

      <Text>Resize app to see responsive navbar in action</Text>
      {/* <TableExample/> */}
      
    </AppShell>
    </Router>
    </div>
  );
}

export default AppShellExample;
