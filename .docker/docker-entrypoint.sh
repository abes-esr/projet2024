#!/bin/bash

# Paramètres par défaut du conteneur
export PROJET2024_URL=${PROJET2024_URL:='http://projet2024-local.abes.fr/'}

# Remplace les placeholders dans le code généré en prod
# PROJET2024_URL__PLACEHOLDER
# On va remplacer les placeholders depuis les JS originales
echo "-> Remplacement des placeholders dans la destination /usr/share/nginx/html/"
echo "-> PROJET2024_URL=${PROJET2024_URL}"
if [ ! -d /usr/share/nginx/html.orig/ ]; then
    cp -rf /usr/share/nginx/html/ /usr/share/nginx/html.orig/  
fi
rm -rf /usr/share/nginx/html/
cp -raf /usr/share/nginx/html.orig/ /usr/share/nginx/html/
find /usr/share/nginx/html/ -exec \
  sed -i "s#https://PROJET2024_URL__PLACEHOLDER#${PROJET2024_URL}#g" {} \;

# execute nginx (cf CMD dans Dockerfile)
exec "$@"
