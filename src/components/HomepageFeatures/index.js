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
L’Abes travaille depuis janvier 2023 à la conception de son projet d’établissement 2024-2028. Après un premier semestre largement consacré à l’analyse des produits et services de l’établissement et au recueil des besoins utilisateurs, le second semestre est celui des choix et de la rédaction.
</p>


<p>
Le document qui vous est proposé pour commentaire a été déposé sous une première version, enrichie des discussions qui ont eu lieu à ce sujet lors du Conseil d’administration du 14 septembre. Une <strong>seconde version de ce texte, comportant d’importants amendements, a été déposée le lundi 23 octobre</strong> (la version 1 ainsi que les commentaires précédemment déposés ont été conservés).
</p>

<p>
L’objectif de cette consultation est d’en consolider la teneur avec <a href="/howTo/">vos retours</a> en vue de la rédaction finale d’un projet précis, complet, au plus près des attentes et besoins de la communauté. Il sera présenté et soumis à validation du conseil d’administration de l’Abes le lundi 20 novembre 2023. 
</p>

<p>
Vous pouvez commenter ce projet à l’aide de la plateforme d’annotation Hypothesis : <a href="/howTo/">un guide d’utilisation est disponible sur ce site</a>.
</p>

<p>
Les contributions sont ouvertes jusqu'au mardi 31 octobre 2023 pour prise en compte dans la rédaction finale.
</p>

<p>
Les commentaires restent possibles au-delà de la date du 30 octobre. En cas de besoins d'échanges plus approfondis, vous avez également la possibilité de contacter l'équipe projet de l'Abes à l'adresse <code>pe2024 [at] abes.fr</code>
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
        <ConsulterProjetAbesLink />
      </div>

    </section>
  );
}
