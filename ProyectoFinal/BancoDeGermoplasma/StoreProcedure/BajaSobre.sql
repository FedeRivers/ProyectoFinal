CREATE PROCEDURE [dbo].[BajaSobre]
	 @IdSobre INT
AS
BEGIN
	UPDATE Sobres SET activo = 0 WHERE idSobre = @IdSobre

	DECLARE @NumeroLote int = (SELECT numeroLote FROM Sobres WHERE idSobre = @IdSobre)
	IF NOT EXISTS(SELECT * FROM Sobres WHERE numeroLote = @NumeroLote AND activo = 1)
	BEGIN
		UPDATE Lotes SET activo = 0 WHERE numeroLote = @NumeroLote
	END
END