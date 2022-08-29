CREATE PROCEDURE BajaLote
	 @IdLote INT
AS
BEGIN
	UPDATE Lotes SET activo = 0 WHERE numeroLote = @IdLote
END
GO