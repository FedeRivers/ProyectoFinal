CREATE PROCEDURE [dbo].[ModificarUsuario] 
	@IdUsuario int,
	@Nombre varchar(100),
	@Apellido varchar(100),
	@Contrasena varchar(100),
	@Mail varchar(100),
	@Cedula varchar(10),
	@IdTipoDeUsuario int,
	@Celular varchar(9)

AS
BEGIN
	UPDATE Usuarios SET nombre = @Nombre, apellido = @Apellido, contrasena = @Contrasena, mail = @Mail, cedula = @Cedula, idTipoDeUsuario = @IdTipoDeUsuario, fechaDeModificacion = GETDATE(), celular = @Celular WHERE idUsuario = @IdUsuario
END