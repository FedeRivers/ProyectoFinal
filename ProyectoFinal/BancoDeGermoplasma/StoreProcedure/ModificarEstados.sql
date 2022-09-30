CREATE PROCEDURE [dbo].[ModificarEstados]
	@NumeroLote int,
	@IdSemilla int,
	@IdEstado int
AS
BEGIN
	UPDATE Sobres SET idEstado = @IdEstado
	WHERE numeroLote = @NumeroLote and idSemilla = @IdSemilla and idEstado not in(2,3,4)
END
