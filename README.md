🔧 Backend – Sistema de Inventario

Backend desarrollado para el Sistema de Inventario Web, encargado de la lógica del negocio, la exposición de la API REST y la conexión con la base de datos PostgreSQL.

Este backend fue implementado utilizando Node.js y Express, siguiendo una estructura organizada por capas para facilitar el mantenimiento y la escalabilidad del sistema.

🧑‍💻 Autores

Cristhian Moscoso

Erika Mosquera

🎯 Objetivo del Backend

Implementar una API REST que permita:

Gestionar la información del inventario

Conectarse a una base de datos relacional

Procesar solicitudes del frontend

Garantizar una correcta separación entre lógica, rutas y servicios

El backend tiene fines académicos.

🛠️ Tecnologías Utilizadas

Node.js

Express

PostgreSQL

pg (cliente PostgreSQL)

dotenv (variables de entorno)

JavaScript (ES6+)

📁 Estructura del Backend
backend/
├── db.js
├── server.js
├── routes/
├── controllers/
├── services/
├── init.sql
├── package.json
└── package-lock.json

📌 Descripción de carpetas y archivos

server.js: archivo principal que inicia el servidor Express.

db.js: configuración y creación del pool de conexión a PostgreSQL.

routes/: definición de las rutas de la API.

controllers/: manejo de la lógica entre rutas y servicios.

services/: acceso a datos y consultas a la base de datos.

init.sql: script de creación de la base de datos y tablas.

🗄️ Base de Datos

La base de datos fue implementada en PostgreSQL y administrada mediante DBeaver.
La estructura se crea ejecutando el script:

init.sql


Ejemplo de creación de base de datos:

CREATE DATABASE inventario_cristhian;


Cada desarrollador trabaja con una base de datos local propia, lo que garantiza independencia y correcta evidencia del funcionamiento del backend.

🔐 Variables de Entorno

La conexión a la base de datos se configura mediante variables de entorno utilizando dotenv.

📄 backend/.env

DB_USER=postgres
DB_HOST=localhost
DB_NAME=inventario_cristhian
DB_PASSWORD=tu_password
DB_PORT=5432


Esto permite mantener las credenciales fuera del código fuente y aplicar buenas prácticas de seguridad.

▶️ Ejecución del Backend
1️⃣ Instalar dependencias
npm install

2️⃣ Ejecutar el servidor
node src/server.js


El backend se ejecuta en:

http://localhost:3000

🔁 Pruebas de la API

Las pruebas de los endpoints se realizaron utilizando Thunder Client, extensión integrada en Visual Studio Code, permitiendo verificar:

Conexión con la base de datos

Respuesta correcta de los endpoints

Funcionamiento de la API REST

📌 Buenas Prácticas Aplicadas

Uso de variables de entorno

Conexión centralizada a la base de datos

Arquitectura por capas (rutas, controladores y servicios)

Código modular y organizado

API REST desacoplada del frontend

📚 Contexto Académico

Este backend fue desarrollado con fines académicos como parte del aprendizaje de:

Desarrollo de APIs REST

Conexión a bases de datos relacionales

Arquitectura de software

✅ Estado del Backend

🟢 Operativo
🟡 En mejora continua
