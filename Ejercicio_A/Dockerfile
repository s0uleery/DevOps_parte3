# Imagen base de Node
FROM node:20

# Carpeta de trabajo 
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir el proyecto NestJS
RUN npm run build

# Exponer el puerto donde escucha la app
EXPOSE 3000

# Comando por defecto al levantar el contenedor
CMD ["npm", "run", "start:prod"]
