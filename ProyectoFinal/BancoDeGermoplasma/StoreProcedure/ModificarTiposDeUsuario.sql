CREATE PROCEDURE [dbo].[ModificarTiposDeUsuario]
	@IdModulo INT,
	@IdTipoDeUsuario INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS(SELECT * FROM ModulosPorTiposDeUsuario WHERE idModulo = @IdModulo AND idTipoDeUsuario = @IdTipoDeUsuario)
			BEGIN
				DELETE FROM ModulosPorTiposDeUsuario WHERE idModulo = @IdModulo AND idTipoDeUsuario = @IdTipoDeUsuario
			END
		ELSE
			BEGIN
				INSERT INTO ModulosPorTiposDeUsuario(idModulo, idTipoDeUsuario) VALUES(@IdModulo,@IdTipoDeUsuario)
			END
		RETURN 0
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION
		RETURN -1
	END CATCH
END
