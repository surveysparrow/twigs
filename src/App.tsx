import React from 'react';
import { Input } from './input';
import { globalStyles } from '../stitches.config';
import { ThemeProvider } from './themeProvider';
import { Box } from './box';
import { Grid } from './grid';
import { Text } from './text';
import { Link } from './link';
import { Button } from './button';
import { Heading } from './heading';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const App = () => {
  globalStyles();
  return (
    <ThemeProvider theme={{}}>
      <Grid
        templateAreas={`"navbar navbar"
                         "sidebar main"`}
        templateRows="64px 1fr"
        templateColumns="342px 1fr"
        gap={[0, 0]}
        repeat="fit"
        css={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <Grid
          templateColumns="1fr 1fr 1fr"
          css={{
            gridArea: 'navbar', boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.15)', fontWeight: '600', padding: '12px 24px',
          }}
        >
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Box css={{
              width: '40px', height: '40px', backgroundColor: '$primary', marginRight: '12px', borderRadius: '6px',
            }}
            />
            <Text size="lg">
              Navbar
            </Text>
          </Box>
          <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/" css={{ margin: '0 16px', fontWeight: '400' }}>Home</Link>
            <Link href="/team" css={{ margin: '0 16px', fontWeight: '400' }}>Team</Link>
            <Link href="/goals" css={{ margin: '0 16px', fontWeight: '400' }}>Goals</Link>
            <Link href="/one-one-ones" css={{ margin: '0 16px', fontWeight: '400' }}>One on Ones</Link>
            <Link href="/reports" css={{ margin: '0 16px', fontWeight: '400' }}>Reports</Link>
          </Box>
          <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Avatar size="lg">
              <AvatarImage
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
              />
              <AvatarFallback delayMs={600}>CT</AvatarFallback>
            </Avatar>
          </Box>
        </Grid>
        <Box css={{
          gridArea: 'sidebar', backgroundColor: '#F6F6F6', fontWeight: '600', padding: '12px 24px', display: 'flex', justifyContent: 'center',
        }}
        >
          <Box css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            paddingTop: '32px',
          }}
          >
            <Avatar size="xxxl" css={{ marginBottom: '20px' }}>
              <AvatarImage
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <AvatarFallback delayMs={600}>CT</AvatarFallback>
            </Avatar>
            <Heading size="h5">Aileen Chow</Heading>
            <Text
              size="sm"
              css={{
                color: '$grey500', fontWeight: '$4', mt: '$3', mb: '$5',
              }}
            >
              HR Manager
            </Text>
            <Button>Primary</Button>
            <Input type="text" />
          </Box>
        </Box>
        <Box css={{
          gridArea: 'main', fontWeight: '600', padding: '12px 24px', alignItems: 'center', justifyContent: 'center',
        }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
