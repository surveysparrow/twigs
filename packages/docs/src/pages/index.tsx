import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { Alert, Avatar, AvatarGroup, Box, Button, Calendar, CalendarRange, Checkbox, Flex, FormInput, Grid, Heading, Pagination, Text } from '@site/../react-components/dist/index';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <img
          src='https://images.unsplash.com/photo-1439397629354-e2e3dea8f6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='twigs'
          height={400}
          width='100%'
          style={{
            objectFit: 'cover',
            borderRadius: '10px',
            margin: '2rem 0',
          }}
        /> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Box>

        <HomepageHeader />
        <main>
          {/* <HomepageFeatures /> */}
          <Flex gap='$8' css={{
            overflow: 'hidden',
            flexWrap: 'no-wrap',
            padding: '$8',
          }}>
            <Box css={{
              width: 640,
              height: 400,
              padding: '$8 $4',
              border: '1px solid $neutral200',
              borderRadius: '$2xl',
              boxShadow: '$sm',
              backgroundColor: '$white900',
            }}>
              <CalendarRange />
            </Box>

            <Flex gap='$8' flexDirection='column'>
              <SampleForm />
              <SamplePagination />
            </Flex>
            <Flex gap='$8' flexDirection='column'>
              <ProfileCard />
              <Colors />
            </Flex>
            {/* <ToggleOptions /> */}
          </Flex>
        </main>
      </Box>
    </Layout>
  );
}

function ProfileCard() {
  return (
    <Box
      css={{
        width: 380,
        height: 250,
        padding: '$4 $8',
        border: '1px solid $neutral200',
        borderRadius: '$2xl',
        boxShadow: '$sm',
        backgroundColor: '$white900',
      }}
    >
      <Avatar
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="avatar"
        size="xl"
      />
      <Heading size="h4" css={{ marginBottom: 0, color: '$black700' }}> John Doe </Heading>
      <Text size="sm"> Director of design </Text>
      <Flex gap="$8" css={{ marginTop: '$4' }}>
        <Text css={{ color: '$neutral700' }} weight="medium"> Email: </Text>
        <Text css={{ color: '$neutral600' }}> john@example.com </Text>
      </Flex>

      <Text css={{ marginTop: '$12', marginBottom: '$2', color: '$primary500' }} size='sm' weight='medium'> Followed by </Text>
      <Flex justifyContent="space-between">
        <AvatarGroup size="md" limit={5}>
          {
            [
              'https://randomuser.me/api/portraits/women/78.jpg',
              'https://randomuser.me/api/portraits/men/78.jpg',
              'https://randomuser.me/api/portraits/women/18.jpg',
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/3.jpg',
              'https://randomuser.me/api/portraits/men/5.jpg'
            ].map((src, index) => (
              <Avatar
                key={index}
                src={src}
              />
            ))
          }
        </AvatarGroup>
        <Button color='default' size='md'>
          Book a meeting
        </Button>
      </Flex>
    </Box>
  )
}

function SampleForm() {
  return (
    <Flex
      flexDirection="column"
      gap="$8"
      shrink={0}
      css={{
        width: 340,
        height: 320,
        borderRadius: '$2xl',
        boxShadow: '$sm',
        padding: '$8 $12',
        border: '1px solid $neutral200',
        backgroundColor: '$white900',
      }}
    >

      <FormInput
        label="Full Name"
        placeholder="Enter your full name"
        type="text"
        size="lg"
        variant="filled"
        required
      />

      <FormInput
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="filled"
        size="lg"
        required
      />

      <FormInput
        label="Password"
        placeholder="Enter your password"
        type="password"
        size="lg"
        variant="filled"
        required
      />

      <Button size="lg"> Create your account </Button>
    </Flex>
  )
}

function Colors() {
  return (
    <Box css={{
      width: 270,
      height: 270,
      borderRadius: '$2xl',
      border: "1px solid $black100",
      padding: '$8',
      boxShadow: '$sm',
    }}>
      <Text size="lg" weight="bold" css={{ marginBottom: '$8', color: '$highlight800' }}> Colors you will love! </Text>
      <Flex gap='$6' wrap="wrap">
        {
          [
            '#5F5CB0',
            '#7158F5',
            '#84BCEF',
            '#7158F5',
            '#74B5AF',
            '#98E0D8',
            '#F4B583',
            '#EE7D61',
            '#F4BEB4',
            '#A65E6E',
            '#C083D8',
            '#5CA878',
            '#EFBE55',
            '#FFFFFF',
            '#C6C6C6',
            '#000000'
          ].map((color) => (
            <Box
              css={{
                height: 36,
                width: 36,
                backgroundColor: color,
                border: "1px solid $black50",
                borderRadius: 4,
                transition: 'all 0.1s ease-in-out',
                '&:hover': {
                  scale: 1.1,
                }
              }}
            />
          ))
        }
      </Flex>
    </Box>
  )
}

function SamplePagination() {
  return (
    <Box
      css={{
        padding: '$4',
        borderRadius: '$2xl',
        boxShadow: '$sm',
        backgroundColor: '$white900',
      }}
    >
      <Flex flexDirection="column" gap="$8">
        <Pagination
          activePage={2}
          size="md"
          total={100}
          itemsPerPage={10}
        />

        <Pagination
          activePage={1}
          size="md"
          total={3}
          itemsPerPage={1}
        />
      </Flex>
    </Box>
  )
}