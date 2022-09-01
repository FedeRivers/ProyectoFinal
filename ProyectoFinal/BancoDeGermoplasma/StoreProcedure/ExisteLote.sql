CREATE PROCEDURE [dbo].[ExisteLote]
	@NumeroLote INT,
	@IdMejorador INT 
AS
BEGIN
	IF EXISTS(SELECT * FROM Lotes WHERE numeroLote = @NumeroLote AND idMejorador = @IdMejorador)
	RETURN 0
	ELSE
	RETURN -1
END