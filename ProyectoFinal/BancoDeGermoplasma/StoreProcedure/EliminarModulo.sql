CREATE PROCEDURE EliminarModulo
	@IdTipoDeUsuario INT,
	@IdModulo INT
AS
BEGIN
	DELETE FROM ModulosPorTiposDeUsuario
	WHERE idModulo = @IdModulo AND idTipoDeUsuario = @IdTipoDeUsuario
END
GO
