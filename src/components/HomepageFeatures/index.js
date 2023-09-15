import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [

  {
    title: 'Pourquoi ce site web ?',
    Svg: require('@site/static/img/logo-abes-cercle-130x130.svg').default,
    description: (
      <>
<p>
La présentation au Conseil d’Administration de l’Abes, lors de la séance du 14 septembre 2023,
des résultats des travaux issus de la réflexion menée par l’agence pour la mise en place de son
projet d’établissement 2024-2028 marque la fin d'une étape déterminante du processus. 
</p>


<p>
En effet, le travail réalisé depuis le début de l’année [à développer sur les quelques étapes]...
a permis de formaliser une version initiale de notre projet d’établissement communiquée aux personnels
de l’Abes puis présentée au conseil d’administration de l'agence. 
</p>

<p>
Les contributions et observations recueillies en interne à l’Abes, auprès du Conseil d’Administration,
puis le travail réalisé par l’équipe projet ont permis de développer le contenu du projet dans une
nouvelle version enrichie que je souhaite aujourd’hui vous soumettre afin de recueillir vos avis.  
</p>

<p>
L’objectif de cette consultation étant de consolider le projet compte tenu de vos retours en vue de
la rédaction finale d’un projet précis, complet, au plus près des attentes et besoins de la communauté,
qui sera présenté au conseil d’administration de l’Abes le 20 novembre 2023. 
</p>

<p>
Compte tenu du calendrier des opérations à venir, la consultation du présent site web est accessible jusqu’au 31/12/2023
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
        <Link
            className="button button--secondary button--lg"
            to="/docs/projet2024">
              Consulter le projet
          </Link>
      </div>

    </section>
  );
}
