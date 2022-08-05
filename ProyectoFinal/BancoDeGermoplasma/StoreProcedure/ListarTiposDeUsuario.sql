CREATE PROCEDURE ListarTiposDeUsuario
AS
BEGIN
	SELECT idTipoDeUsuario,nombre,activo FROM TipoDeUsuario WHERE activo = 1
END
GO
