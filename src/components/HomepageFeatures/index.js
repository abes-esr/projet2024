import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ConsulterProjetAbesLink from '@site/src/components/ConsulterProjetAbesLink';
import Translate from '@docusaurus/Translate';

const FeatureList = [

  {
    title: 'Pourquoi ce site web ?',
    Svg: require('@site/static/img/logo-abes-cercle-130x130.svg').default,
    description: (
      <>
<p>
    <Translate>
L'Abes a élaboré son projet d'établissement 2024-2028 de janvier à novembre 2023.
    </Translate>
</p>

<p>
    <Translate>
        Le premier semestre était consacré à l’analyse des produits et services de l’établissement et au recueil des besoins utilisateurs.</Translate>
    <br/><Translate>
        Le second semestre était consacré aux choix et à la rédaction itérative du document de projet.</Translate><br/>
        <Translate>Deux versions</Translate> (<a href="/docs/1.1/projet2024">1.1</a> et <a href="/docs/2.2/projet2024">2.2</a>) ont été publiées
        et <a href="/public-comments"><Translate> mises à la disposition du public pour recueillir des commentaires</Translate></a>.
</p>
<p>
    <Translate>
        Le Conseil d'administration de l'Abes a voté le projet dans sa version définitive le 20/11/2023.
    </Translate>
</p>
<ConsulterProjetAbesLink />
<p>
<br/><Translate>Pour toute question ou remarque, vous pouvez écrire à </Translate><code>pe2024 [at] abes.fr</code>

</p>
  
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
{/*
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
*/}
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
