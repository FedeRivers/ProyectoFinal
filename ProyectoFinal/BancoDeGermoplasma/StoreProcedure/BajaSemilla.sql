CREATE PROCEDURE [dbo].[BajaSemilla] 
	@IdSemilla INT

AS
IF NOT EXISTS(SELECT * FROM Sobres WHERE idSemilla = @IdSemilla AND activo = 1)
BEGIN
	UPDATE Semillas SET activo = 0 WHERE idSemilla = @IdSemilla
END
ELSE
BEGIN
	return -1
END


