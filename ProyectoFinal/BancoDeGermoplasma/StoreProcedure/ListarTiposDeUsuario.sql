CREATE PROCEDURE ListarTiposDeUsuario
AS
BEGIN
	SELECT idTipoDeUsuario,nombre,activo FROM TiposDeUsuario WHERE activo = 1
END
GO
