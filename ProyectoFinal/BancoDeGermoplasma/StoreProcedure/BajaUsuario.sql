CREATE PROCEDURE [dbo].[BajaUsuario] 
	@IdUsuario INT

AS
BEGIN
	BEGIN TRY
		UPDATE Usuarios SET activo = 0 WHERE idUsuario = @IdUsuario
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END