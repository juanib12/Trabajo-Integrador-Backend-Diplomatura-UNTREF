# Trabajo Integrador Backend Diplomatura UNTREF
Este proyecto se basa en una aplicación utilizando Node.js y MongoDB para gestionar una colección de prendas de ropa. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre los productos.

## Desarrollado por:
- **Desarrollador:** Juan Ignacio Bianco 
- **GitHub:** [juanib12](https://github.com/juanib12)

## Docentes:
- **Profesor:** Fabio D. Argañaraz A.
- **Tutor:** Juan Nebbia
- **Tutor:** Nicolás Krein Werle

## Tabla de contenidos:
- [Instalación](#instalación-)
- [Endpoints](#Endpoints)

## Instalación:
1. **Fork** al [repositorio](https://github.com/juanib12/Trabajo-Integrador-Backend-Diplomatura-UNTREF).
2. **Clona** tu fork en tu máquina local.
3. **Inicia** una nueva terminal y escribe `npm install`.

## Endpoints:
| PETICIÓN | URL | DESCRIPCIÓN |
|:--------:|-----|-------------|
| GET | / | Ruta principal (Devuelve un mensaje de bienvenida a la API). |
| GET | /productos | Devuelve todos los productos. |
| GET | /productos/:id | Devuelve un producto por su ID. |
| GET | /productos/nombre/:nombre | Devuelve los productos que coinciden con el nombre especificado (búsqueda parcial). |
| POST | /productos | Crear un nuevo producto. |
| PATCH | /productos/:id | Modificar SOLO el precio de un producto mediante su ID. |
| DELETE | /productos/:id | Eliminar un producto por su ID. |