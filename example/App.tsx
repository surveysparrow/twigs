import React from 'react';
import { globalStyles } from '../stitches.config';
import { ThemeProvider } from '../src/theme-provider';
import { FormLabel } from '../src/form-label';
import { FormHelperText } from '../src/form-helper-text';
import { Input } from '../src/input';
import { Box } from '../src/box';
import { Grid } from '../src/grid';
import { Text } from '../src/text';
import { Link } from '../src/link';
import { Button } from '../src/button';
import { Heading } from '../src/heading';
import { Avatar, AvatarImage, AvatarFallback } from '../src/avatar';

const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 19H10C8.21997 19 6.47991 18.4722 4.99987 17.4832C3.51983 16.4943 2.36628 15.0887 1.68509 13.4442C1.0039 11.7996 0.82567 9.99002 1.17294 8.24419C1.5202 6.49836 2.37737 4.89472 3.63604 3.63604C4.89472 2.37737 6.49836 1.5202 8.24419 1.17294C9.99002 0.82567 11.7996 1.0039 13.4442 1.68509C15.0887 2.36628 16.4943 3.51983 17.4832 4.99987C18.4722 6.47991 19 8.21997 19 10V11.5C19 12.163 18.7366 12.7989 18.2678 13.2678C17.7989 13.7366 17.163 14 16.5 14C15.837 14 15.2011 13.7366 14.7322 13.2678C14.2634 12.7989 14 12.163 14 11.5V10C14 8.93914 13.5786 7.92172 12.8284 7.17158C12.0783 6.42143 11.0609 6 10 6V6C9.20888 6 8.43552 6.2346 7.77772 6.67413C7.11993 7.11365 6.60724 7.73837 6.30449 8.46927C6.00174 9.20017 5.92252 10.0044 6.07686 10.7804C6.2312 11.5563 6.61217 12.269 7.17158 12.8284C7.73099 13.3878 8.44372 13.7688 9.21964 13.9231C9.99557 14.0775 10.7998 13.9983 11.5307 13.6955C12.2616 13.3928 12.8864 12.8801 13.3259 12.2223C13.7654 11.5645 14 10.7911 14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const App = () => {
  globalStyles();
  return (
    <ThemeProvider theme={{
      fonts: {
        body: "'DM sans', sans-serif",
      },
    }}
    >
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
            gridArea: 'navbar',
            boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.15)',
            fontWeight: '600',
            padding: '12px 24px',
          }}
        >
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Box
              css={{
                width: '40px',
                height: '40px',
                backgroundColor: '$primary',
                marginRight: '12px',
                borderRadius: '6px',
              }}
            />
            <Text size="lg">Navbar</Text>
          </Box>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link href="/" css={{ margin: '0 16px', fontWeight: '400' }}>
              Home
            </Link>
            <Link href="/team" css={{ margin: '0 16px', fontWeight: '400' }}>
              Team
            </Link>
            <Link href="/goals" css={{ margin: '0 16px', fontWeight: '400' }}>
              Goals
            </Link>
            <Link
              href="/one-one-ones"
              css={{ margin: '0 16px', fontWeight: '400' }}
            >
              One on Ones
            </Link>
            <Link href="/reports" css={{ margin: '0 16px', fontWeight: '400' }}>
              Reports
            </Link>
          </Box>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Avatar size="lg">
              <AvatarImage
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
              />
              <AvatarFallback delayMs={600}>CT</AvatarFallback>
            </Avatar>
          </Box>
        </Grid>
        <Box
          css={{
            gridArea: 'sidebar',
            backgroundColor: '#F6F6F6',
            fontWeight: '600',
            padding: '12px 24px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              paddingTop: '32px',
            }}
          >
            <Avatar size="3xl" css={{ marginBottom: '20px' }}>
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
                color: '$tertiary500', fontWeight: '$4', mt: '$3', mb: '$5',
              }}
            >
              HR Manager
            </Text>
            <Button variant="default" isIcon isTransparent icon={<KeyIcon />} />
            <Button
              size="2xl"
              isTransparent
              isIcon
              icon={<KeyIcon />}
              css={{ borderRadius: '$round' }}
            />
            <Button
              size="xl"
              variant="primary"
              css={{ marginTop: '$5', marginBottom: '$5' }}
            >
              Primary
            </Button>
            <Button
              size="xl"
              variant="accent"
              css={{ marginTop: '$5', marginBottom: '$5' }}
            >
              Primary
            </Button>

            <Box css={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel
                htmlFor="email"
                css={{ marginTop: '$6', marginBottom: '$3' }}
              >
                Label
              </FormLabel>
              <Input
                id="email"
                type="text"
                placeholder="Placeholder"
                iconLeft={<KeyIcon />}
              />
              <FormHelperText css={{ marginTop: '$2' }}>
                Helper text
              </FormHelperText>
            </Box>
          </Box>
        </Box>
        <Box
          css={{
            gridArea: 'main',
            fontWeight: '600',
            padding: '12px 24px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
