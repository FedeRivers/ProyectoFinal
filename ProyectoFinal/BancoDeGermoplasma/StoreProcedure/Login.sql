CREATE PROCEDURE [dbo].[Login]
	@Mail VARCHAR(50), 
	@Contrasena VARCHAR(100)
AS
BEGIN
	SELECT *
	FROM Usuarios u INNER JOIN TiposDeUsuario tu ON u.idTipoDeUsuario = tu.idTipoDeUsuario
	WHERE @Mail = mail AND @Contrasena = contrasena
END