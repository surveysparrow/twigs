import React from 'react';
import { Flex } from '../flex';
import { globalStyles } from '../../stitches.config';
import { ThemeProvider } from '../theme-provider';
import { FormLabel } from '../form-label';
import { FormHelperText } from '../form-helper-text';
import { Input } from '../input';
import { Box } from '../box';
import { Grid } from '../grid';
import { Text } from '../text';
import { Link } from '../link';
import { Button } from '../button';
import { Heading } from '../heading';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';
import {
  Tabs, TabsList, TabsTrigger, TabsContent,
} from '../tabs';
import { Checkbox } from '../checkbox';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuItemIndicator, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSubContent,
} from '../dropdown';

const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 19H10C8.21997 19 6.47991 18.4722 4.99987 17.4832C3.51983 16.4943 2.36628 15.0887 1.68509 13.4442C1.0039 11.7996 0.82567 9.99002 1.17294 8.24419C1.5202 6.49836 2.37737 4.89472 3.63604 3.63604C4.89472 2.37737 6.49836 1.5202 8.24419 1.17294C9.99002 0.82567 11.7996 1.0039 13.4442 1.68509C15.0887 2.36628 16.4943 3.51983 17.4832 4.99987C18.4722 6.47991 19 8.21997 19 10V11.5C19 12.163 18.7366 12.7989 18.2678 13.2678C17.7989 13.7366 17.163 14 16.5 14C15.837 14 15.2011 13.7366 14.7322 13.2678C14.2634 12.7989 14 12.163 14 11.5V10C14 8.93914 13.5786 7.92172 12.8284 7.17158C12.0783 6.42143 11.0609 6 10 6V6C9.20888 6 8.43552 6.2346 7.77772 6.67413C7.11993 7.11365 6.60724 7.73837 6.30449 8.46927C6.00174 9.20017 5.92252 10.0044 6.07686 10.7804C6.2312 11.5563 6.61217 12.269 7.17158 12.8284C7.73099 13.3878 8.44372 13.7688 9.21964 13.9231C9.99557 14.0775 10.7998 13.9983 11.5307 13.6955C12.2616 13.3928 12.8864 12.8801 13.3259 12.2223C13.7654 11.5645 14 10.7911 14 10" stroke="#6C6C6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoreIcon = () => {
  return (
    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99703 0.75C1.31078 0.75 0.744692 1.3088 0.750038 2.00409C0.752248 2.69143 1.31218 3.25 2.00003 3.25C2.68924 3.25 3.25003 2.68921 3.25003 2C3.25003 1.30787 2.68632 0.75 1.99703 0.75Z" fill="#6C6C6C" />
      <path d="M1.99703 6.75C1.31078 6.75 0.744692 7.3088 0.750038 8.00409C0.752248 8.69143 1.31218 9.25 2.00003 9.25C2.68924 9.25 3.25003 8.68921 3.25003 8C3.25003 7.30787 2.68632 6.75 1.99703 6.75Z" fill="#6C6C6C" />
      <path d="M1.99703 12.75C1.31078 12.75 0.744692 13.3088 0.750038 14.0041C0.752248 14.6914 1.31218 15.25 2.00003 15.25C2.68924 15.25 3.25003 14.6892 3.25003 14C3.25003 13.3079 2.68632 12.75 1.99703 12.75Z" fill="#6C6C6C" />
    </svg>
  );
};

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
            <Button variant="default" isIcon isTransparent icon={<KeyIcon />} />
            <Button variant="primary" isIcon icon={<KeyIcon />} css={{ borderRadius: '$round' }} />
            <Button size="xl" variant="primary" css={{ marginTop: '$5', marginBottom: '$5' }}>Primary</Button>
            <Button size="xl" variant="accent" css={{ marginTop: '$5', marginBottom: '$5' }}>Primary</Button>

            <Box css={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel htmlFor="email" css={{ marginTop: '$6', marginBottom: '$3' }}>Label</FormLabel>
              <Input id="email" type="text" placeholder="Placeholder" iconLeft={<KeyIcon />} />
              <FormHelperText css={{ marginTop: '$2' }}>Helper text</FormHelperText>
            </Box>
          </Box>
        </Box>
        <Box css={{
          gridArea: 'main', fontWeight: '600', padding: '12px 24px', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Tabs defaultValue="tab1">
            <TabsList aria-label="tabs example">
              <TabsTrigger value="tab1">One</TabsTrigger>
              <TabsTrigger value="tab2">Two</TabsTrigger>
              <TabsTrigger value="tab3">Three</TabsTrigger>
              <Box css={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <Button>Button Text</Button>
              </Box>
            </TabsList>
            <TabsContent css={{ p: '$4' }} value="tab1">
              {/* Tab one content */}
              <Flex css={{ alignItems: 'center' }}>
                <Checkbox defaultChecked onCheckedChange={() => {}} size="sm" id="c1" />
                <FormLabel css={{ paddingLeft: 15 }} htmlFor="c1">
                  Accept terms and conditions.
                </FormLabel>
              </Flex>
            </TabsContent>
            <TabsContent css={{ p: '$4' }} value="tab2">Tab two content</TabsContent>
            <TabsContent css={{ p: '$4' }} value="tab3">Tab three content</TabsContent>
          </Tabs>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" variant="primary" iconRight={<MoreIcon />} aria-label="Customise options">More Options</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent sideOffset={5}>
              <DropdownMenuItem>
                New Tab
              </DropdownMenuItem>
              <DropdownMenuItem>
                New Window
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                New Private Window
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  More Tools
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                  <DropdownMenuItem>
                    Save Page As…
                  </DropdownMenuItem>
                  <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                  <DropdownMenuItem>Name Window…</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked
                onCheckedChange={() => {}}
              >
                {/* <DropdownMenuItemIndicator>
                  <CheckIcon />
                </DropdownMenuItemIndicator> */}
                Show Bookmarks
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
                {/* <DropdownMenuItemIndicator>
                  <CheckIcon />
                </DropdownMenuItemIndicator> */}
                Show Full URLs
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>People</DropdownMenuLabel>
              <DropdownMenuRadioGroup value="Maneesh" onValueChange={() => {}}>
                <DropdownMenuRadioItem value="pedro">
                  {/* <DropdownMenuItemIndicator>
                    <DotFilledIcon />
                  </DropdownMenuItemIndicator> */}
                  Pedro Duarte
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="colm">
                  {/* <DropdownMenuItemIndicator>
                    <DotFilledIcon />
                  </DropdownMenuItemIndicator> */}
                  Colm Tuite
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
