CREATE PROCEDURE [dbo].[BajaSobre]
	 @NumeroSobre INT
AS
BEGIN
	UPDATE Sobres SET activo = 0 WHERE numeroSobre = @NumeroSobre
END