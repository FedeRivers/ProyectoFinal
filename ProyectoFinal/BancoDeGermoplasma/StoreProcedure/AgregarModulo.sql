CREATE PROCEDURE AgregarModulo
	@IdTipoDeUsuario INT,
	@IdModulo INT
AS
BEGIN
	INSERT INTO ModulosPorTiposDeUsuario(idModulo, idTipoDeUsuario)
	VALUES (@IdModulo, @IdTipoDeUsuario)
END
GO
