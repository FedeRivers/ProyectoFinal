CREATE PROCEDURE [dbo].[BajaMejorador] 
	@IdMejorador INT

AS
BEGIN
	BEGIN TRY
		UPDATE Mejoradores SET activo = 0 WHERE idMejorador = @IdMejorador
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END