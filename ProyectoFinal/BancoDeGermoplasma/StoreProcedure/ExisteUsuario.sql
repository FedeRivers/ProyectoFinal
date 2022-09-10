CREATE PROCEDURE ExisteUsuario
	@Mail VARCHAR(100),
	@Cedula VARCHAR(10)
AS
BEGIN
	IF NOT EXISTS(SELECT * FROM Usuarios WHERE mail = @Mail OR cedula = @Cedula)
	RETURN 0
	IF EXISTS(SELECT * FROM Usuarios WHERE mail = @Mail AND cedula = @Cedula)
	RETURN 1
	IF EXISTS(SELECT * FROM Usuarios WHERE mail = @Mail)
	RETURN 2
	IF EXISTS(SELECT * FROM Usuarios WHERE cedula = @Cedula)
	RETURN 3
END
