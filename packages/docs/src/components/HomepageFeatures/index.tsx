import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Accessible',
    description: (
      <>
        30+ components are built with accessibility in mind, powered by mighty Radix UI primitives under the hood.
      </>
    ),
  },
  {
    title: 'Themeable',
    description: (
      <>
        Extensible theme configuration allows you to customize the look and feel of your components, and adapt to your brand.
      </>
    ),
  },
  {
    title: 'Developer Experience',
    description: (
      <>
        Twigs components are fully type safe and well documented. You can use them with confidence in your React projects.
      </>
    ),
  }
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-vert--lg">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
