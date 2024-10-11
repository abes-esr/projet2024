# projet2024

[![build-test-pubtodockerhub](https://github.com/abes-esr/projet2024/actions/workflows/build-test-pubtodockerhub.yml/badge.svg)](https://github.com/abes-esr/projet2024/actions/workflows/build-test-pubtodockerhub.yml) [![Docker Pulls](https://img.shields.io/docker/pulls/abesesr/projet2024.svg)](https://hub.docker.com/r/abesesr/projet2024/)

Dépôt de l'application [docusaurus 3](https://docusaurus.io/) permettant l'ouverture publique du projet d'établissement 2024-2028 de l'Abes sur le site web https://projet2024.abes.fr

![image](https://github.com/abes-esr/projet2024/assets/328244/a17819e5-b023-4b43-9eea-7ea9843edb04)

Le site est déployé sur les environnements de dev, test, et prod à l'aide de la configuration suivante :  
https://github.com/abes-esr/projet2024-docker


## Architecture

L'article suivant explique l'articulation des différentes technologies utilisées pour mettre en place le site https://projet2024.abes.fr :  
https://punktokomo.abes.fr/2023/12/20/focus-sur-les-technologies-utilisees-pour-la-publication-du-projet-detablissement-2024-2028-de-labes/

## Procédure pour publier une nouvelle version du projet de l'Abes


### Etape 1 : passer du docx au markdown

La version de travail du projet d'établissement est un docx partagé entre tous les membres de l'équipe projet. Pour la publier il est nécessaire de convertir le docx en markdown. Voici les commandes linux permettant de le faire :

``` bash
cd projet2024/docs/
cp ../Projet\ d\'établissement\ de\ l\'Abes\ 2024-2028\ -\ calendrier\ -\ v2.4.md ./projet2024-calendrier.md
pandoc -s ../Projet\ d\'établissement\ de\ l\'Abes\ 2024-2028\ -\ v2.4.docx -t gfm -o ./projet2024.md --extract-media=.

# nettoyage de la tabe des matières qui n'a pas d'intérêt dans la version markdown (autogénérée)
sed -i -n '/# 1\\. Résumé exécutif/,$p' ./projet2024.md

# nettoyage de la section sur le calendrier car elle est auto-générée depuis le markdown
sed -i '/# 8\\. Calendrier prévisionnel/,$d' ./projet2024.md
rm -f media/image2.png media/image3.png media/image4.png media/image5.png media/image6.png media/image7.png

# ajout d'un niveau de titre pour qu'il n'y ai qu'un H1 dans la page
sed -i 's/^#/##/' ./projet2024.md

# typo: pandoc rajoute un anti-slash devant le & de R&D !
sed -i 's#R\\&D#R\&D#g' ./projet2024.md

# style des critères de réussites qui n'apparaissent pas soulignés
sed -i 's/<span class="underline">\([^<]*\)<\/span>/<u>\1<\/u>/g' ./projet2024.md

# ajout du H1 de la page
echo "---
title: version 2.4
---

# Projet d’établissement 2024-2028 de l'Abes

Version finale (2.4) du projet d'établissement 2024-2028 de l'Abes publiée le 24/11/2023.

" > ./projet2024-head.md
cat ./projet2024-head.md ./projet2024.md > ./projet2024-final.md
mv  ./projet2024-final.md ./projet2024.md && rm ./projet2024-head.md

# ajout de la section 8 pour le calendrier prévisionnel
echo "
## 8\. Calendrier prévisionnel

[Voir cette page qui présente le calendrier prévisionnel du projet 2024-2028 de l'Abes](./projet2024-calendrier).
" >> ./projet2024.md

# copie dans la version en question (2.4 dans cet exemple)
cp -r * ../versioned_docs/version-2.4/
```

Il faut ensuite commit/push le nouveau md après avoir vérifié qu'il est propre.

### Etape 2 : générer la version dans docusaurus


Une fois le document prêt en markdown, il faut la publiée de manière versionnée dans le site (construction de l'URL, menu déroulant pour l'accès aux différentes versions, liens directes sur la page d'accueil).
1. Figer la version = commande pour créer l'arborescence pour cette version *projet2024/docs/versioned_docs/**version-X.Y*** et copier le contenu du répertoire de travail *projet2024/docs/* dans ce répertoire.  
   ```npm run docusaurus docs:version X.Y ```

2. Mettre à jour le menu déroulant dans le fichier : *projet2024/**docusaurus.config.js***

```
   docs: {  
     sidebarPath: require.resolve('./sidebars.js'),        
     includeCurrentVersion: false,  
     versions: {
                       'X.Y': {
                           label: 'version X.Y ouverte à commentaire,
                           path: 'X.Y',
                       },
                       '1.1': {
                           label: 'version 1.1 archivée',
                           path: '1.1',
                       },
                       '1.0': {
                           label: 'version 1.0  archivée',
                           path: '1.0',
                       },
                   },
```

3. Mettre à jour le lien pour les boutons d'accès à cette version depuis la page d'accueil dans le fichier :  *projet2024/src/components/ConsulterProjetAbesLink/**index.js***
```
<Link  
  className="button button--secondary button--lg"  
  to="/docs/X.Y/projet2024">  
  Consulter le projet  
</Link>
```

### Etape 3 : publier en production

Une fois les étapes 1 et 2 bien testée sur les environnements de dev et test, pour passer le résultat en production il est nécessaire de générer une release. Les étapes à suivre sont expliquées dans [la politique de développement de l'Abes ici](https://github.com/abes-esr/abes-politique-developpement/blob/main/01-Gestion%20du%20code%20source.md#publier-une-nouvelle-release-dune-application).

La seule subtilité concerne le nommage de la version à 3 chiffres `X.Y.Z`. En effet dans le cas de projet2024, nous cherchons à faire cohabiter la numérotation habituelle `X.Y.Z` avec la numérotation abrégée `X.Y` choisie dans le cadre du projet2024. La règle à respecter pour numéroter les release git est la suivante :
conserver la numérotation relative au contenu du projet2024 pour les deux premiers chiffres et éventuellement incrémenter le dernier chiffre si plusieurs releases sont nécessaires relatives à un contenu qui n'a pas bougé (par exemple ajustement de la forme, d'un logo, d'une typo).

Exemple sur un cas réel :
- si le contenu du projet2024 est numéroté `1.1` (cf répertoire `versionned_docs/version-1.1/`)
- alors pour passer en production, on s'aide de [create-release.yml](https://github.com/abes-esr/projet2024/actions/workflows/create-release.yml), et on choisi une numérotation `1.1.0` pour la release
- ensuite dans la foulée, on si on a oublié un logo ou une typo dans le texte, on fait la modif en dev/test, puis on peut regénérer une release à l'aide de [create-release.yml](https://github.com/abes-esr/projet2024/actions/workflows/create-release.yml), avec le numéro de release `1.1.1`
- et ainsi de suite `1.1.2`, `1.1.3` etc ...


## Procédure de mise à jour des versions traduites après modification de texte

La gestion de la traduction de texte dans docusaurus est différente selon si le texte est modifié dans un composant react, dans un doc, une page ou la configuration de docusaurus.
Pour chacun de ces cas, veuillez vous référer aux points suivants.

Après toute modification, il faut lancer la commande ```npm run build -- --locale en```

### 1. Modification des docs (projet2024.md ou projet2024-calendrier.md)

Pour chaque version des documents principaux présents dans le dossier ```/versioned_docs/version-x.x/```, la version traduite en anglais doit être placée dans un dossier équivalent ```/i18n/en/docusaurus-plugin-content-docs/version-x.x/``` 

Pour chaque version il faut créer un fichier ```version-x.x.json``` à la racine du dossier ```/i18n/en/docusaurus-plugin-content-docs/```
Avec le contenu suivant qui traduit l'étiquette de la version x.x :
```
{
  "version.label": {
    "message": "2.4 final version",
    "description": "The label for version 2.2"
  }
}
```

### 2. Modification des autres pages

Les pages décrites dans le dossier ```/src/pages/``` doivent être intégralement traduites et placées dans le dossier ```/i18n/en/docusaurus-plugin-content-pages/``` avec le même nom.

### 3. Modification des composants

#### a. Elements de configuration, navbar et footer

Si des modifications y sont apportées, il faut d'abord lancer la commande ``` npm run write-translations ```

```bash

i18n/
├── en
│   ├── code.json
│   └── docusaurus-theme-classic
│       ├── footer.json
│       └── navbar.json
└── fr
    ├── code.json
    └── docusaurus-theme-classic
        ├── footer.json
        └── navbar.json
        
```

Ensuite, il faut comparer les fichiers json des dossiers ```/i18n/fr/``` et ```/i18n/en/``` et mettre à jour ceux du dossier ```en/``` 

#### b. Composants react 

Pour les fichiers js comme les composants du dossier ```/src/components/```, les textes à traduire doivent être entourées des balises ```<Translate>texte à traduire</Translate>```

La commande ``` npm run write-translations ``` va ensuite ajouter les lignes correspondantes dans le fichier ```/i18n/fr/code.json``` qu'il faudra copier dans le fichier ```/i18n/en/code.json``` et traduire 
la valeur correspondant à la clé 'message'.

Pour plus de détails, se référer au <u>[tutoriel docusaurus sur l'i18n](https://docusaurus.io/docs/i18n/tutorial)</u>.