import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

export default function ConsulterProjetAbesLink() {
  return (
    <Link
        className="button button--secondary button--lg"
        to="/docs/2.4/projet2024">
          <Translate>Consulter le projet</Translate>
    </Link>
  );
}
