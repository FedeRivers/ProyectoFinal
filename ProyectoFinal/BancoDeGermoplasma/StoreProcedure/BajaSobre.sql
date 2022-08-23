CREATE PROCEDURE [dbo].[BajaSobre]
	 @IdSobre INT
AS
BEGIN
	UPDATE Sobres SET activo = 0 WHERE idSobre = @IdSobre
END