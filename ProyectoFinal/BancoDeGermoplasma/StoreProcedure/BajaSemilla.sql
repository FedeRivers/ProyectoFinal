CREATE PROCEDURE [dbo].[BajaSemilla] 
	@IdSemilla INT

AS
BEGIN
	BEGIN TRY
		UPDATE Semillas SET activo = 0 WHERE idSemilla = @IdSemilla
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END