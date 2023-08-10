import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <BrowserOnly>
          {() => {
            const Box = require('@sparrowengg/twigs-react').Box;
            return <Box />;
          }
          }
        </BrowserOnly>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
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
      <BrowserOnly>
        {() => {
          const Box = require('@sparrowengg/twigs-react').Box;
          const Flex = require('@sparrowengg/twigs-react').Flex;
          const Heading = require('@sparrowengg/twigs-react').Heading;
          const Text = require('@sparrowengg/twigs-react').Text;
          const CalendarRange = require('@sparrowengg/twigs-react').CalendarRange;
          const Avatar = require('@sparrowengg/twigs-react').Avatar;
          const AvatarGroup = require('@sparrowengg/twigs-react').AvatarGroup;
          const FormInput = require('@sparrowengg/twigs-react').FormInput;
          const Button = require('@sparrowengg/twigs-react').Button;
          const Checkbox = require('@sparrowengg/twigs-react').Checkbox;

          return (
            <Box
              css={{
                background: 'radial-gradient(at center, #FFFFFF, #CCF5F4)',
                minHeight: 'calc(100vh - 60px)',
              }}
            >
              <HomepageHeader />
              <Flex gap='$8' css={{
                overflow: 'hidden',
                flexWrap: 'no-wrap',
                padding: '$8',
                maxWidth: 1440,
                margin: '0 auto',
                zIndex: 1,
                position: 'relative'
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
                  <Box css={{
                    width: 380,
                    height: 180,
                    borderRadius: '$2xl',
                    border: "1px solid $black100",
                    padding: '$10 $8',
                    boxShadow: '$sm',
                  }}>
                    <Flex gap='$7' wrap="wrap">
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
                          '#D946EF',
                          '#8B5CF6',
                          '#0EA5E9',
                          '#74B5AF',
                          '#FF6B97',
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
                </Flex>
                <Flex gap='$8' flexDirection='column'>
                  <Flex
                    flexDirection="column"
                    gap="$8"
                    shrink={0}
                    css={{
                      width: 340,
                      height: 370,
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
                    <Checkbox css={{ color: '$neutral700' }} size="sm"> Remember me </Checkbox>

                    <Button size="lg"> Create your account </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          )
        }
        }
      </BrowserOnly>
    </Layout>
  );
}