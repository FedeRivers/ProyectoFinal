CREATE PROCEDURE ExisteUsuario
	@Mail VARCHAR(100),
	@Cedula VARCHAR(10),
	@IdUsuario INT,
	@Celular VARCHAR(9)
AS
BEGIN
	IF NOT EXISTS(SELECT * FROM Usuarios WHERE mail = @Mail OR cedula = @Cedula OR celular = @Celular AND idUsuario <> @IdUsuario) 
	RETURN 0
	IF EXISTS(SELECT * FROM Usuarios WHERE mail = @Mail AND cedula = @Cedula AND idUsuario <> @IdUsuario)
	RETURN 1
	IF EXISTS(SELECT * FROM Usuarios WHERE mail = @Mail AND idUsuario <> @IdUsuario)
	RETURN 2
	IF EXISTS(SELECT * FROM Usuarios WHERE cedula = @Cedula AND idUsuario <> @IdUsuario)
	RETURN 3
	IF EXISTS(SELECT * FROM Usuarios WHERE celular = @Celular AND idUsuario <> @IdUsuario)
	RETURN 4
END
