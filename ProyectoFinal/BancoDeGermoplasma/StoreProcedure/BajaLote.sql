CREATE PROCEDURE BajaLote
	 @NumeroLote INT
AS
IF EXISTS(SELECT * FROM Sobres WHERE numeroLote = @NumeroLote AND idEstado = 1 AND activo = 1)
BEGIN
	UPDATE Lotes SET activo = 0 WHERE numeroLote = @NumeroLote
	UPDATE Sobres SET activo = 0 WHERE numeroLote = @NumeroLote
END

ELSE
BEGIN
	RETURN -1
END
GO