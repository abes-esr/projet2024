import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ConsulterProjetAbesLink from '@site/src/components/ConsulterProjetAbesLink';

const FeatureList = [

  {
    title: 'Pourquoi ce site web ?',
    Svg: require('@site/static/img/logo-abes-cercle-130x130.svg').default,
    description: (
      <>
<p>
L'Abes a élaboré son projet d'établissement 2024-2028 de janvier à novembre 2023.
</p>

<p>
Le premier semestre était largement consacré à l’analyse des produits et services de l’établissement et au recueil des besoins utilisateurs.<br/>
Le second semestre était consacré aux choix et à la rédaction itérative du document de projet.<br/>
Deux versions (<a href="/docs/1.1/projet2024">1.1</a> et <a href="/docs/2.2/projet2024">2.2</a>) ont été publiées et <a href="/public-comments">mises à la disposition du public pour recueillir des commentaires</a>.
</p>
<p>
Le Conseil d'administration de l'Abes a voté le projet dans sa version définitive le 20/11/2024 et nous vous invitons à le consulter ici :
</p>
<ConsulterProjetAbesLink />
<p>
<br/>L'équipe projet reste consultable à l'adresse <code>pe2024 [at] abes.fr</code>
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
