# ReservasDeportivas
Aplicación para crear citas para distintos deportes seleccionando pista, fecha y tiempo.

Para ejecutar la aplicacion se debe ejecuatar la API de .Net Core y la aplicacion web de Angular.

API:
Abrir la solucion en .\WebApi\CitasWebApi\CitasWebApi.sln con Visual Studio
	En la consola de administrador de paquetes ejecuatar los comandos para la creacion de las tablas en SQL Server
		Add-Migration Vx
		Update-Database

APP WEB:
 En VSCode abrir la carpeta .\Front\CitasCrud y ejecutar el siguiente comando npm run ng serve --o
 
