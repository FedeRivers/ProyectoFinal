CREATE PROCEDURE ModificarTiposDeUsuario
	@IdTipoDeUsuario INT,
	@ModulosPDT ModulosPDT READONLY
AS
BEGIN
	INSERT INTO ModulosPorTiposDeUsuario(idModulo, idTipoDeUsuario)
	VALUES((SELECT mpdt.idModulo
			FROM @ModulosPDT mpdt), @IdTipoDeUsuario)
END
GO
