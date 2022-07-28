CREATE PROCEDURE [dbo].[Login]
	@Mail VARCHAR(50), 
	@Contrasena VARCHAR(50)
AS
BEGIN
	SELECT *
	FROM Usuarios
	WHERE @Mail = mail AND @Contrasena = contrasena
END
