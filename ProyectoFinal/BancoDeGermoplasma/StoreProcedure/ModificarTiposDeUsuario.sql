CREATE PROCEDURE [dbo].[ModificarTiposDeUsuario]
	@IdModulo INT,
	@IdTipoDeUsuario INT
AS
BEGIN
	BEGIN TRY
		UPDATE ModulosPorTiposDeUsuario SET idModulo = @IdModulo WHERE idTipoDeUsuario = @IdTipoDeUsuario
		RETURN 0
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION
		RETURN -1
	END CATCH
END
