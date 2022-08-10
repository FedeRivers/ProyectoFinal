CREATE PROCEDURE [dbo].[ListarModulosPorTipoDeUsuario] 
	@TipoDeUsuarioId int
AS
BEGIN
	SELECT *
	FROM Modulos
	WHERE activo = 1 AND (idModulo IN (SELECT idModulo FROM ModulosPorTiposDeUsuario WHERE idTipoDeUsuario = @TipoDeUsuarioId) OR @TipoDeUsuarioId IS NULL OR @TipoDeUsuarioId = 0)
END