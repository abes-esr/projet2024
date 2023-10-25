#!/bin/bash

# Paramètres par défaut du conteneur
export PROJET2024_HTTP_BASEURL=${PROJET2024_HTTP_BASEURL:='http://projet2024-local.abes.fr/'}

# Remplace les placeholders dans le code généré en prod
# PROJET2024_HTTP_BASEURL__PLACEHOLDER
# On va remplacer les placeholders depuis les JS originales
echo "-> Remplacement des placeholders dans la destination /usr/share/nginx/html/"
echo "-> PROJET2024_HTTP_BASEURL=${PROJET2024_HTTP_BASEURL}"
if [ ! -d /usr/share/nginx/html.orig/ ]; then
    cp -rf /usr/share/nginx/html/ /usr/share/nginx/html.orig/  
fi
rm -rf /usr/share/nginx/html/
cp -raf /usr/share/nginx/html.orig/ /usr/share/nginx/html/
find /usr/share/nginx/html/ -exec \
  sed -i "s#https://PROJET2024_HTTP_BASEURL__PLACEHOLDER#${PROJET2024_HTTP_BASEURL}#gI" {} \;

