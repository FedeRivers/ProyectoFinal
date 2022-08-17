CREATE PROCEDURE [dbo].[ListarTiposDeUsuario]

AS
BEGIN
	SELECT idTipoDeUsuario,nombre,activo FROM TiposDeUsuario where  activo = 1		
END