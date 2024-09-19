# Main app Taller 1 Arquitectura de Sistemas

## Autor
Fernando Javier Sanabria Ampuero

## Correo
fernando.sanabria@alumnos.ucn.cl

## Rut
21.011.823-3

## Prerequisitos

Antes de correr el projecto, asegurate de tener las siguientes cosas instaladas:

- NPM (version 10.8.2)
- Node.js (version 20.17.0)
- Git (version 2.46.0)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Arch-texture/main-app.git
```

2. Navega al directorio del proyecto:

```bash
cd main-app
```

3. Instala las dependecias del proyecto:

```bash
npm install
```

4. Crea el archivo .env

```bash
cp .env.example .env
```

5. Configura el puerto y añade las URL de los servicios
```dotenv
PORT=0000 //Configurar el puerto

US_BASEURL="url-de-us" //Url base del servicio de usuarios (User Service)
GS_BASEURL="url-de-gs" //Url base del servicio de notas (Grades service)
RS_BASEURL="url-de-rs" //Url base del servicio de restricciones (Restriction service)
SS_BASEURL="url-de-ss" //Url base del servicio de busqueda (Search service)

TEST_BASEURL="https://fakestoreapi.com"

JWT_KEY="secreto"
```


## Uso

Para correr el proyecto, utiliza el siguiente comando:

```bash
node app
```

El proyecto se ejecutará en el puerto especificado

Para detener la aplicación, utiliza el siguiente atajo en la terminal:

<kbd>Ctrl</kbd> + <kbd>C</kbd>
