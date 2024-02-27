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
        <h1 className="hero__title">Twigs</h1>
        <h2 className='hero__tagline'> React UI component Library </h2>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

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
      <div className='homepage'>
        <div>
          <div className='linear-gradient'>
            <HomepageHeader />
            <div className='container'>
              <Link
                style={{
                  marginBottom: '2rem',
                }}
                className="button button--primary button--lg"
                to="/docs/getting-started">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <FeatureCards />

        <div className='container component-section'>
          <h2> Components </h2>
          <BrowserOnly>
            {() => {

              const Heading = require('@sparrowengg/twigs-react').Heading;
              const Button = require('@sparrowengg/twigs-react').Button;
              const Alert = require('@sparrowengg/twigs-react').Alert;
              const Chip = require('@sparrowengg/twigs-react').Chip;
              const DatePicker = require('@sparrowengg/twigs-react').DatePicker;
              const Input = require('@sparrowengg/twigs-react').Input;
              const Pagination = require('@sparrowengg/twigs-react').Pagination;
              const Switch = require('@sparrowengg/twigs-react').Switch;
              const ClapIcon = require('@sparrowengg/twigs-react-icons').ClapIcon;
              const SearchIcon = require('@sparrowengg/twigs-react-icons').SearchIcon;

              return (
                <div className='row'>
                  <Link to='/docs/components/button' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <Button size="md"> Submit Details </Button>
                    </div>
                    <Heading as="h6" size="h6"> Button </Heading>
                  </Link>

                  <Link to='/docs/components/chip' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <Chip color="warning" size="md" closable> Closable Chip </Chip>
                    </div>
                    <Heading as="h6" size="h6"> Chip </Heading>
                  </Link>

                  <Link to='/docs/components/datepicker' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <DatePicker />
                    </div>
                    <Heading as="h6" size="h6"> DatePicker </Heading>
                  </Link>

                  <Link to='/docs/components/pagination' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <Pagination
                        activePage={4}
                        total={50}
                        itemsPerPage={10}
                      />
                    </div>
                    <Heading as="h6" size="h6"> Pagination </Heading>
                  </Link>

                  <Link to='/docs/components/input' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <Input
                        placeholder="Search"
                        leftIcon={<SearchIcon />}
                      />
                    </div>
                    <Heading as="h6" size="h6"> Input </Heading>
                  </Link>

                  <Link to='/docs/components/alert' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <Alert icon={<ClapIcon size={24} style={{ marginRight: 10 }} />} css={{ width: 200 }}>Hi Twigs!</Alert>
                    </div>
                    <Heading as="h6" size="h6"> Alert </Heading>
                  </Link>

                  <Link to='/docs/components/switch' className='col col--3 text--no-decoration'>
                    <div className='component-section__component'>
                      <Switch size="md" />
                    </div>
                    <Heading as="h6" size="h6"> Switch </Heading>
                  </Link>


                  <div className='col col--3'>
                    <div className='component-section__component'>
                      <Link
                        to="/docs/category/components">
                        View All components
                      </Link>
                    </div>
                  </div>

                </div>
              )
            }
            }
          </BrowserOnly>
        </div>

      </div>
    </Layout>
  );
}

function FeatureCards() {
  return (
    <div className="container feature-cards">
      <div className='row'>
        <FeatureCard
          title={'Accessible'}
          description={'Embrace inclusivity – Twigs\' components ensure every user can navigate seamlessly, enhancing user experiences.'}
          img={'/img/accessible.svg'}
        />
        <FeatureCard
          title={'Extensible'}
          description={'Unleash your creativity – Twigs\' components grant unparalleled customization, enabling tailored designs and layouts.'}
          img={'img/extensible.svg'}
        />
        <FeatureCard
          title={'Themeable'}
          description={'Elevate aesthetics – Twigs\' themeability feature empowers you to create visually stunning and consistent interfaces.'}
          img={'img/theming.svg'}
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, img }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card">
        <img className='card__image' src={img} alt="Feature card" />
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}