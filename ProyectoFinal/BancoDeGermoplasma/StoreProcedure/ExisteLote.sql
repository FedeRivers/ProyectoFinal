CREATE PROCEDURE [dbo].[ExisteLote]
	@NumeroLote INT
AS
BEGIN
	IF EXISTS(SELECT * FROM Lotes WHERE numeroLote = @NumeroLote)
	RETURN 0
	ELSE
	RETURN -1
END