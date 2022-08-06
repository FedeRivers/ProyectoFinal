﻿CREATE PROCEDURE [dbo].[ModificarUsuario] 
	@IdUsuario int,
	@Nombre varchar(100),
	@Apellido varchar(100),
	@Contrasena varchar(50),
	@Mail varchar(100),
	@Cedula varchar(10)

AS
BEGIN
	BEGIN TRY
		UPDATE Usuarios SET nombre = @Nombre, apellido = @Apellido, contrasena = @Contrasena, mail = @Mail, cedula = @Cedula, fechaDeModificacion = GETDATE() WHERE idUsuario = @IdUsuario
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END