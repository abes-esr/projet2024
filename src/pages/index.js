import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ConsulterProjetAbesLink from '@site/src/components/ConsulterProjetAbesLink';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">Ouverture aux <a href="/howTo" style={{color: '#b5d1ff'}}>commentaires publics</a></p>
        <div className={styles.buttons}>
          <ConsulterProjetAbesLink />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}` + " - Ouverture aux commentaires publics."}>
      <HomepageHeader />
      <main>
          <HomepageFeatures />
      </main>
    </Layout>
  );
}
