CREATE PROCEDURE [dbo].[DevolverLotes]
	@NumeroLote int 

AS
BEGIN
	UPDATE Sobres SET idEstado = 12, activo = 0 WHERE numeroLote = @NumeroLote
	UPDATE Lotes SET activo = 0 WHERE numeroLote = @NumeroLote
END
