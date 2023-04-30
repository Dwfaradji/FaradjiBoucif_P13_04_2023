# Définit l'image de base
FROM node:lts-alpine

# Copie le contenu du répertoire courant dans le conteneur de travail
COPY . /app

# Définit le répertoire de travail
WORKDIR /app

# Installe les dépendances NodeJS
RUN npm install

# Expose le port 3001 pour que le serveur NodeJS soit accessible
EXPOSE 3001

# Démarre le serveur NodeJS
CMD ["npm", "run", "dev:server"]
