CREATE PROCEDURE BajaLote
	 @IdLote INT
AS
BEGIN
	UPDATE Lotes SET activo = 0 WHERE idLote = @IdLote
END
GO