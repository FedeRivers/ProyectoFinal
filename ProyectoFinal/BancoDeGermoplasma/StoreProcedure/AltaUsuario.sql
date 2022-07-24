CREATE PROCEDURE AltaUsuario 
	@Nombre varchar(100),
	@Apellido varchar(100)
AS
BEGIN
	BEGIN TRY
		Insert into Usuarios(nombre,apellido) values (@Nombre,@Apellido)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END