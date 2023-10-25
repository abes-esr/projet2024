## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:18 as build-image

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /app/

# Install dependencies
COPY ./package*.json /app/
RUN npm install

# Copy the source code over
COPY ./docs/            /app/docs/
COPY ./i18n/            /app/i18n/
COPY ./src/             /app/src/
COPY ./static/          /app/static/
COPY ./versioned_docs/  /app/versioned_docs/
COPY ./*.js /app/
COPY ./*.json /app/

# Build the Docusaurus app
RUN npm run build

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:1.25 as projet2024-image
COPY --from=build-image /app/build /usr/share/nginx/html/
# notre entrypoint permettant entre autre d'injecter la variable d'env .docker/nginx-default.conf.template
COPY ./.docker/docker-entrypoint.sh /docker-entrypoint.d/40-projet2024-docker-entrypoint.sh
# la personnalisation de la config nginx pour projet2024
COPY ./.docker/nginx-default.conf.template   /etc/nginx/templates/default.conf.template
