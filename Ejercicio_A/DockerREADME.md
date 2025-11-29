# Ejercicio A - Utilizando Docker y Docker Compose, implemente contenerización a una aplicación.

En el ejercicio A, se implementa la contenerización a una aplicación NodeJS, una base de datos MariaDB y una visualización con phpMyAdmin. Se utiliza Docker para la creación de imagen y Docker Compose para levantar los tres servicios.

## Servicios
- **App (NestJS):** API REST corriendo en el puerto 3000.
- **MariaDB:** Base de datos principal.
- **phpMyAdmin:** Interfaz gráfica para administrar la base (puerto 8081).

## Archivos 
- `Dockerfile`: Construye la imagen de la aplicación.
- `docker-compose.yaml`: Configura y levanta los tres diferentes servicios.
- `.env`: Variables de entorno para la conexión de la base de datos.

## Ejecución
Desde la carpeta `Ejercicio_A` hay que ejecutar:

```bash
docker compose up --build
```

**Recordar tener docker desktop corriendo para un correcto build**