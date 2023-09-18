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
COPY . /app/

# Build the Docusaurus app
RUN npm run build

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:1.25 as projet2024-image
# Copy what we've installed/built from production
COPY --from=build-image /app/build /usr/share/nginx/html/
COPY ./.docker/docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
