CREATE PROCEDURE ModificarLote
	 @NumeroLote INT,
	 @Descripcion VARCHAR(100),
	 @IdMejorador INT
AS
BEGIN
	UPDATE Lotes SET descripcion = @Descripcion, idMejorador = @IdMejorador WHERE numeroLote = @NumeroLote
END
GO
