CREATE PROCEDURE [dbo].[ResetearContrasena]
	@IdUsuario int,
	@Contrasena varchar(100)
AS
BEGIN
	UPDATE Usuarios SET contrasena = @Contrasena WHERE idUsuario = @IdUsuario
END
