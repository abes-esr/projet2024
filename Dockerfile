## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:lts as build-image

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
FROM nginx:stable-alpine as front-image
# Copy what we've installed/built from production
COPY --from=build-image /app/build /usr/share/nginx/html/
EXPOSE 80