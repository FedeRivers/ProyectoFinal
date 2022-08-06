﻿CREATE PROCEDURE [dbo].[AltaUsuario] 
	@Nombre varchar(100),
	@Apellido varchar(100),
	@Contrasena varchar(50),
	@Mail varchar(100),
	@Cedula varchar(10)
AS
BEGIN
	BEGIN TRY
		Insert into Usuarios(nombre,apellido,contrasena,mail,cedula) values (@Nombre,@Apellido,@Contrasena,@Mail,@Cedula)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END