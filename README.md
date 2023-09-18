# projet2024

Dépôt de l'application [Docusaurus 2](https://docusaurus.io/) permettant la diffusion du contenu du projet d'établissement 2024-2028 sur le site web https://projet2024.abes.fr

Le site est déployé à l'aide de la configuration suivante :  
https://github.com/abes-esr/projet2024-docker


## Publier une nouvelle version du projet

La version de travail du projet d'établissement est un docx partagé entre tous les membres de l'équipe projet. Pour la publier il est nécessaire de convertir le docx en markdown. Voici les commandes permettant de le faire :

``` bash
cd projet2024/docs/
pandoc -s ../Projet\ d\'établissement\ de\ l\'Abes\ 2024-2028\ -\ v1.0.docx -t gfm -o ./projet2024.md --extract-media=.

# nettoyage de la tabe des matières qui n'a pas d'intérêt dans la version markdown (autogénérée)
sed -i -n '/# Résumé exécutif/,$p' ./projet2024.md

# ajout d'un niveau de titre pour qu'il n'y ai qu'un H1 dans la page
sed -i 's/^#/##/' ./projet2024.md

# ajout du H1 de la page
echo "# Projet d’établissement 2024-2028 de l'Abes

Version 1.0 du projet d'établissement 2024-2028 de l'Abes publiée au 15/09/2023.

" > ./projet2024-head.md
cat ./projet2024-head.md ./projet2024.md > ./projet2024-final.md
mv  ./projet2024-final.md ./projet2024.md && rm ./projet2024-head.md
```

Il faut ensuite commit/push le nouveau md après avoir vérifié qu'il est propre.
