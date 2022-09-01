CREATE PROCEDURE [dbo].[ExisteSobre]
	@NumeroSobre INT,
	@NumeroLote INT 
AS
BEGIN
	IF EXISTS(SELECT * FROM Sobres WHERE numeroLote = @NumeroLote AND numeroSobre = @NumeroSobre)
	RETURN 0
	ELSE
	RETURN -1
END